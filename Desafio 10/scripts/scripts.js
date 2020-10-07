var nombre;

localStorage.setItem("nombreLS",nombre);

var json = '{"vehinculo": "auto", "color": "rojo"}';
var obj = JSON.parse(json);
console.log(obj.color);

var nombreGuardado = localStorage.getItem("nombreLS");


window.onload = function(){
  
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

  function ingreseMarca(){
    const marca = document.querySelector("#marca");
    autos.forEach(function(auto){    
    let option = document.createElement("option");
    option.textContent = auto.marca;
    option.value = auto.marca;
    marca.appendChild(option);
    });
    }
    ingreseMarca();

  function ingreseModelo(){
    document.querySelector("#modelo").innerHTML= ""; 
    const marcaElegida = document.querySelector("#marca").value;
    autos.forEach(function(auto){
      if (auto.marca === marcaElegida) {
        var option = document.createElement("option");
        option.textContent = auto.modelo;
        option.value = auto.modelo;
        modelo.appendChild(option);
      }
    })
  }  
  document.querySelector("#marca").addEventListener("change", ingreseModelo);

  function cotizarAuto(){
    const nombreElegido = document.querySelector("#nombre-apellido").value;
    const marcaElegida = document.querySelector("#marca").value;
    const modeloElegido = document.querySelector("#modelo").value;
    const yearElegido = document.querySelector("#anio").value;
    const puertasElegidas = document.querySelector("#puertas").value;
    autos.forEach(function(auto){
      if (auto.marca === marcaElegida && auto.modelo === modeloElegido) {
        document.querySelector("#precio-modal").innerHTML= auto.precio;
        document.querySelector("#marca-modal").innerHTML= marcaElegida;  
        document.querySelector("#modelo-modal").innerHTML= modeloElegido;
        document.querySelector("#year-modal").innerHTML= yearElegido;
        document.querySelector("#puerta-modal").innerHTML= puertasElegidas;
        document.querySelector("#nombre-modal").innerHTML= nombreElegido;
      }
    })
  }
  document.querySelector(".about-button-cotizador").addEventListener("click", cotizarAuto);


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


  
  

  



 