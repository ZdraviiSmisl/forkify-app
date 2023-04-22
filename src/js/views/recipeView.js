import View from './View.js';
import icons from '../../img/icons.svg'; // parcel 2(for version parcel starts with 2.)
import { Fraction } from 'fractional';
//This class will used by all view objects
class RecipeView extends View {
  //All of them will have these private property
  _parentElement = document.querySelector('.recipe');
  //defaoult message for error
  _errorMessage =
    'This recipe not found please chose another one ore check you input';
  //success message
  _message = '';

  addHandlerRender(handler) {
    // we use an array of events.Especially in case we have ten or more events are happening at the same time
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateRecipe(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      const { update } = btn.dataset;
      if (+update > 0) handler(+update);
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    console.log(this._data);
    return `
    <figure class="recipe__fig">
    <img src="${this._data.imageUrl}" alt="${
      this._data.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
          <span>${this._data.title}</span>
          </h1>
      </figure>

      <div class="recipe__details">
      <div class="recipe__info">
          <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            this._data.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
          <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update="${
            this._data.servings - 1
          }">
              <svg>
              <use href="${icons}#icon-minus-circle"></use>
              </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update="${
            this._data.servings + 1
          }">
              <svg>
              <use href="${icons}#icon-plus-circle"></use>
              </svg>
          </button>
          </div>
      </div>

      <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
      <button class="btn--round btn--bookmark">
          <svg class="">
          <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
          </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarcupIngridient).join('')}
      </ul>
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            this._data.publisher
          }</span>. Please check out
          directions at their website.
      </p>
      <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
      >
          <span>Directions</span>
          <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </a>
      </div>
  `;
  }
  _generateMarcupIngridient(ing) {
    return `
  <li class="recipe__ingredient">
  <svg class="recipe__icon">
      <use href="${icons}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${
    //If quantity of ingridient does't not specified then set an empty string
    ing.quantity ? new Fraction(ing.quantity).toString() : ''
  }</div>
  <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
  </div>
  </li>
  `;
  }
}

export default new RecipeView();
