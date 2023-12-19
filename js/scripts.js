

// CREO UN ARRAY

const listImg = [

    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

];

console.log('immagini',listImg,typeof listImg);

//CICLO FOR PER FAR CICLARE LE IMMAGINI

for (let i = 0; i < listImg.length; i++) {

    //CREO GLI ELEMENTI PRINCIPALI
    const title = document.createElement('h2');
    
    const slide = document.createElement('div');
    
    const img = document.createElement('img');
    
    const parag = document.createElement('p');

    // AGGIUNGO ATTRIBUTI ALLE IMMAGINI 
    
    slide.classList.add('slide');
    
    slide.id = `helo-${[i]}`; 
    // AGGIUNGO ATTRIBUTI AI TITOLI
    title.classList.add('d-block','titolo')

    title.id = `titolo-${[i]}`

    title.innerHTML = listImg[i].title;

    // AGGIUNGO ATTRIBUTI AI PARAGRAFI

    parag.classList.add('d-block','paragrafo');

    parag.id = `paragrafo-${[i]}`;

    parag.innerHTML = listImg[i].description;
    
    if(i != 0){
    
        slide.classList.add('d-none');
        title.classList.add('d-none');
        parag.classList.add('d-none');
        
    }

    img.src = listImg[i].url;
    

    // FACCIO GLI APPEND
    
    document.getElementById('container').appendChild(title);

    document.getElementById('container').appendChild(parag);

    document.getElementById('container').appendChild(slide);

    slide.appendChild(img);

};

// AUTO PLAY IN AVANTI

setInterval(autoplay,3000);

function autoplay(){

        
        
}

// EVENTO COL CLICK AVANTI

let counter = 0;

let nextButton = document.getElementById('avanti');

nextButton.addEventListener('click',

    function (){
        
        let currentCounter = 'helo-' + counter;
        
        let titleCounter = 'titolo-' + counter;

        let paragCounter = 'paragrafo-' + counter;
        
        let item = document.getElementById(currentCounter);
        console.log('item',item,typeof item);

        let itemTitle = document.getElementById(titleCounter);
        console.log('itemTitle',titleCounter,typeof titleCounter);

        let itemParag = document.getElementById(paragCounter);
        console.log('paragrafi',itemParag,typeof itemParag)

        item.classList.add('d-none');
        itemTitle.classList.add('d-none');
        itemParag.classList.add('d-none');

        counter++
        if(counter == 5){

            counter = 0

        }

        console.log('counter', counter , typeof counter);
        // SCORRIMENTO IMMAGINI
        let nextCounter = 'helo-' + counter;

        console.log('items+1',nextCounter, typeof nextCounter);

        item = document.getElementById(nextCounter);

        item.classList.remove('d-none');
        // SCORRIMENTO TITOLI
        let nextTitle = 'titolo-' + counter;

        itemTitle = document.getElementById(nextTitle);

        itemTitle.classList.remove('d-none')
        // SCORRIMENTO PARAGRAFI
        let nextParag = 'paragrafo-' + counter;

        itemParag = document.getElementById(nextParag);

        itemParag.classList.remove('d-none');
    }

)

// EVENTO CLICK INDIETRO

let backButton = document.getElementById('indietro');

backButton.addEventListener('click',

    function(){
        
        let currentCounter = 'helo-' + counter;

        let item = document.getElementById(currentCounter);

        console.log('item',item,typeof item);

        item.classList.add('d-none');

        counter--
        if(counter == -1){

            counter = 4

        }

        console.log('counter', counter , typeof counter);

        let nextCounter = 'helo-' + counter;

        console.log('items+1',nextCounter, typeof nextCounter);

        item = document.getElementById(nextCounter);

        item.classList.remove('d-none');
        
    }

)