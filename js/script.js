// Milestone 1 

// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

const gattini = [
    {nome: 'Enrico', eta: 8, colore: 'Nero', sesso: 'Maschio'},
    {nome: 'Ciccio', eta: 12, colore: 'Bianco', sesso: 'Maschio'},
    {nome: 'Teo', eta: 3, colore: 'Arancione', sesso: 'Maschio'},
    {nome: 'Zora', eta: 11, colore: 'Nero', sesso: 'Femmina'},
    {nome: 'Miciolina', eta: 1, colore: 'Grigio', sesso: 'Femmina'},
    {nome: 'Giuditta', eta: 3, colore: 'Grigio', sesso: 'Femmina'},
]

console.log(gattini);

// pt 2 -Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

gattini.forEach((element) => {
    document.getElementById("gatti").innerHTML +=
    `
    <ul>
        <li>
            Nome : ${element.nome} 
        <br>
            Colore: ${element.colore}
        </li>
        <hr>
    <ul>
    `    
}
);

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
