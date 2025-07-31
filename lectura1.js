import fs from 'fs'

const data = fs.readFileSync('acme_doctors_apointments.csv', 'utf-8')


const lines = data.trim().split('\n')


const headers = lines[0].split(';')



export const registros = []


for (let i = 1; i < lines.length; i++) {
    const valores = lines[i].split(';')
    const obj = {}

    headers.forEach((header, index) => {
        header = header.replace('\r', '')
        obj[header] = valores[index].replace('\r', '')
    })
    registros.push(obj)
}

console.log(registros)