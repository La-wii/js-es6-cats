// Milestone 1 

// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const gattini = [
    {nome: 'Enrico', eta: 8, colore: '#000000', sesso: 'Maschio'},
    {nome: 'Ciccio', eta: 12, colore: '#c8ae8c', sesso: 'Maschio'},
    {nome: 'Teo', eta: 3, colore: '#ff6800', sesso: 'Maschio'},
    {nome: 'Zora', eta: 11, colore: '#000000', sesso: 'Femmina'},
    {nome: 'Miciolina', eta: 1, colore: '#4a4c4b', sesso: 'Femmina'},
    {nome: 'Giuditta', eta: 3, colore: '#949494', sesso: 'Femmina'},
]

console.log(gattini);

// pt 2 -Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

gattini.forEach((element) => {
    document.getElementById("gatti").innerHTML +=
    `
    <ul>
        <li>
            ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i>
        </li>
        <hr>
    <ul>
    `;    
});

// Milestone 2 
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.

// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

let maschi = [];
let femmine = [];

let rosa = '#b62a71';
let azzurro = '#011372';

const divisione = gattini.map ((element) => {
    const{nome,eta,colore,sesso} = element;

    const opacity = element.eta / 12;

    return{
        nome,
        eta,
        colore,
        sesso,
        fiocco : {
            color: (sesso == 'Femmina')? rosa : azzurro, 
            opacity : opacity
        }
    }
});

divisione.forEach((element) => {
    document.getElementById("fiocchi").innerHTML +=
    `
    <ul>
        <li>
            ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i>
            <i class="fas fa-ribbon" style="color:${element.fiocco.color}; opacity:${element.fiocco.opacity}"></i>
        </li>
        <hr>
    <ul>
    `; 
});

// Milestone 3 
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.


