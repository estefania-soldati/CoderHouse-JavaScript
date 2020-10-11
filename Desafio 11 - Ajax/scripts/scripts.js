var nombre;

localStorage.setItem("nombreLS",nombre);

var json = '{"vehinculo": "auto", "color": "rojo"}';
var obj = JSON.parse(json);
console.log(obj.color);

var nombreGuardado = localStorage.getItem("nombreLS");


window.onload = function(){

  var autos;

  function ingreseMarca(){
    const marca = document.querySelector("#marca");
    autos.forEach(function(auto){    
      let option = document.createElement("option");
      option.textContent = auto.brand;
      option.value = auto.brand;
      marca.appendChild(option);
    });
  }

  function ingreseModelo(){
    document.querySelector("#modelo").innerHTML= ""; 
    const marcaElegida = document.querySelector("#marca").value;
    autos.forEach(function(auto){
      if (auto.brand === marcaElegida) {
        var option = document.createElement("option");
        option.textContent = auto.model;
        option.value = auto.model;
        modelo.appendChild(option);
      }
    })
  }  

  function cotizarAuto(){
    const nombreElegido = document.querySelector("#nombre-apellido").value;
    const marcaElegida = document.querySelector("#marca").value;
    const modeloElegido = document.querySelector("#modelo").value;
    const yearElegido = parseInt(document.querySelector("#anio").value);
    const puertasElegidas = document.querySelector("#puertas").value;
    let precioAuto = document.querySelector("#precio-modal")
    autos.forEach(function(auto){
      if (auto.brand === marcaElegida && auto.model === modeloElegido) {
        if (auto.precio0km > 10000000 || yearElegido >= 2010) {
          precioAuto = "$8000"
        } else{
          precioAuto = "$5000"
        }
        document.querySelector("#precio-modal").innerHTML= precioAuto;
        document.querySelector("#marca-modal").innerHTML= marcaElegida;  
        document.querySelector("#modelo-modal").innerHTML= modeloElegido;
        document.querySelector("#year-modal").innerHTML= yearElegido;
        document.querySelector("#puerta-modal").innerHTML= puertasElegidas;
        document.querySelector("#nombre-modal").innerHTML= nombreElegido;
      }
    })
  }
  
  function mostrarData(){
    ingreseMarca();
    document.querySelector("#marca").addEventListener("change", ingreseModelo);
    document.querySelector(".about-button-cotizador").addEventListener("click", cotizarAuto);
  }

  $.ajax({
    url:"https://api.iunigo.com/vehicle/catalog?year=2020",
    method: 'GET',
    dataType: 'json',
    success: function (data){
      autos = data;
      console.log(autos)
      console.log(autos[23].precio0km)
      console.log(autos[20].precio0km)
      console.log(autos[8].precio0km)
      console.log(autos[32].precio0km)
      mostrarData();    
    } 
  })
  
  function mensajeFaltaCompletarCampo() {
    var modal = document.querySelector("#myModal");
    var aviso = $("#parrafo-aviso");
    let faltaInfo = false;
    document.querySelectorAll(".required").forEach(function(elem){
      if (elem.value === "") {
        faltaInfo = true;
      }
    }) 
    if (faltaInfo === true) {
      aviso.text("Por favor complete todos los datos requeridos").fadeIn( 1500, function() {
        $(this).fadeOut(2000);
      });
    }else {
      document.querySelector(".about").style.display = "none";
      modal.style.display = "block";
    }
  }
  document.querySelector(".about-button-cotizador").addEventListener("click", mensajeFaltaCompletarCampo);
  
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
  ingreseFecha();


  var modal = document.querySelector("#myModal");
  var span = document.querySelectorAll(".close")[0];
  span.addEventListener("click", function() {
    modal.style.display = "none";
  });
 
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}


  
  

  



 