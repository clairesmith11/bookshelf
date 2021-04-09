import axios from 'axios';

export const state = {
    loading: false,
    error: null
};

export let books = [];

export const getBookResults = async (query) => {
    try {
        //Set loading state for loading spinner
        state.loading = true;
        //Fetch books data from Google Books API based on search term
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        console.log(data);
        //Grab relevant info from data response and save to books variable
        books = data.items.map(book => {
            return {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors || [],
                publisher: book.volumeInfo.publisher || 'Unknown',
                images: book.volumeInfo.imageLinks,
                link: book.volumeInfo.infoLink
            };
        });
        console.log(books);
        //Reset loading state 
        state.loading = false;
    } catch (error) {
        //Reset loading state
        state.loading = false;
        //Add error message to state
        state.error = error;
        alert(error);
    }
};

export const showBook = async () => {
    try {
        const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ');
        console.log(data);
    } catch (error) {
        alert(error);
    }
};