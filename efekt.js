function Ksiazka(tytul, rokWydania, imieAutora, nazwiskoAutora) {
    this.tytul = tytul;
    this.rokWydania = rokWydania;
    this.imieAutora = imieAutora;
    this.nazwiskoAutora = nazwiskoAutora;

    this.pelneImieINazwisko = function() {
        return this.imieAutora + " " + this.nazwiskoAutora;
    };
}

let ksiazki = [
    new Ksiazka("Władca Pierścieni", 1954, "J.R.R.", "Tolkien"),
    new Ksiazka("Lalka", 1890, "Bolesław", "Prus"),
    new Ksiazka('Korowod',1683,'Jakub','Małecki'),
    new Ksiazka("Rozdroże kruków",2004,"Andrzej","Sapkowski")
];


let wybranyRok = 2004;


console.log("Książki wydane w roku " + wybranyRok + ":");
ksiazki.forEach(function(ksiazka) {
    if (ksiazka.rokWydania === wybranyRok) {
        console.log("Tytuł: " + ksiazka.tytul + ", Autor: " + ksiazka.pelneImieINazwisko());
    }
});
