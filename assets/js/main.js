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
                <strong>${currentImg.text}</strong>
            </div>    
        </div> 
    `

    thumbMain.innerHTML += `  
        <div class="thumbnail opacity0-5">
            <img id=thumb${i} src="${currentImg.image}"  class="" alt="...">
        </div>
    `
}

thumbMain.querySelectorAll('.thumbnail')[activeImg].classList.add('opacity1')
imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function(){
    if( activeImg == arrayImg.length - 1) {
        activeImg = 0;
    } else {
        activeImg++;
    }

    document.querySelector('.d-none.active').classList.remove('active')
    imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')

    document.querySelector('.thumbnail.opacity1').classList.remove('opacity1')
    thumbMain.querySelectorAll('.thumbnail')[activeImg].classList.add('opacity1')
})

prev.addEventListener('click', function(){
    if( activeImg == 0 ){
        activeImg = arrayImg.length - 1;
    } else {
        activeImg--;
    }

    document.querySelector('.d-none.active').classList.remove('active')
    imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')

    document.querySelector('.thumbnail.opacity1').classList.remove('opacity1')
    thumbMain.querySelectorAll('.thumbnail')[activeImg].classList.add('opacity1')
})

document.getElementById('play').addEventListener('click', function () {
    let auto = setInterval(play, 2000)
    function play(){
        
        let img = document.querySelector('.img')
        let currentImg = arrayImg[activeImg]
        if( activeImg == arrayImg.length - 1) {
            activeImg = 0;
        } else {
            activeImg++
        }
        img.src = currentImg.image
        imgMain.innerHTML += `  
            <div class="d-none">
                <img src="${currentImg.image}" class="img" alt="..."> 
                <div class="testo">
                    <h5>${currentImg.title}</h5>
                    <strong>${currentImg.text}</strong>
                </div>    
            </div> 
        `
        document.querySelector('.d-none.active').classList.remove('active')
        imgMain.querySelectorAll('.d-none')[activeImg].classList.add('active')
        document.querySelector('.thumbnail.opacity1').classList.remove('opacity1')
        thumbMain.querySelectorAll('.thumbnail')[activeImg].classList.add('opacity1')
    }

    document.getElementById('stop').addEventListener('click', function () {
        clearInterval(auto)
    })
})


