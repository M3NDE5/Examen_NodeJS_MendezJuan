import { MongoClient } from 'mongodb';

export const uri = 'mongodb+srv://juanangelmendez9:0jEGcVIRvM0FyJ70@cluster0.2y4ktep.mongodb.net/'
export const dbNombre = 'mi_db'
export const coleccionNombre = {
    personas : 'personas'
}
const cliente = new MongoClient(uri)