let fruits = ["Kela", "seb", "papita", "amrood", "angoor", "khajoor"]
const p = document.querySelector('p');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    fruits[4] = "kharbooza";
    p.innerHTML += (`${fruits[i]} <br />`);
}

// let phal = ["apple", "mango", "banana", "amrood"]
// const h2 = document.querySelector('h2');
// for (let i = 0; i < phal.length; i++); {
//     console.log(phal[i]);
//     phal[2] = "tarbooz";
//     h2.innerHTML += (`${phal[i]} <br/>`);

// }