"use strict";

let pippo = "ciao";
console.log("๐ ~ file: script.js ~ line 4 ~ pippo", pippo);

let pluto = 4;
console.log("๐ ~ file: script.js ~ line 6 ~ pluto", pluto);

let paperino = false;
console.log("๐ ~ file: script.js ~ line 8 ~ paperino", paperino);

let array = ["pippo", "pluto", "paperino", "pippo", "pluto", "paperino", "pippo", "pluto", "paperino", "pippo", "pluto", "paperino", "pippo", "pluto", "paperino", "pippo", "pluto", "paperino"];
console.log("๐ ~ file: script.js ~ line 13 ~ array", array);

console.table(array)


console.log("pippo,pluto,paperino", pippo, pluto, paperino);

let stud1 = { name: "andrea", age: 12 };

let stud2 = { name: "giovanni", age: 13 };

let stud3 = { name: "beatrice", age: 16 };

let stud4 = { name: "veronica", age: 12 };

let array2 = [stud1, stud2, stud3, stud4];

console.table(array2);



function checkIfIsEven(numberToCheck) {
    return numberToCheck % 2 === 0;
}


// controllo se รจ pari
function check(n) {
    return n % 2 === 0;
}

let player = { name: "andrea", surname: "asioli", school: "leopardi", game: "space invader", age: 12, address: "via piantelli 12", score: 112 };

console.log("๐ ~ file: script.js ~ line 34 ~ player", player);

console.log("๐ ~ file: script.js ~ line 34 ~ player", JSON.stringify(player));

player.score = 200;


let number = 300;


let isEven = checkIfIsEven(number);

function parseStringToNumber(string) {
    if (string.length === 0) {
        throw new EmptyStringError("stringa Vuota");
    }

    let stringNumber = string

    if (string.includes(",")) {
        stringNumber = string.replace(",", ".")
    }
    const number = parseFloat(stringNumber);
    if (isNaN(number)) {

        throw new InvalidStringError("stringa non valida");
    }


    return number
}

let age;
try {

    age = parseStringToNumber("");
    console.log("age: ", age);

} catch (error) {
    if (error instanceof EmptyStringError) {
        console.log(error.message);
        age = 0
        console.log("age: ", age);
    } else {
        console.log(error.message);
        console.log("inserisci di nuovo");
    }
    // if (error.message==="stringa Vuota") {
    //     age = 0
    //     console.log("age: ", age);
    // }else{
    //     console.log(error.message);
    //     console.log("inserisci di nuovo");
    // }




}
// console.log(parseStringToNumber("2"));
// console.log(parseStringToNumber("2.1"));
// console.log(parseStringToNumber("2,1"));
// console.log(parseStringToNumber("2pippo"));
// console.log(parseStringToNumber("pippo"));
// console.log(parseStringToNumber("pippo2"));



let stringToParse = "12; 34; 45; 2.3; 12; 13,4; pippo;";

// let stringToParsed = new ParseStringToArrayofNumber(stringToParse);
let string1 = "12; 13; 45; 23\n; 2.1; 13; 34; 21\n; 3.2; 12; 4; 22\n";
// let string1ToParsed = new ParseStringToArrayofNumber(string1);
// console.log(string1ToParsed);
console.log(string1);
let array1 = Parse.parseCSVLine(string1);

console.log(array1);


