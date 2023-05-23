const usuario = "ángel20099";
const pass = "pugsitos10";
let dato1 = document.getElementById("username");
let dato2 = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(dato1.value == usuario && dato2.value == pass){
        alert("La contraseña es correcta");
    }
    else{
        alert("Su contraseña es incorrecta");
    }
});
