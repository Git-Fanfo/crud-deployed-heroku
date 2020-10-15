var formulario = document.getElementsByName("form1")[0];
var actualizar = document.getElementsByName("form2")[0];
var borrar = document.getElementsByName("form3")[0];
var botones = document.getElementById('crud_select');
var tabla = document.getElementById('wrapped');

formulario.style.display = "block";
tabla.style.display = "none";
actualizar.style.display = "none";
borrar.style.display = "none";


botones.addEventListener('submit', function (e) {
  e.preventDefault();
  
  switch (e.submitter.name) {
    case "create":
      formulario.style.display = "block";
      tabla.style.display = "none";
      actualizar.style.display = "none";
      borrar.style.display = "none";

      break;

    case "read":
      formulario.style.display = "none";
      tabla.style.display = "block";
      actualizar.style.display = "none";
      borrar.style.display = "none";

      break;

    case "update":
      formulario.style.display = "none";
      tabla.style.display = "none"; 
      actualizar.style.display = "block";
      borrar.style.display = "none";

      break;

    case "delete":
      formulario.style.display = "none";
      tabla.style.display = "none"; 
      actualizar.style.display = "none";
      borrar.style.display = "block";

      break;

    default:
      console.log("error");
      break;
    }
  }
);

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });    
  }
);

actualizar.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let datosActualizar = new FormData(actualizar);
  let nombrepaciente = datosActualizar.get('nombre');
  let apellidopaciente = datosActualizar.get('apellido');
  let idpaciente = datosActualizar.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/actualizadototalpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });    
  }  
);

borrar.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let datosActualizar = new FormData(borrar);
  let nombrepaciente = datosActualizar.get('nombre');
  let apellidopaciente = datosActualizar.get('apellido');
  let idpaciente = datosActualizar.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/borradototalpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });    
  }  
);
