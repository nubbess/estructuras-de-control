let decenas = 0;
let unidades = 0;


bucleDecenas: while(true){
    bucleUnidades:while(true){
    console.log('el número actual es: ${decenas}', decenas,unidades)
        unidades++
        if(unidades === 10){    
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 3){
            break bucleDecenas
            }       
    }
    decenas++
    
}
console.log('ya hemos terminado')

// dentro de un mismo bucle podemos afectar a bucles externos
