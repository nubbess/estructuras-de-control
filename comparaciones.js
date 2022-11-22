// comparaciones

// igualdad

if (5 == 5){
    console.log("5 es igual a 5")
}

if (5 === 5) {
    console.log("5 es muy igual a 5")
}

// == solo compara el valor
// === compara valor y tipo de dato

let a = 5;
let b = "5";

if (a == b){
    console.log("A es igual a B - débil")
}

if (a === b){
    console.log("a es igual a b -fuerte") 
    // no pasa console porque son de tipo number y tipo String. fuertemente diferentes
}

// desigualdades

let c = 4;
let d = "4";

if (c != d) {
    console.log("son desiguales - debil")
    // no son distintos porque a != le chupa un huevo que sea string
}

if (c !== d) {
    console.log("c es diferente a d - fuerte")
}

// comparaciones mayor que y menor que

let max = 10;
let min = 5;

if (max > min){
    console.log("max es mayor que min")
}

if (max >= min){
    console.log("max es mayor que min")
}

if (min < max) {
    console.log("min es menor que max")
}

if (min <= max){
    console.log("min es menor o igual que max")
}