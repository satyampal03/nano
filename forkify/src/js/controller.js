import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import 'core-js'; // this being used for to missing built -> obj and methods -> missing standard javaScript features ko ad krta hai
import 'regenerator-runtime/runtime'; // provide runtime environment for transpile asynchronous code

const controlRecipes = async function(){
  try{
    const id = window.location.pathname.slice(1);

    if(!id) return 
    recipeView.renderSpinner();

    // Loading the Recipe
    await model.loadRecipe(id);

    // Rendering Recipe
    recipeView.render(model.state.recipe);
    
  }catch(err){
    recipeView.renderError();
  }
}

const controlSearchResults = async function(){
  try{

    // Get Search Query
    const query = searchView.getQuery();
    if(!query) return

    // Load Search Result
   await model.loadSearchResults(query);
  // Rendering the Results
  // console.log(model.state.search.results);

  }catch(err){
      console.log(err);
  }
}

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();