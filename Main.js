const cambio = 1000; //Valor del Dolar

const history = []

function menu() {
    const opcion = prompt(

        "1. Convertir Pesos a Dolar"+
        "  //  "+
        "2. Salir"
    );    

    
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