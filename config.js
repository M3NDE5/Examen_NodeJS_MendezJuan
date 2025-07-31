import { MongoClient } from 'mongodb';

export const uri = 'mongodb://localhost:27017/'
export const dbNombre = 'examenNodeJuan'
export const coleccionNombre = {
    personas : 'personas'
}
const cliente = new MongoClient(uri)