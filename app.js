import getElement from './utils/getElement.js';

const url = 'https://icanhazdadjoke.com/';

// Element Selections
const btn = getElement('.btn');
const result = getElement('.result');

// Listening for 'click' events
btn.addEventListener('click', () => {
    console.log(result);
});