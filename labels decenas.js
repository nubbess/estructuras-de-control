// break y continue (para casos específicos)
// etiquetas en los bucles (labels)

var unidades = 0;
var decenas = 0;

while(true){
    while(true){
    console.log('el número actual es:', decenas,unidades)
        unidades++
        if(unidades === 10){    
            unidades = 0
            break
        }
    }
    decenas++
    if (decenas == 5){
    break
    }
}






// se puede escribir para resumir mejor con un If y utilizando etiquetas

bucleDecenas: while(true){
    bucleUnidades:while(true){
    console.log('el número actual es:', decenas,unidades)
        unidades++
        if(unidades === 10){    
            unidades = 0
            break bucleDecenas
        }
        if (decenas == 5){
            break bucleUnidades
            }
    }
    decenas++
    
}
