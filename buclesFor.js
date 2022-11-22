// Bucles

// for, while, y ambito de bucle

// FOR

// for (inicialización; condición (mientras que blabla); actualización)

for (i = 0; i < 10; i = i + 1 /* i++ ó i+=1 */) {
    // esto es el bucle
    console.log(i)
}



let lista = [1, 4, 6, 2, 3, 7, 10, 900]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])    
}
console.log(i)

// incluso podría pedirle que me devuelva cada elemento de la lista dividido 2 o lo que sea.

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)    
}

// FOR OF FOR OF FOR OF FOR OF 

for (let pija of lista)
console.log(pija)

// forEach (con función FLECHA)

lista.forEach(jote => {
    console.log(jote)
});

// estructura for...in [para objetos]

const persona = {
    nombre: "julian",
    apellido: "martinez",
    dni: "41686984",
    auto: "ford ka"
}

console.log(persona.nombre)
// acá va el for...in  

for (const pija in persona) {
    console.log(pija)
    console.log(persona[pija])
    }
/* para acceder al VALOR DE LA PROPIEDAD DEL OBJETO hay que tratarlo como un ARRAY con [], digamos: mostrar variable PIJA
que son los atributos, y persona[pija] que son los valores dentro de los atributos*/