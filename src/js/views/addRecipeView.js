import View from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Congratulation you have just uploaded your own recipe!';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    //This needs to calle in order to be able to use this key word
    super();
    //Protected methods called in the constructor function of the class will be only accepted into this class. THis methods don't use the pattern subscriber-publisher
    this._addHandlerShowingWindow();
    this._addHandlerHideWindow();
  }

  //THis method needs to showing the window and therefore our main script sort of the controller dasn't interfere it

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowingWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      //this key word in this case is the form itself. Since we need to get all the data from this form
      //FormData returns to us a wird object with we spred into array and then convert into a readable object
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
      // console.log(dataArr);
      console.log(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
