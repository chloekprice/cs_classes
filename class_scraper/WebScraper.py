from recipe_scrapers import scrape_html
from ingredient_parser import parse_ingredient
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import requests
import json
import nltk

class RecipeCrawler:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited = set()
        self.recipe_links = []

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

        return self.recipe_links 


    def crawl(self, url):
        if url in self.visited:
            return
        self.visited.add(url)

        try:
            response = requests.get(url)
            if response.status_code != 200:
                return
            
            soup = BeautifulSoup(response.content, 'html.parser')

            for item in soup.find_all("div", {"class": "views-row"}):
                for link in item.find_all('a', href=True):
                    full_url = urljoin(self.base_url, link['href'])

                    if self.is_recipe_page(full_url):
                        if full_url in self.recipe_links:
                            continue
                        else:
                            self.recipe_links.append(full_url)
                            self.crawl(full_url)
                    else:
                        if urlparse(full_url).netloc == urlparse(self.base_url).netloc:
                            self.crawl(full_url)

        except Exception as e:
            print (f"Error while crawling {url}: {e}") 

    def is_recipe_page(self, url):
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        if 'ingredients' in soup.get_text():
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
    # if recipe_title := scraper.title():
    #     return recipe_title
        # if recipe_description := scraper.description():
        #     if recipe_image := scraper.image():
        #         if recipe_cooktime := scraper.cook_time():
        #             if recipe_nutrients := scraper.nutrients():
        #                 if recipe_cuisine := scraper.cuisine():
        #                     if recipe_restrictions := scraper.dietary_restrictions():
        #                         if recipe_equipment := scraper.equipment():
        #                             if recipe_keywords := scraper.keywords():
        #                                 if recipe_url := scraper.canonical_url():
        #                                     if recipe_ingredients := scraper.ingredients():
        #                                         parsed_ingredients = []
        #                                         for ingredient in ingredients:
        #                                             parsed_ingredients.append(parse_ingredient(ingredient))
                                                
        #                                         parsed_recipe = {
        #                                             'title': recipe_image,
        #                                             'description': recipe_description,
        #                                             'image': recipe_image,
        #                                             'cooktime': recipe_cooktime,
        #                                             'nutrients': recipe_nutrients,
        #                                             'cuisine': recipe_cuisine,
        #                                             'restrictions': recipe_restrictions,
        #                                             'equipment': recipe_equipment,
        #                                             'keywords': recipe_keywords,
        #                                             'url': recipe_url,
        #                                             'ingredients': parsed_ingredients
        #                                         }

        #                                         return parsed_recipe
    # return None


def save_recipes(recipes, filename='recipes.json'):
    with open(filename, 'w') as f:
        json.dump(recipes, f, indent=2)       



def main():
    start_url = "https://www.myplate.gov/myplate-kitchen/recipes"
    base_url = "https://www.myplate.gov/recipes/"
    crawler = RecipeCrawler(base_url)
    recipe_urls = crawler.start(start_url)

    recipe_list = []
    for url in recipe_urls:
        recipe_list.append(save_recipe_info(url))

    print(len(recipe_list))

    save_recipes(recipe_list)

    # print("Found recipe pages:")
    # for recipe in recipes:
    #     print(recipe)

    # url = "https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/"
    # html = requests.get(url, headers={"User-Agent": f"Burger Seeker {'Mia'}"}).content
    # scraper = scrape_html(html, org_url=url)
    
    # ingredients = scraper.ingredients()
    # for ingredient in ingredients:
    #    print(parse_ingredient(ingredient))

if __name__ == '__main__':
    main()
