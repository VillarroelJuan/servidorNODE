import fs from "fs";

let arrayDatos = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false];
let dataType = "string";   
const valorAux = 0; 
const arrayAux = [];

 async function filtrarDatos(arrayDatos, dataType) {
    const tiposValidos = ["string", "number", "boolean"];
    if (dataType !== "string" && dataType !== "number" && dataType !== "boolean") {
        return "Error: tipo de dato no válido!"; 
    }

    arrayDatos.forEach(obj => {
        if (typeof obj === dataType && !arrayAux.includes(obj)) {
            arrayAux.push(obj);
        }
    });
    
    arrayAux.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return valorAux;
    }); 
    
    if (arrayAux.length > valorAux) {
        try {
            await fs.promises.writeFile('respuesta.txt', arrayAux.toString());
            return arrayAux.toString();
        } catch (error) {
           console.log(error);
        }
    } else {
        return "Error: no esta este tipo de dato!";
    }
}

filtrarDatos(arrayDatos, dataType).then(function(nuevoArray) {
    console.log(nuevoArray);
});