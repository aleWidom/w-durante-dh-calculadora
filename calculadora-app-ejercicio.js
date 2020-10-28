

let {suma,resta, multiplicacion, division} =  require("./calculadora-modulo");





function operaciones (numeroEnMemoria=0) {

    numeroEnMemoria = suma(numeroEnMemoria, Number(process.argv[2]));
    numeroEnMemoria = resta (numeroEnMemoria, Number(process.argv[3]));
    numeroEnMemoria = multiplicacion (numeroEnMemoria, Number(process.argv[4]));
    numeroEnMemoria = division (numeroEnMemoria, Number(process.argv[5]));
   
    //argv[] debe seguir la progresión de números
   
    numeroEnMemoria = division (numeroEnMemoria, Number(process.argv[6]));
   
    return numeroEnMemoria;
   
   } 


   let resultadoFinal = operaciones();
   console.log(resultadoFinal);
   

   