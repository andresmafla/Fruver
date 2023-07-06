/*console.log("Mi primer mensaje de Javascript");
//Ambito de las Variables  
//var, let, const


//Arreglos
const arregloNumeros=[30,40,50];
arregloNumeros.push(60);
arregloNumeros.push(70);
console.log(arregloNumeros);


//Objetos

const persona={
  nombre: 'Juan',
  apellido: 'Acosta',
  edad: 40
}

persona.apellido='Aux';
console.log(persona.apellido);
console.log(persona); 

//Clases

class Animal{
  constructor(patas,tamanio){
    this.patas=patas;
    this.tamanio=tamanio;
  }
}

class Gato extends Animal{
  constructor(patas,tamanio,pelaje){
    super(patas,tamanio);
    this.pelaje=pelaje;
  }

}

const perro= new Animal(4,"Mediano");
console.log(perro);


const felix= new Gato(4,"Pequeño","Liso");
console.log(felix);*/

//Funciones
/*
function mensaje(nombre){
  console.log("Hola mundo, saludo a "+nombre);
}


mensaje("Pedro");

//Function Arrow / Funciones de Flecha

const mensaje=(nombre)=>{
  console.log("Hola mundo, saludo a "+nombre);
  saludo="Hola mundo, saludo a "+nombre;
  return saludo;
}

mensaje('Gabriel')
const resultado=mensaje('Ana');
console.log(resultado);


const suma=(op1,op2)=>{
  return "El valor de la suma de "+op1+" + "+op2+" es: "+(op1+op2);
}

const resultado=suma(10,8);
console.log(resultado);

//Template String ` 

const suma=(op1,op2)=>{
  return `El valor de la suma de ${op1} + ${op2} es: ${(op1+op2)}`;
}

const resultado=suma(10,8);
console.log(resultado);

//Desestructuración de objetos 

const web={
  nombre: "Udenar",
  links: {
    sitio: "www.udenar.edu.co"
  },
  redesSociales:{
    youtube:{
      enlace: "www.youtube.com/udenar",
      nombre: "Youtube Udenar"
    },
    facebook:{
      enlace: "www.facebook.com/udenar",
      nombre: "Facebook Udenar"
    },
    instagram:{
      enlace: "www.instagram.com/udenar",
      nombre: "Instagram Udenar"
    }
  }
}

const {redesSociales}=web;



//console.log(web.redesSociales.instagram.enlace);
//console.log(web.redesSociales.instagram.nombre);

console.log(redesSociales);

//Operador de propagación ...

const frutas=["Manzana","Pera","Mango","Fresa"];

const dulces=["Mermelada","Manjar","Helado"];

const postres=[frutas,dulces];

console.log(postres);


const postres2=[...frutas,...dulces];
console.log(postres2);

//Promesa 

const miPromesa = new Promise((resolv,reject)=>{
  if(Math.random()*10 < 9) resolv('Dato Correcto');
  else reject('Dato Incorrecto');
});

miPromesa.then(respuesta=>{
  console.log(respuesta);
})
.catch((error)=>{
  console.log(error);
})

//Async Await

//Modulo 
const PI=Math.PI;

const suma=(num1,num2)=>{
  console.log(num1+num2);
}

console.log(suma(5,4));
console.log(PI);

*/
import {PI,suma} from './modulo.js';

console.log(PI);

console.log(suma(5,13));











