const getElement = (selection) => {

    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Please check your selection: ${selection}, no such element was found.`);
    }

};

export default getElement;