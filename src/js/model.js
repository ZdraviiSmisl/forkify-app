import { AJAX } from './helpers';
import { API_URL } from './config';
import { RES_PER_PAGE, KEY } from './config';
import { camelCaseKeys } from './helpers';

export const state = {
  recipe: {},
  search: {
    // query will posobly need for analitics: which queries make more for example
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  console.log(id);
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    const { recipe } = data.data;
    const recipeCamel = camelCaseKeys(recipe);
    state.recipe = recipeCamel;
    console.log(state.recipe);
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    // else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(`${err} 🧨💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        imageUrl: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });

    //In order not to stay on the same page after serching and load   a new recipe we assign to page in state value equal to 1. Becase arter loading new recepie the page default  number in state will be overwritten
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 🧨💥💥💥`);
    throw err;
  }
};

export const getResultsForOnePage = function (page = state.search.page) {
  //we need to set the page which comes from controller to the state!!!
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServeings) {
  state.recipe.ingredients.forEach(ing => {
    //newQt=oldOt*newServings/oldServings
    ing.quantity = (ing.quantity * newServeings) / state.recipe.servings;
  });
  //we need to update state only after we calculate quantity because otherwise the old servings value in state will be lost
  state.recipe.servings = newServeings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //add bookmark
  state.bookmarks.push(recipe);
  console.log(recipe);
  console.log(state.bookmarks);
  //mark the  current recipe as boockmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const removeBookmark = function (id) {
  //Delete bookmark
  //NOTE: pattern with passing the id is used queit offen for remove,change,update and for the REST Api as well.All fatching data is used  for geting and adding somthing
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  //Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};

const init = function () {
  //Data retrieved from local storage is best stored in a variable.Since there may be no data in the local storage
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage); // convert this string back to an object
};

init();
console.log(state.bookmarks);

//This function is needed to call during development. Actually for clearing bookmarks list. Before calling this function we need to comment out the init funtion's call. But default this of cours be turned off
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};

// clearBookmarks();

//before aploading our own recipe to API we need to convert data to acceptable format
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingrArr = ing[1].split(',').map(el => el.trim());
        console.log(ingrArr);
        // const ingrArr = ing[1].replaceAll(' ', '').split(',');
        if (ingrArr.length !== 3)
          throw new Error('Wrong ingrediten format.Plese the correct format.');
        const [quantity, unit, description] = ingrArr;
        //convert first value from string to number for the quantity.Empty string will be converted to null
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    //after sending POST request to API and geting the data we need to convert properties names and set it in the state
    state.recipe = camelCaseKeys(data.data.recipe);

    addBookmark(state.recipe);

    console.log(state.recipe);
  } catch (err) {
    //need rethrow error here othervise we will catch it here, not in controller
    throw err;
  }
};
