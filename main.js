const usuario = "teresa1457";
const pass = "1234567";
let dato1 = document.getElementById("username");
let dato2 = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(dato1.value == usuario && dato2.value == pass){
        alert("tiamo");
    }
    else{
        alert("sexo");
    }
});