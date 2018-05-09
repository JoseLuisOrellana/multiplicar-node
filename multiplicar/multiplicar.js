// requireds
const fs = require('fs');

/*
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base}, no es un número`)
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite}, no es un número`)
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `\n${base} x ${index} = ${base * index}`;
        }
        resolve(data);
    })
};
*/

let listarTabla = (base, limite = 10) => {
    console.log('================================'.red);
    console.log(`========== tabla de ${base} ==========`.red);
    console.log('================================'.red);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} x ${index} = ${base * index}`);
    }
};


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`)
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} x ${index} = ${base * index}\n`;
        }

        fs.writeFile(`archivos/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}