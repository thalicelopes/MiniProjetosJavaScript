
const images = [
    {'id': '1', 'url':'img/Flor.jpg'}, 
    {'id': '2', 'url':'img/Rosa.jpg'}
];

const container = document.querySelector("#itens");
const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}"
            </div>
        `
    })
}

loadImages( images, container );