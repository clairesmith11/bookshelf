import axios from 'axios';

export let error = null;

export const getBookResults = async (query, startIndex = '0') => {
    try {
        //Fetch books data from Google Books API based on search term
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`);
        if (!data.items) error = "We couldn't find any books matching that search. Please try again.";
        //Grab relevant info from data response and return it
        return data.items.map(book => {
            return {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors || [],
                publisher: book.volumeInfo.publisher || 'Unknown',
                images: book.volumeInfo.imageLinks || '',
                link: book.volumeInfo.infoLink
            };
        });
    } catch (err) {
        //Add error message to global variable
        throw new Error(err);
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