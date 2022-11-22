// casos muy específicos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < lista.length; i++) {

    if (lista [i] === 3){
        continue;
    }

    console.log(lista[i])

    if (lista[i] > 5){
        break;
    }
}

/* si el proyecto esta bien hecho, estas cosas no son buenas prácticas. Hay que llegar a ejecutar el código sin estas 
cosas, es negativo para la legibilidad */

// scoop de un bucle: alcance de las variables declaradas dentro del bucle

console.log(i) //trabajando con bucles, mejor con LET para que el alcance se quede dentro del bucle (alcance local)
// lo mismo con CONST
