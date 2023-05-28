import getElement from './utils/getElement.js';
import fetchDadJoke from './utils/fetchDadJoke.js';

const btn = getElement('.btn');

btn.addEventListener('click', () => {
    fetchDadJoke();
});