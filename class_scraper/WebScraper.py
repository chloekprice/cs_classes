from recipe_scrapers import scrape_html
from ingredient_parser import parse_ingredient
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import requests
import json
import nltk

class ClassCrawler:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited = set()
        self.class_links = []

    def start(self, start_url):
        self.crawl(start_url)

        # for i in range(2):
        #     try:
        #         response = requests.get(start_url)
        #         if response.status_code != 200:
        #             return
                
        #         meal = BeautifulSoup(response.content, 'html.parser')
        #         for page in meal.find_all("nav", {"class": "pager"}):
        #             for next_one in page.find_all("li", {"class": "pager__item--next"}):
        #                 for link in next_one.find_all('a', href=True):
        #                     full_url = urljoin(start_url, link['href'])
        #                     start_url = full_url
        #                     self.crawl(full_url)
        #     except Exception as e:
        #         print (f"Error while crawling: {e}") 

        return self.class_links 


    def crawl(self, url):
        if url in self.visited:
            return
        self.visited.add(url)

        try:
            response = requests.get(url)
            if response.status_code != 200:
                return
            
            soup = BeautifulSoup(response.content, 'html.parser')

            for item in soup.select('li.course-button.block.w-full.text-left.p-6.border-b.border-gray-100.cursor-pointer.overflow-hidden.hover\:bg-gray-50'):
                for link in item.find_all('a', href=True):
                    full_url = urljoin(self.base_url, link['href'])

                    if self.is_cs_page(full_url):
                        if full_url in self.class_links:
                            continue
                        else:
                            print("HERE")
                            self.class_links.append(full_url)
                            self.crawl(full_url)
                    else:
                        if urlparse(full_url).netloc == urlparse(self.base_url).netloc:
                            self.crawl(full_url)

        except Exception as e:
            print (f"Error while crawling {url}: {e}") 

    def is_cs_page(self, url):
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        if 'computer science' in soup.get_text():
            return True
        else:
            return False 
 

def save_recipe_info(url):
    html = requests.get(url, headers={"User-Agent": f"Burger Seeker {'Mia'}"}).content
    scraper = scrape_html(html, org_url=url)
    title = scraper.title()
    nutrients = scraper.nutrients()
    ingredients = scraper.ingredients()
    image = scraper.image()
    instructions = scraper.instructions()

    parsed_ingredients = []
    for ingredient in ingredients:
        temp = parse_ingredient(ingredient, string_units=True)
        unit = None
        amount = None
        prep = None
        purpose = None
        comment = None

        if temp.amount is not None:
            try:
                unit = temp.amount[0].unit
                amount = temp.amount[0].quantity
            except:
                pass

        if temp.preparation is not None:
            prep = temp.preparation.text

        if temp.preparation is not None:
            prep = temp.preparation.text
        
        if temp.preparation is not None:
            prep = temp.preparation.text

        ingredient_json = {
            'ingredient_name': temp.name.text,
            'sentence': temp.sentence,
            'amount': amount,
            'unit': unit,
            'preparation': prep,
            'purpose': purpose,
            'commment': comment
        }
        parsed_ingredients.append(ingredient_json)
    
    parsed_instructions = instructions.splitlines()

    parsed_recipe = {
        'title': title,
        'nutrients': nutrients,
        'url': url,
        'image': image,
        'instructions': parsed_instructions,
        'ingredients': parsed_ingredients
    }


    return parsed_recipe


def save_recipes(recipes, filename='recipes.json'):
    with open(filename, 'w') as f:
        json.dump(recipes, f, indent=2)       



def main():
    start_url = "https://catalog.byu.edu/courses?page=1&cq"
    base_url = "https://catalog.byu.edu/courses/01492"

    crawler = ClassCrawler(base_url)
    class_urls = crawler.start(start_url)

    print(len(class_urls))

    # recipe_list = []
    # for url in recipe_urls:
    #     recipe_list.append(save_recipe_info(url))

    # print(len(recipe_list))

    # save_recipes(recipe_list)


if __name__ == '__main__':
    main()
