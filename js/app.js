console.log("Bienvenido");

const ageUser = parseInt(prompt("Ingrese edad"));
const nameUser = prompt("Ingrese nombre de usuario");
const emailUser = prompt("ingrese email");
const passUser = prompt("Ingrese contraseña");

if (ageUser && nameUser && emailUser && passUser) {

} else if ((!ageUser && nameUser && emailUser && passUser)) {
    alert("Ingrese Edad");
} else if ((ageUser && !nameUser && emailUser && passUser)) {
    alert("Ingrese Nombre de usuario");
} else if ((ageUser && nameUser && !emailUser && passUser)) {
    alert("Ingrese Email");
} else if ((ageUser && nameUser && emailUser && !passUser)) {
    alert("Ingrese Contraseña");
} else {
    alert("Complete los campos");
}


function ageIf(){
    if(ageUser >= 18){
        alert("Bienvenido " + nameUser);
    }else{
        alert("No puedes acceder");
    }
}

ageIf();








