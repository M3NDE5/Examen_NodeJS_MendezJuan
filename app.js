import rl from './readline.js'
import {insertar} from './personas.js'




export function showMenu(){
    console.log('menu')
    console.log('1. CARGAR')
    console.log('2. listar')
    console.log('3. actualizar')
    console.log('4. eliminar')
    console.log('5. salir\n')
    rl.question('Seleciona una opcion: ', opt => {
        switch(opt){
            case '1':
                console.log('1. Cargar personas\n2. Cargar consultorios')
                rl.question('Elige una opcion: ', opt =>{
                    switch(opt){
                        case '1':
                            insertar()
                    }
                })
                console.log('caso1')
                insertar()
                break;
            case '2':
                console.log('Listar Usuarios')
                listarEmpleados()
                break;
            case '3':
                console.log('caso3')
                showMenu();
                break;
            case '4':
                console.log('caso4')
                showMenu();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opcion Invalida. ')
                showMenu();
        }
    })
}

showMenu()