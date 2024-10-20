from recipe_scrapers import scrape_html
from lxml.html.soupparser import convert_tree
from ingredient_parser import parse_ingredient
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import time
import json
import nltk

class ClassCrawler:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited = set()
        self.class_links = []

    def start(self, start_url):
        self.crawl(start_url)
        return self.class_links 


    def crawl(self, url):
        if url in self.visited:
            return
        self.visited.add(url)

        try:
            response = requests.get(url)
            if response.status_code != 200:
                return
            
            driver = webdriver.Chrome()
            driver.get(url)
            time.sleep(5)

            html = driver.page_source
            
            soup = BeautifulSoup(html, 'html.parser')
            
            section = soup.find("body").find(id="__nuxt").find(id="__layout").find('div')
            box = section.find(id="main-content").find('div', class_="outline-none").find('article')
            course_list = box.find('ul').find_all('li')

            # link = course_list[1].find('a', href=True)
            # full_url = urljoin(self.base_url, link['href'])
            # self.class_links.append(full_url)

            for list in course_list:
                link = list.find('a', href=True)
                full_url = urljoin(self.base_url, link['href'])
                if self.is_cs_page(full_url):
                    if full_url in self.class_links:
                        pass
                    else:
                        self.class_links.append(full_url)

            driver.quit()    

        except Exception as e:
            print (f"Error while crawling {url}: {e}") 

    def is_cs_page(self, url):
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        if 'computer science' in soup.get_text():
            return True
        else:
            return True 
 

def save_class_info(url):
    response = requests.get(url)
    if response.status_code != 200:
        return
    
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(5)

    html = driver.page_source
    
    soup = BeautifulSoup(html, 'html.parser')

    info = soup.find('article', class_="flex-1")
    class_code = info.find('h1').text
    class_name = info.find_all('h2')[1].text
    class_type = ""
    emphasis = ""

    description = ""
    possibilities = info.find_all('div')
    for possibility in possibilities:
        if possibility.find('h3') is not None:
            if possibility.find('h3').text == "Course Description":
                description = possibility.find('div', class_='field-value').text

    when_taught = ""
    semesters = info.find_all('div')
    for semester in semesters:
        if semester.find('h3') is not None:
            if semester.find('h3').text == "When Taught":
                when_taught = semester.find('div', class_='field-value').text
   
    pre_req = []

    divs = info.find_all("div")
    for div in divs:
        spans = div.find_all('span')
        for span in spans:
            if span.text is not None:
                if span.text == "Complete ALL of the following Courses:":
                    buttons = div.find_all('button')
                    for button in buttons:
                        if button.text is not None:
                            pre_req.append(button.text)

    driver.quit()

    parsed_class = {
        'class_name': class_name,
        'class_code': class_code,
        'class_type':class_type,
        "emphasis": emphasis,
        "pre_req":pre_req[:6],
        "description": description,
        "when_taught": when_taught
    }

    return parsed_class


def save_recipes(recipes, filename='classes5.json'):
    with open(filename, 'w') as f:
        json.dump(recipes, f, indent=2)       



def main():
    start_url = "https://catalog.byu.edu/courses?departments=1323&cq=&page=5"
    base_url = "https://catalog.byu.edu/courses/01492"

    crawler = ClassCrawler(base_url)
    class_urls = crawler.start(start_url)

    print(len(class_urls))

    course_list = []
    for url in class_urls:
        course_list.append(save_class_info(url))

    save_recipes(course_list)


if __name__ == '__main__':
    main()
