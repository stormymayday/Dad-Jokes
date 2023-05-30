import getElement from "./getElement.js";

const url = 'https://icanhazdadjoke.com/';
const result = getElement('.result');

const fetchDadJoke = async () => {

    result.textContent = 'Loading...';

    try {

        const response = await (fetch(url, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'learning app'
            },
        }));

        const data = await response.json();

        // Rendering 'Dad Joke' in the DOM
        result.textContent = data.joke;

    } catch (error) {

        result.textContent = 'Sorry, there was an error loading a joke';

    }



};

export default fetchDadJoke;