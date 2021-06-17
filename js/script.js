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
    <ul>
    `    
}
);