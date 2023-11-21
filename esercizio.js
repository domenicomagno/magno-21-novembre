


let listanomi = ["franco", "gennaro", "valerio", "giulia", "eugenio"]

for (let i = 0; i < listanomi.length; i++) {
    console.log(listanomi[i])
}

//esercizio contatore

let sommanumeri = 0
for (let i = 0; i <= 200; i++) {
    sommanumeri = sommanumeri + i
    console.log("il risultato finale è " + sommanumeri)

}













let listaProdotti = [
    {
        id: 1,
        nome: "d",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "c",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "b",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "a",
        prezzo: 600,
    },
]










console.log(listaProdotti)
let listaordinata = listaProdotti.sort(function (prodotto1, prodotto2) {
    return prodotto1.prezzo - prodotto2.prezzo
})
console.log(listaordinata)

    





console.log(listaProdotti);
let lista0rdinataNome = listaProdotti.sort(function (a, b) {
    if (a.nome < b.nome)
        return -1;

    if (a.nome > b.nome)
        return 1;
    return 0;

})
console.log(lista0rdinataNome);




//filtrare nella lista 
let prezzifiltrati=listaProdotti.filter(function (prodotto){
    return prodotto.prezzo > 250;
    });

    console.log(prezzifiltrati);