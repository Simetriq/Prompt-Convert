const cambio = 1000; //Valor del Dolar

const history = []
// -----------------------------paso 1: realizar la funcion del menu----------------------------------------
function menu() {
    // Prompt se le pregunta al usuario
    const opcion = prompt(

        "1. Convertir Pesos a Dolar"+
        "  //  "+
        "2. Salir"
    );    

    //Switch para que ingrese el valor de opcion
    switch (opcion) {
        case "1":
    
            convertir();
            break;
    
        case "2":
            salir();
            break;
    
        default:
            alert("Opcion no valida");
            menu();
    };
};
menu();
//---------------------------------Este es el paso 2 se pide el monto a convertir-------------------------------------
function conversion() {
    const input = prompt ("Ingrese su dinero en pesos");

    const montoPeso = parseFloat(input); //ParseFloat para que el monto sea solamente numerico
}
/// paso 3 La operacion de convercion
const montoUsd = montoPeso / cambio;

const operation = {
        date: new Date().toLocaleString(),
        from: "ARS",
        to: "USD",
        montoPeso: montoPeso,
        montoUsd: montoUsd.toFixed(2), 
        rate: cambio
};
//---------------------------Esto es para guardar la conversion al array de history
history.push(operation); 

    
    alert(
        `✅ ${montoPeso} ARS = ${montoUsd.toFixed(2)} USD\n` +
        `(Tasa: 1 USD = ${EXCHANGE_RATE} ARS)`
    );

    menu();