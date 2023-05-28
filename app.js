import getElement from './utils/getElement.js';
import fetchDadJoke from './utils/fetchDadJoke.js';

const btn = getElement('.btn');

fetchDadJoke();

btn.addEventListener('click', () => {
    fetchDadJoke();
});