let Clientes = [];
let arrayclientes = JSON.parse(localStorage.getItem("Clientes")) || [];
console.log(arrayclientes);

function guardar() {
    let nombre = document.getElementById("nombre").value;
    let cuil = document.getElementById("CUIL").value;
    let apellido = document.getElementById("apellido").value;
    Clientes.push({ nombre, apellido, cuil });
    arrayclientes.push({ nombre, apellido, cuil });
    localStorage.setItem("Clientes", JSON.stringify(arrayclientes));
}

function mostrar() {
    const tabla = document.getElementById("tabla");
    console.log(tabla);
    tabla.innerHTML = "";
    for (let i = 0; i < arrayclientes.length; i++) {
        tabla.innerHTML += `<tr><td>${arrayclientes[i].nombre}</td><td>${arrayclientes[i].apellido}</td>
        <td>${arrayclientes[i].cuil}</td></tr>`;
    }
}