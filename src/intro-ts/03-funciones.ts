
function sumar(a,b):void{ //No es error, avisa que es any 
    console.log(a+b)
}

const rsultado= sumar('Yair',' Terán')

function suma2(n1:number,n2:number):number{
    return n1+n2
}

console.log(suma2(4,6));


function multiplicar(n3:number,n4:number,n5:number=5):number{
    let tem=n3*n5
    return tem
}

//Pasar el objeto a una función
console.log(multiplicar(3,0,6));

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function datosMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x
    console.log(mascota)
}

const nuevaMascota:Mascotas={
    nombre:'Oso',
    edad: 17,
    mostrarEdad(){
            console.log('La edad es: ',this.edad)
    }

}

    datosMascota(nuevaMascota,4)

    //Creamos una variable que asiga el resultado de la suma 
let funcSuma=function(n1:number,n2:number):number{
    return n1+n2
}

console.log(funcSuma(4,3))

//Funciones con parametro REST
function sumar3(...valores:number[]){ //los ... indicar los valores
    let suma=0
    for(let x=0; x<valores.length;x++)
        suma+=valores[x]

    return suma
}

console.log(sumar3(10,2,3,4))
console.log(sumar3(1,2))

