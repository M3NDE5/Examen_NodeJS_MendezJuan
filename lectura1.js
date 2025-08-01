import fs from 'fs'
const archivo = 'acme_doctors_apointments.csv'
const data = fs.readFileSync(archivo, 'utf-8')


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


export const doctores = []
for(let dato of registros){
    if((dato.doctor_code === 'D001' || dato.doctor_code === 'D002') && doctores.some(doc => doc.doctorCode === dato.doctor_code) ){
        continue;
    };
    if(dato.doctor_active === 'true' && dato.office_active === 'true'){
        dato.doctor_active = true
        dato.office_active = true
    }else{
        dato.doctor_active = false
        dato.office_active = false
    }
    const obj = {
      doctorCode : dato.doctor_code,
      docNombre : dato.doctor_first_name,
      docApellido : dato.doctor_last_name,
      docEmail : dato.doctor_email,
      docAtive : dato.doctor_active,
      docOffice : dato.office_active,
      docDiagnosticos : {
        primerDiag : dato.clinical_diagnosis
      }
    }
    doctores.push(obj)
}

const datajs  = JSON.stringify(doctores, null, 2)

const arjs = fs.writeFileSync('data.json', datajs)


