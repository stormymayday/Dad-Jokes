import getElement from "./getElement.js";

const url = 'https://icanhazdadjoke.com/';
const result = getElement('.result');

const fetchDadJoke = async () => {

    const response = await (fetch(url, {
        headers: {
            Accept: 'application/json',
            'User-Agent': 'learning app'
        },
    }));

    const data = await response.json();

    // Rendering 'Dad Joke' in the DOM
    result.textContent = data.joke;

};

export default fetchDadJoke;