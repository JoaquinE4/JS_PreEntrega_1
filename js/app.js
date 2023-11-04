let nameUser;

const login = () => {

    const ageUser = parseInt(prompt("Ingrese edad"));

    while (true) {
        if (ageUser >= 18) {
            break;
        } else {
            alert("Eres menor, no puedes acceder");
            ageUser = parseInt(prompt("Ingrese edad nuevamente"));
        }
        return;
    }

    nameUser = prompt("Ingrese nombre de usuario");
    const emailUser = prompt("Ingrese email");
    const passUser = prompt("Ingrese contraseña");

    while (true) {
        if (nameUser && emailUser && passUser) {
            alert("Ingreso exitoso");
            mensaje();
            menuDeAdivinanzas();
        } else if (!nameUser) {
            alert("Complete el Nombre");
            nameUser = prompt("Intenta nuevamente");
        } else if (!emailUser) {
            alert("Complete el Email");
            emailUser = prompt("Intenta nuevamente");
        } else if (!passUser) {
            alert("Complete la contraseña");
            passUser = prompt("Intenta nuevamente");
        } else {
            alert("No podes aceder sin completar los campos requeridos")
        }
        return;
    }
}

const mensaje = () => { alert("Bienvenido" + " " + nameUser + "!") }

function menuDeAdivinanzas() {

    const respuesta = confirm("¿Queres Continuar?");

    if (respuesta) {
        alert("Que Bueno!")

    } else {
        alert("¡Que Lastima!");

    }


    if (respuesta === true) {

        const acertijo = "¿De que color es el caballo blanco de san martin?";

        alert(acertijo);


        const respuesta = prompt("¿Cuál es tu respuesta?");

        if (respuesta === "Blanco") {

            alert("Corrrexto")

        } else {
            alert("Respuesta incorrecta. La respuesta es Blanco.");
        }


    } else {
        alert("¡Volve Cuando quieras!")

    }
}

login();




