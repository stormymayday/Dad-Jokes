import getElement from './utils/getElement.js';
import fetchDadJoke from './utils/fetchDadJoke.js';

// Element Selections
const btn = getElement('.btn');
const result = getElement('.result');

// Listening for 'click' events
btn.addEventListener('click', () => {
    console.log(result);
});