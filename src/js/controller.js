import * as model from './model.js';
import recipeView from './views/recipeView.js';
import bookmarksView from './views/bookmarksView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import resultsView from './views/resultsView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}
// control functions  atctually are hendler functions because they trigger when specific events happen
export const controlRecipes = async function () {
  try {
    //we get the id of any prodact from seach line
    const id = window.location.hash.slice(1); ///without first characer is grid
    // const id = '5ed6604591c37cdc054bc886';
    // console.log(id);
    if (!id) return; //put here gard class  if we don't have hash id in oder to avoid an error

    //0. Update results view to mark selected result
    resultsView.update(model.getResultsForOnePage());
    //1.Update recipe
    //and we also need to update the bookmarksView in oder to corretly slect or highlight recipe in the bookmarks

    bookmarksView.update(model.state.bookmarks);
    recipeView.renderSpiner();
    //2. Loading recipe
    await model.loadRecipe(id);
    //3.Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // if we don't pass anysing error message her will be used default message like a private property #errorMessage
    recipeView.renderError();
    console.error(err);
  }
};

export const controlSearch = async function () {
  try {
    //1.Get search query
    resultsView.renderSpiner();

    const query = searchView.getQuery();
    if (!query) return;

    //2.Load search results
    await model.loadSearchResults(query);
    //3.Render search results
    //We even don't need to pass anysing explicitly to callback  because in the model we have default value
    resultsView.render(model.getResultsForOnePage());
    // console.log(model.state.search.results);

    //4.Render initial pagination buttons
    //I get a page from _data in generatMarcup method of paginationView so i pass in  all the search array to the render method
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (gotoPage) {
  //1.render NEW search results
  resultsView.render(model.getResultsForOnePage(gotoPage));

  //2.Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServeings) {
  //1.Update the recipe servings (in state)
  model.updateServings(newServeings);

  //2.Update recepie view
  //we need an update method for renew buttons murckup which chenging ammonunt of servings without rerender entire recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmarks = function () {
  //1.Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);
  //2.update recipe view
  recipeView.update(model.state.recipe);
  //3.render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
// we get new recipe with all the data from the form
const controlAddRecipe = async function (newRecipe) {
  console.log(newRecipe);
  try {
    //Show loading spinner
    addRecipeView.renderSpiner();

    //Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    //Render uploaded recipe
    recipeView.render(model.state.recipe);

    //Show success message
    addRecipeView.renderMessage();

    //render bookmark
    //we use reder method here because we  really want to incert a new element .Not to update
    bookmarksView.render(model.state.bookmarks);

    //Chandge URL
    //Here we use a history object and on this one we call the pushState method wich allow us to change url adress without reloading the page
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //This meothods below ulow us to move to the next page or get back to prevous page.May be they are usfull in other projects
    // window.history.back();
    // window.history.forward();
    //close form window
    //We make it'll happen after 2,5 seconds to ensure that data has already been received from API
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const newFeature = function () {
  console.log('You are so dumb men. Get out of here');
};
//This function init actually is a subscriber function for subsctiption to events which function publisher will regester. Init function will be once executed
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateRecipe(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmarks);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  newFeature();
};
init();
//never mind
