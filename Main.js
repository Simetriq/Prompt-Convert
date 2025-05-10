const cambio = 1000; // Valor del Dolar
const history = [];

// Función principal del menú
function menu() {
    const opcion = prompt(
        "1. Convertir Pesos a Dolar\n" +
        "2. Ver historial\n" +  // Agregué opción de historial
        "3. Salir\n\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1":
            convertir();
            break;
        case "2":
            verHistorial();
            break;
        case "3":
            salir();
            break;
        default:
            alert("Opción no válida");
            menu();
    }
}

// Funsion de conversión
function convertir() {
    const input = prompt("Ingrese su dinero en pesos:");
    const montoPeso = parseFloat(input);

    const montoUsd = montoPeso / cambio;

    const operation = {
        date: new Date().toLocaleString(),
        from: "ARS",
        to: "USD",
        montoPeso: montoPeso,
        montoUsd: montoUsd,
        rate: cambio
    };

    history.push(operation);

    alert(`${montoPeso} ARS = ${montoUsd.toFixed(2)} USD\n(Tasa: 1 USD = ${cambio} ARS)`);
    menu();
}

function verHistorial() {
    if (history.length === 0) {
        alert("No hay operaciones registradas");
    } else {
        let historialTexto = "Historial de conversiones:\n\n";
        history.forEach((op, index) => {
            historialTexto += `${index + 1}. ${op.date} - ${op.montoPeso} ARS → ${op.montoUsd} USD\n`;
        });
        alert(historialTexto);
    }
    menu();
}

// Función para salir
function salir() {
    console.log("Historial completo:", history);
    alert("Saliste");
}

// Iniciar la aplicación
menu();

