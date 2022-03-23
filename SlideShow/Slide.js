'use strict'; 

const images = [
    {'id': '1', 'url':'img/Flor.jpg'}, 
    {'id': '2', 'url':'img/Rosa.jpg'},
    {'id': '3', 'url':'img/Flores.jpg'}
];

const container = document.querySelector('#itens');

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
let items = document.querySelectorAll('.item');

const previous = () => {
    let items = document.querySelectorAll('.item');
    container.appendChild(items[0]);
}
const next = () => {
    items = document.querySelectorAll('.item');
    const lastItem = items[items.length - 1];
    container.insertBefore( lastItem, items[0]);
}
document.querySelector('#anterior').addEventListener('click', previous);
document.querySelector('#proximo').addEventListener('click', next);