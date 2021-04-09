const booksContainer = document.getElementById('books-container');
const messageContainer = document.getElementById('message-container');
const searchButton = document.getElementById('search-button');
const paginationContainer = document.getElementById('pagination-container');

/////RENDER BOOKS TO DOM/////
export const showBookResults = (booksArray) => {
    //TODO: change this line
    if (!booksArray || booksArray.length === 0) showMessage('No results. Please try again!');

    //Clear existing results
    booksContainer.innerHTML = '';
    messageContainer.innerHTML = '';

    //Render book card for each search result
    booksArray.forEach(book => {
        const markup = `
        <div class="bg-gray-100 p-3 flex justify-evenly rounded-sm shadow-sm w-full">
            <img
            class="w-40 h-auto mx-0"
            src=${book.images.thumbnail}
            alt=${book.title}
            />
            <div class="flex flex-col justify-center ml-2 w-3/6">
            <h2 class="text-xl mb-3">
                <strong>${book.title}</strong>
            </h2>
            <h3><strong>Author:</strong> ${book.authors.length > 0 ? book.authors.map(auth => auth).join(', ') : 'Unknown'}</h3>
            <h3><strong>Publisher:</strong> ${book.publisher}</h3>
            <a
                target="blank"
                href=${book.link}
                ><button
                class="bg-gray-700 text-white p-2 rounded-sm shadow hover:bg-gray-600 mt-5"
                >
                More info
                </button></a
            >
            </div>
        </div>
    `;

        booksContainer.insertAdjacentHTML('beforeend', markup);
    });
};

/////RENDER ERROR MESSAGES/////
export const showMessage = (message) => {
    const messageElement = `
        <div class="bg-blue-900 w-4/6 mx-auto my-5 p-3 rounded-sm text-white">
            <p>${message}</p>
        </div>
    `;
    messageContainer.innerHTML = '';
    messageContainer.insertAdjacentHTML('afterbegin', messageElement);
};

/////RENDER LOADING SPINNER/////
export const showSpinner = () => {
    const spinnerElement = `
    <div class="spinner animate-spin rounded-full border-2 border-t-2 h-5 w-5"></div>
    `;
    searchButton.innerHTML = spinnerElement;
};

////CLEAR LOADING SPINNER////
export const clearSpinner = () => {
    searchButton.innerHTML = 'Search';
};

/////RENDER PAGINATION NAV/////
export const showPagination = () => {
    const markup =
        `<div>&larr;Previous</div>
        <div>&rarr;Next</div>`;

    paginationContainer.innerHTML = '';
    paginationContainer.insertAdjacentHTML(markup);
};