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
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const arrayImg = [
    {
        image: 'https://picsum.photos/id/235/800/400',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'https://picsum.photos/id/236/800/400',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'https://picsum.photos/id/237/800/400',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'https://picsum.photos/id/238/800/400',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'https://picsum.photos/id/239/800/400',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
console.log(prev, next);
let activeImg = 0;
const imgMain = document.querySelector('.slider')
const thumbMain = document.querySelector('.thumbnails')

for (let i = 0; i < arrayImg.length; i++) {
    let currentImg = arrayImg[i]

    imgMain.innerHTML += `  
        <div id=img${i} class="d-none">
            <img src="${currentImg.image}" class="img" alt="..."> 
            <div class="testo">
                <h5>${currentImg.title}</h5>
                <p>${currentImg.text}</p>
            </div>    
        </div> 
    `

    thumbMain.innerHTML += `  
        <div class="thumbnail">
            <img id=thumb${i} src="${currentImg.image}" class="" alt="...">
        </div>
    `


    

}

imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')

next.addEventListener('click', function(){
    if( activeImg == arrayImg.length - 1) {
        activeImg = 0;
    } else {
        activeImg++;
    }

    document.querySelector('.d-none.active').classList.remove('active')
    imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')
})

prev.addEventListener('click', function(){
    if( activeImg == 0 ){
        activeImg = arrayImg.length - 1;
    } else {
        activeImg--;
    }

    document.querySelector('.d-none.active').classList.remove('active')
    imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')
})





// let thumbnails = document.querySelector('.thumbnails')  

// for (let i = 0; i < arrayImg.length; i++) {
//     let div = document.createElement('div');
//     thumbnails.appendChild(div);
//     div.classList.add('thumbnail');
//     div.setAttribute('onclick', `changeImg(${i})`)
//     let imgThumbnail = document.createElement('img');
//     imgThumbnail.setAttribute('src', arrayImg[i]);
//     div.append(imgThumbnail);
// }
 
// function changeImg(num){
//     img.src = arrayImg[num];
//     currentImg = num;
// }