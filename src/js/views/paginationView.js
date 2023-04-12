import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const gotoPage = +btn.dataset.goto;
      console.log(gotoPage);
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(curPage, numPages);

    //I made some refactoring of the code below
    const firstPage = curPage === 1 && numPages > 1;
    const lastPage = curPage === numPages && numPages > 1;
    const middlePages = curPage < numPages;

    //1.first page, there are other pages
    if (firstPage || lastPage) {
      console.log(!!firstPage, !!lastPage);

      return this._generateMarkupBtn(firstPage, curPage);
      // return `
      //   <button data-goto='${
      //     curPage + 1
      //   }' class="btn--inline pagination__btn--next">
      //     <svg class="search__icon">
      //       <use href="${icons}#icon-arrow-right"></use>
      //     </svg>
      //     <span>Page ${curPage + 1}</span>
      //   </button>
      //  `;
    }

    if (middlePages) {
      return `${this._generateMarkupBtn(false, curPage)}
      ${this._generateMarkupBtn(true, curPage)}`;
    }
    //2.last page,theres are other pages
    // if (curPage === numPages && numPages > 1) {
    // return `
    //   <button data-goto='${
    //     curPage - 1
    //   }' class="btn--inline pagination__btn--prev">
    //     <svg class="search__icon">
    //       <use   href="${icons}#icon-arrow-left"></use>
    //     </svg>
    //     <span>Page ${curPage - 1}</span>
    //   </button>
    //   `;
    // }
    //3.other pages between first page and last page
    // if (curPage < numPages) {
    // return `
    //   <button data-goto='${
    //     curPage - 1
    //   }' class="btn--inline pagination__btn--prev">
    //     <svg class="search__icon">
    //       <use href="${icons}#icon-arrow-left"></use>
    //     </svg>
    //     <span>Page ${curPage - 1}</span>
    //   </button>
    //   <button data-goto='${
    //     curPage + 1
    //   }' class="btn--inline pagination__btn--next">
    //     <svg class="search__icon">
    //       <use href="${icons}#icon-arrow-right"></use>
    //     </svg>
    //     <span>Page ${curPage + 1}</span>
    //   </button>
    // `;
    // }
    //4.only one page and there are no other pages
    return '';
  }

  _generateMarkupBtn(isPlas, curPage) {
    const page = isPlas ? curPage + 1 : curPage - 1;
    return `
      <button data-goto='${page}' class="btn--inline pagination__btn--${
      isPlas ? 'next' : 'prev'
    }">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${isPlas ? 'right' : 'left'}"></use>
        </svg>
        <span>Page ${page}</span>
      </button>
      `;
  }
}

export default new PaginationView();
