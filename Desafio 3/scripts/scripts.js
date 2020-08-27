var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", "Osvaldo"];

function diasSemana(dia){
   console.log('El dia numero '+ i +' es el '+dias[i] + " y es par")
}

for (var i = 0; i < dias.length; i++) {
  if (i === 7) {
    alert("Osvaldo es el dia numero 7");
  }
  else if (i%2 === 0){
    diasSemana(dias[i])
  }
}

