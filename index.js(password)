
var myInput = document.getElementById("pass");
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var number = document.getElementById("number");
var special = document.getElementById("special");
var lengths = document.getElementById("length");
var buttom = document.getElementById('check');


myInput.onkeyup = function  () {

    var lowerCase = /[a-z]/g;
    if(myInput.value.match(lowerCase)){
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    }else{
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }

    var upperCase = /[A-Z]/g;
    if(myInput.value.match(upperCase)){
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    }else{
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    var characters = /[@#$%&;*.,:!]/g;
    if(myInput.value.match(characters)){
        special.classList.remove("invalid");
        special.classList.add("valid");
    }else{
        special.classList.remove("valid");
        special.classList.add("invalid");
    }

    if(myInput.value.length >=8){
        lengths.classList.remove("invalid");
        lengths.classList.add("valid");
    }else {
        lengths.classList.remove("valid");
        lengths.classList.add("invalid");
    }
}
function myCheck() {
 if( myInput.value.match(buttom)){

     alert('Password checked!');
    

 }else{
     alert('Something is wrong! Please check your input and try again');
 }
}
