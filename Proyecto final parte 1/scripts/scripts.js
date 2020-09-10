function mostrarMensajeDeBienvenida (){
  var nombre = prompt("Por favor ingrese su nombre");
  alert ("Bienvenido/a " + nombre);
}

mostrarMensajeDeBienvenida();

function Auto (marca, modelo, anio, puertas){
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.puertas = puertas;
}

function Duenio (nombre, nacimiento, pais, ciudad, telefono, mail){
  this.nombre = nombre;
  this.nacimiento = nacimiento;
  this.pais= pais;
  this.ciudad = ciudad;
  this.telefono = telefono;
  this.mail = mail;
}

var duenio1 = new Duenio("Lucas Peralta", "23/09/1990" , "Argentina", "Buenos Aires", "4587895", "luqui@gmail.com");
var duenio2 = new Duenio("Emma Pinto", "02/05/1995", "Argentina", "Buenos Aires", "4587870", "empinto@gamil.com")

function mostrarMensajeDeAgradecimiento() {
  alert("Gracias " + duenio1.nombre + " Pronto nos comunicaremos con usted");
}

var duenios = [duenio1, duenio2];
console.log(duenios);

var autos = [];

var auto1 = new Auto("citroen", "c4", 2018, 4); 
var auto2 = new Auto("ford", "fiesta", 2010, 2); 

autos.push(auto1,auto2);
console.log(autos);



