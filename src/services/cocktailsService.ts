const URL_SERVICE = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const CocktailsService = {
    getRandom: () => fetch(`${URL_SERVICE}/random.php`),
    getByName: (name: string) => fetch(`${URL_SERVICE}/search.php?s=${name}`),
}