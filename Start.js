let usario;
do {
  usario = prompt("Cual es es usario");
}while (usario !== 'Abraham');
let password;
do {
  password = prompt("Cual es es password")
}while (password !== '12345');

try {
  let tareasArray = [];
  const addTarea = (ev)=>{
      ev.preventDefault(); 
      let objetoTarea = {
          idTarea: document.getElementById('idTarea').value,
          tareaNombre: document.getElementById('tareaNombre').value,
          tareaDescripcion: document.getElementById('tareaDescripcion').value,
          fechaInicio: document.getElementById('fechaInicio').value,
          clienteNombre: document.getElementById('clienteNombre').value,
          idProyecto: document.getElementById('idProyecto').value,
          seccionComentarios: document.getElementById('seccionComentarios').value,
          estatus: document.getElementById('estatus').value
      }
      tareasArray.push(objetoTarea);
      document.forms[0].reset();
      
      console.warn('added', {tareasArray});
      let pre = document.querySelector('#msg pre');
      pre.textContent= '\n' + JSON.stringify(tareasArray, '\t',2);
      localStorage.setItem('myArray', JSON.stringify(tareasArray));
  }
  document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('btn').addEventListener('click', addTarea)

      if(!(document.getElementById('idTarea').value), !(document.getElementById('tareaNombre').value)){
        throw("Favor de llenar todos los campos");
      }
  });
} catch (error) {
  
}