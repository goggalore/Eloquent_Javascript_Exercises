// A promise comes with several guarantees,

// The most immediate benefit of promises is chaining (i.e. no pyramid of doom)

// Callbacks will never be called ebfore the completion of the
// current run of the JavaScript event loop

// Callbacks added with .then even after the success
// or failure of the asyncrhonous operation will be called

// Multiple callbacks may be added by calling .then several times,
// to be executed independently in insertion order


// an idea from functional programming,
// functional programming often seeks to make code more composable (as promises are)


const addImg = (src) => {
    const imgElement = document.createElement("img");

    imgElement.src = src;
    document.body.appendChild(imgElement);
};

const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = () => {
            resolve(image);
        };

        image.onerror = () => {
            const message = `Could not load image at the URL ${url}`
            reject(new Error(message));
        };

        image.src = url; 
    });
}

Promise.all([
    loadImage('./images/lovecraft1.jpg'),
    loadImage('./images/lovecraft2.jpg'),
    loadImage('./images/lovecraft3.jpg')
]).then((images) => {
    images.forEach(img => addImg(img.src));
}).catch((error) => {
    throw error;
})