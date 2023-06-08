
interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;

}

interface  Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:12345,
    nombre:'Yair',
    edad:16,
    correo:'yair@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023,
    }
    
}

//Referencia al campo
const{matricula1,grupo:xx}=alumno2
const{grupo}=xx

console.log(`la matricula es: ${matricula1}`)
console.log(`el nombres es: ${alumno2.nombre}`)
console.log(`el grupo es: ${grupo}`)
console.log(`la año del grupo es: ${alumno2.grupo.year}`)

//Desestructuración de objetos: si un objeto es con {}
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)

const[a,,b]=gps;
console.log(`grupo 1: ${a}`)

