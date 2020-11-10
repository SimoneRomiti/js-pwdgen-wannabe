var name = prompt("Qual'è il tuo nome?");
console.log(name);

var surname = prompt("Qual'è il tuo cognome?");
console.log(surname);

var color = prompt("Qual'è il tuo colore preferito?");
console.log(color);

var pwd = name + surname + color + "19";
console.log(pwd);

document.getElementById('title').innerHTML=pwd;
