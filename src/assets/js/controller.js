import 'regenerator-runtime/runtime';
import * as model from './model';
import * as view from './view';

///DOM ELEMENTS
const searchForm = document.getElementById('search');
const searchButton = document.getElementById('search-button');

const searchHandler = async (e) => {
    const query = searchForm.elements[0].value;
    e.preventDefault();
    if (!query) {
        view.showMessage('Please search for a book!');
    } else {
        //Show loading spinner while awaiting results
        view.showSpinner();
        //Get books from api
        try {
            const booksArray = await model.getBookResults(query);
            //Render the list of books
            view.showBookResults(booksArray);
        } catch (err) {
            //Show error message
            view.showMessage('We could not find any books for that search. Please try again.');
        }
        //Remove the loading spinner 
        view.clearSpinner();

    }

};

/////EVENT LISTENERS
document.addEventListener('submit', (e) => searchHandler(e));


