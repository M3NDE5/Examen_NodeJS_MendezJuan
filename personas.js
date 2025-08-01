import rl from './readline.js';
import { db, conexion } from './db.js';
import { coleccionNombre } from './config.js';
import {doctores} from './lectura1.js'

 

export async function insertar(){
    try {
        const collection = db.collection(coleccionNombre.personas);
        const x = await collection.insertMany(doctores)
            console.log('nombre agregado...')
    }catch (err) {
        console.error('Error al ingresar el nombre:', err);
    }
}
insertar()
// export async function listarPersonas() {
//     try {
//         const collection = db.collection(coleccionNombre.personas);

//         rl.question('Ingresa el número de ID a buscar: ', async (id) => {
//             const items = await collection.find({ numeroId: id }).toArray();

//             console.log('Lista de personas:');
//             items.forEach(item => {
//                 console.log(`ID: ${item.numeroId} - Nombre: ${item.nombres}`);
//             });
//         });

//     } catch (err) {
//         console.error('Error al listar personas:', err);
//     }
// }

