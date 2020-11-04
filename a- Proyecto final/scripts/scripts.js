var nombre;

localStorage.setItem("nombreLS",nombre);

var nombreGuardado = localStorage.getItem("nombreLS");
  var autos;

// Crea las opciones con las marcas de los autos
function mostrarMarcas(){
  const marca = document.querySelector("#marca");
  const marcasRenderizadas = [];
  autos.forEach(function(auto){ 
    if (marcasRenderizadas.indexOf(auto.brand) < 0) {  
       marcasRenderizadas.push(auto.brand);
    }
  });
  marcasRenderizadas.sort().forEach(function(brand){
    let option = document.createElement("option");
    option.textContent = brand;
    option.value = brand.toLowerCase();
    marca.appendChild(option);
  })
}


// Crea las opciones con los modelos de los autos
function ingreseModelo(){
  document.querySelector("#modelo").innerHTML= ""; 
  const marcaElegida = document.querySelector("#marca").value;
  const modelosRenderizados = [];
  autos.forEach(function(auto){
    if (auto.brand.toLowerCase() === marcaElegida && modelosRenderizados.indexOf(auto.model) < 0) {
      var option = document.createElement("option");
      option.textContent = auto.model;
      option.value = auto.model.toLowerCase();
      modelo.appendChild(option);
      modelosRenderizados.push(auto.model);
    }
  })
}  

//Realiza la cotización del auto
function cotizarAuto(){
  const marcaElegida = document.querySelector("#marca").value;
  const modeloElegido = document.querySelector("#modelo").value;
  const yearElegido = parseInt(document.querySelector("#anio").value);
  const puertasElegidas = document.querySelector("#puertas").value;
  let precioAuto = document.querySelector("#precio-modal")
  autos.forEach(function(auto){
    if (auto.brand.toLowerCase() === marcaElegida && auto.model.toLowerCase() === modeloElegido) {
        if (auto.precio0km > 10000000 || yearElegido >= 2010) {
        precioAuto = "$8000"
        }else{
        precioAuto = "$5000"
        }
      document.querySelector("#precio-modal").innerHTML= precioAuto;
      document.querySelector("#marca-modal").innerHTML= marcaElegida;  
      document.querySelector("#modelo-modal").innerHTML= modeloElegido;
      document.querySelector("#year-modal").innerHTML= yearElegido;
      document.querySelector("#puerta-modal").innerHTML= puertasElegidas;
    }
  })
}

function nombreUsuario(){
  const nombreElegido = document.querySelector("#nombre-apellido").value;
  document.querySelector("#nombre-modal").innerHTML= nombreElegido;
}

//Si falta un dato acerca del auto le avisa al usuario que falta algun dato, una vez completo muestra al siguiente paso
function mensajeFaltaCompletarDatoAuto(){
  const aviso = $(".parrafo-aviso");
  let faltaInfo = false;
  document.querySelectorAll(".required-1").forEach(function(elem){
    if (elem.value === "") {
      faltaInfo = true;
    }
  })
  if (faltaInfo === true) {
    aviso.text("Por favor complete todos los datos requeridos").fadeIn(1500, function(){
      $(this).fadeOut(2000);
    });
  }else{
    document.querySelector(".car-information").style.display = "none";
    document.querySelector(".person-information").style.display = "block";
    document.querySelector(".car-one").style.background = "white";
    document.querySelector(".car-two").style.cssText = "background: #8ccfee; border-radius: 50%;";
  }
}

//Si falta un dato acerca de la persona le avisa al usuario que falta completar algun dato
function mensajeFaltaCompletarDatoPersonal(){
  const aviso = $(".parrafo-aviso");
  let faltaInfo = false;
  let telefonoLength = $("#telefono").val().length;
  document.querySelectorAll(".required-2").forEach(function(elem){
    if (elem.value === "") {
      faltaInfo = true;
    }
  })
  if (telefonoLength < 8) {
    aviso.text("Ingrese un numero de teléfono válido").fadeIn(1500, function(){
       $(this).fadeOut(2000);
    });
  }else if (faltaInfo === true) {
    aviso.text("Por favor complete todos los datos requeridos").fadeIn(1500, function(){
       $(this).fadeOut(2000);
    });
  }else{
    document.querySelector(".person-information").style.display = "none";
    document.querySelector(".modal-content").style.display = "block";
    document.querySelector(".car-two").style.background = "white";
    document.querySelector(".car-three").style.cssText = "background: #8ccfee; border-radius: 50%;";
  }
}

//Crea la opcion fecha con los años para los autos
  function ingreseFecha(){
  const max = new Date().getFullYear();
  const min = max - 30;    
  const autoAnio = document.querySelector("#anio");    
  for (var i = max; i >= min; i--) {
    let option = document.createElement("option");
    option.textContent = i;
    option.value = i; 
    autoAnio.appendChild(option);
  }
}

//Boton para volver a cotizar el seguro
function recotizar(){
  document.querySelector(".modal-content").style.display = "none";
  document.querySelector(".car-information").style.display = "block";
  document.querySelector(".car-three").style.background = "white";
  document.querySelector(".car-one").style.cssText = "background: #8ccfee; border-radius: 50%;";
}

//Aparece el header cuando scroleas
function scrollPage(){
  const header = document.querySelector(".header");
  const headerH3 = document.querySelector(".header-h3");
  const headerSpan = document.querySelector(".header-span");
  const heroContainer = document.querySelector(".hero-container");
  if (window.scrollY > 100) {
    header.style.cssText = "background: #1b1b1bbf; "
    headerH3.style.color = "white";
    headerSpan.style.color = "#cddc39";
    heroContainer.style.display = "none";
  }else{
    header.style.display = "none"
    heroContainer.style.display = "block";
  } 
};

window.onload = function(){

  document.querySelector(".button-cotizar").addEventListener("click", nombreUsuario); 

//Busca la información en la api para mostrar las marcas y modelos y realizar la cotización
  $.ajax({
    url:"https://api.iunigo.com/vehicle/catalog?year=2020",
    method: 'GET',
    dataType: 'json',
    success: function (data){
      autos = data;
      console.log(autos)
      mostrarMarcas(); 
      document.querySelector("#marca").addEventListener("change", ingreseModelo);
      document.querySelector(".about-button-cotizador").addEventListener("click", cotizarAuto);   
    } 
  })

  document.querySelector(".button-siguiente").addEventListener("click", mensajeFaltaCompletarDatoAuto);

  document.querySelector(".button-cotizar").addEventListener("click", mensajeFaltaCompletarDatoPersonal);

  ingreseFecha();

  document.querySelector(".button-recotizar").addEventListener("click", recotizar);

  scrollPage();
  window.addEventListener("scroll", scrollPage)
}


  
  

  



 