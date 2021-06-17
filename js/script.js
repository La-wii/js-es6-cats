// Milestone 1 

// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const gattini = [
    {nome: 'Enrico', eta: 8, colore: '#000000', sesso: 'Maschio'},
    {nome: 'Ciccio', eta: 12, colore: '#2f1e1a', sesso: 'Maschio'},
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

let maschi= [];
let femmine = [];

for (let i = 0; i < gattini.length; i++){
    if(gattini[i].sesso == 'Maschio'){
        maschi.push(gattini[i]);
        // console.log(maschi);
    } else {
        femmine.push(gattini[i]);
        // console.log(femmine);
    }
}
console.log(maschi);
console.log(femmine);


// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
