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

        if (!response.ok) {

            throw new Error(`Error`);
        }

        const data = await response.json();

        // Rendering 'Dad Joke' in the DOM
        result.textContent = data.joke;

    } catch (error) {

        result.textContent = `Whoops, something went wrong.`;

    }



};

export default fetchDadJoke;