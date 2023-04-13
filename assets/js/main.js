// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

let arrayImg = [
    'https://picsum.photos/id/235/800/400',
    'https://picsum.photos/id/236/800/400',
    'https://picsum.photos/id/237/800/400',
    'https://picsum.photos/id/238/800/400',
    'https://picsum.photos/id/239/800/400'
]

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentImg = 0;
let img = document.querySelector('.img');
img.src = "https://picsum.photos/id/235/800/400"

next.addEventListener('click', function(){
    if( currentImg == arrayImg.length - 1) {
        currentImg = 0;
    } else {
        currentImg++;
    }
    img.src = arrayImg[currentImg];
})

prev.addEventListener('click', function(){
    if( currentImg == 0 ){
        currentImg = arrayImg.length - 1;
    } else {
    currentImg--;
    }
    img.src = arrayImg[currentImg];
})

let thumbnails = document.querySelector('.thumbnails')  

for (let i = 0; i < arrayImg.length; i++) {
    let div = document.createElement('div');
    thumbnails.appendChild(div);
    div.classList.add('thumbnail');
    div.setAttribute('onclick', `changeImg(${i})`)
    let imgThumbnail = document.createElement('img');
    imgThumbnail.setAttribute('src', arrayImg[i]);
    div.append(imgThumbnail);
}
 
function changeImg(num){
    img.src = arrayImg[num];
    currentImg = num;
}