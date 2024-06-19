// creo array oggetti personaggi
const images = [ 

{ 
    image: 'img/01.webp', 
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
},

{ 
    image: 'img/02.webp', 
    title: 'Ratchet & Clank: Rift Apart', 
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
}, 

{   
    image: 'img/03.webp', 
    title: 'Fortnite', 
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
},

{ 
    image: 'img/04.webp', 
    title: 'Stray', 
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
}, 

{ 
    image: 'img/05.webp', 
    title: "Marvel's Avengers", 
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' 
} 

];

// prendo containe dalla pagina
const container = document.querySelector(".container");

// inserisco dinamicamente gli elementi in pagina
images.forEach(element => {
    container.innerHTML+=`
        <div class="image-card">
            <img src="${element.image}" alt="${element.title}">
                <div class="info">
                    <h2>${element.title}</h2>
                    <p>${element.text}</p>
                </div>
        </div>`
});

// creo la lista della classe image card
const image = document.getElementsByClassName("image-card");

// creo variabile "a" che conta come item attivo
let a = 0;

// aggiungo la classe active al primo elemento della lista items
image[a].classList.add("active");

// creo varibile dei tasti prev e next
const next = document.getElementById("next");

const prev = document.getElementById("previous");

// evento click next
next.addEventListener("click",
    function() {

        // rimuovo la classe active dall'elemento precedente
        image[a].classList.remove("active");

        // aumento il valore di "a"
        a++;

        // resetto il valore di a se va oltre la lunghezza massima degli items
        if (a === image.length) {
            a = 0;
        }

        // assegno al nuovo "t" la classe active
        image[a].classList.add("active");

        console.log(a);
    }
)

// evento click prev
prev.addEventListener("click",
    function() {

        
        // rimuovo la classe active dall'elemento precedente
        image[a].classList.remove("active");

        // cambio il valore di a se esso è uguale a 0 così da riprendere dall'ultima immagine
        if (a === 0) {
            a = images.length;
        }

        // aumento il valore di "a"
        a--;

        // assegno al nuovo "t" la classe active
        image[a].classList.add("active");
        
        console.log(a);
    }
)