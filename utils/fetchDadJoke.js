const url = 'https://icanhazdadjoke.com/';

const fetchDadJoke = async () => {

    const response = await (fetch(url, {
        headers: {
            Accept: 'application/json',
            'User-Agent': 'learning app'
        },
    }));

    console.log(response);

};

export default fetchDadJoke;