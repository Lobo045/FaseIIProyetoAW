const ArrayLista = localStorage.getItem('myArray');
const infoTanle = JSON.parse(ArrayLista);


drawTable(infoTanle);

function drawTable(infoTanle){
    const table = document.createElement("table");

    const thead  = document.createElement("thead");
    const tr = document.createElement("tr");

    const ThIdTarea = document.createElement("th");
    ThIdTarea.innerText = "ID de Tarea";

    const ThTareaNombre = document.createElement("th");
    ThTareaNombre.innerText = "Nombre de tarea";

    const ThtareaDescripcion = document.createElement("th");
    ThtareaDescripcion.innerText = "Descripcion de tarea";

    const ThfechaInicio = document.createElement("th");
    ThfechaInicio.innerText = "Fecha de Inicio";

    const ThclienteNombre = document.createElement("th");
    ThclienteNombre.innerText = "Nombre Del Cliente";

    const ThidProyecto = document.createElement("th");
    ThidProyecto.innerText = "ID del Proyecto";

    const THestatus = document.createElement("th");
    THestatus.innerText = "Estatus";

    tr.append(ThIdTarea, ThTareaNombre, ThtareaDescripcion, ThfechaInicio, ThclienteNombre, ThidProyecto, THestatus);

    table.appendChild(thead);

    const tbody = document.createElement("tobdy");
    table.appendChild(tbody);

    for (let member of infoTanle){
        const tr =document.createElement('tr');

        const tdIdTarea = document.createElement("td");
        tdIdTarea.innerText = member.idTarea;
        tr.appendChild(tdForName);

        const TdtareaNombre = document.createElement("td");
        TdtareaNombre.innerText = member.tareaNombre;
        tr.appendChild(TdtareaNombre);

        const TdtareaDescripcion = document.createElement("td");
        TdtareaDescripcion.innerText = member.tareaDescripcion;
        tr.appendChild(TdtareaDescripcion);

        const tdfechaInicio = document.createElement("td");
        tdfechaInicio.innerText = member.fechaInicio;
        tr.appendChild(tdfechaInicio);
        
        const tdclienteNombre = document.createElement("td");
        tdclienteNombre.innerText = member.clienteNombre;
        tr.appendChild(tdclienteNombre);

        const tdidProyecto = document.createElement("td");
        tdidProyecto.innerText = member.idProyecto;
        tr.appendChild(tdidProyecto);

        const tdseccionComentarios = document.createElement("td");
        tdseccionComentarios.innerText = member.seccionComentarios;
        tr.appendChild(tdseccionComentarios);

        const tdestatus = document.createElement("td");
        tdestatus.innerText = member.estatus;
        tr.appendChild(tdestatus);
    }

    resutl.innerText= "";

    result.appendChild(infoTanle);
}
