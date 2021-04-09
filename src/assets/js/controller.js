import 'regenerator-runtime/runtime';
import * as model from './model';
import * as view from './view';

///DOM ELEMENTS
const searchForm = document.getElementById('search');

const searchHandler = async (e) => {
    e.preventDefault();
    const query = searchForm.elements[0].value;
    if (!query) {
        view.showMessage('Please search for a book!');
    } else {
        await model.getBookResults(query);
        const booksArray = model.books;

        view.showBookResults(booksArray);
    }

};

/////EVENT LISTENERS
document.addEventListener('submit', (e) => searchHandler(e));

view.showBookResults();
