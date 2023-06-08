

interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
    edad:number
}


//Definir un objeto
const alumnos:Alumno={
    nombre:'Yair',
    edad:20,
    email:'yair@gmail.com',
    matricula:17
}


let vector1:Array<number>=[9,8,7,6,5]
vector1.push(34)
for(let elemento of vector1)
    console.log(elemento)
