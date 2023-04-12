import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recepies found for you query!Please try again ;)';
  //success message
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    //here we loop over data aray and create for each of its element the markup
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
