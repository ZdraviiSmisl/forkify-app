//I export this class itself because i don't need create instances from this one. It is  only for inheritance to other views(parent class)
import icons from '../../img/icons.svg';
export default class View {
  _data;
  //render  parametr blocks the generateMarcup method of priviewView and return and allow us to return an array strings and then join them into one string in bookmarksView and resultView
  render(data, render = true) {
    //in the begining we check if data is no empty array and not undefined
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();
    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  // we'll need this method for other viewes as well
  update(data) {
    this._data = data;
    const newMarcup = this._generateMarkup();
    //Here we create a Dom object from string(newMarcup) which will  exist in the memory, not on the page
    //Update method  differs from render method is that in the update method will basically only update text and attributes in the DOM
    const newDom = document.createRange().createContextualFragment(newMarcup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const currElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newElem, i) => {
      const curElem = currElements[i];
      // console.log(curElem, newElem.isEqualNode(curElem));

      //update changed TEXT
      if (
        !newElem.isEqualNode(curElem) &&
        newElem.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newElem?.firstChild.nodeValue.trim());
        curElem.textContent = newElem.textContent;
      }

      //update changed ATTRIBUETS
      //Here we set new values to the attributes of current element from new element's attributes
      if (!newElem.isEqualNode(curElem))
        Array.from(newElem.attributes).forEach(attr =>
          curElem.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpiner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  //function publisher which publish an event(in this case we have two events in array)

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> 
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
        </div>
      <p>${message}</p>
    </div> 
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
//
