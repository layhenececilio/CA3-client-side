
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
document.getElementById('randomUsers').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let author = data.results;
             console.log(author);

            //Get Data Value
            let output = "";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="random">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><center>Name: ${lists.name.first}</center></li>
                            <li class="list-group-item"><center><img src="${lists.picture.large}"></center></li>
                            <li class="list-group-item"><center>Phone Number: ${lists.cell}</center></li>
                            <li class="list-group-item"><center>DOB: ${lists.dob.date}</center></li>
                            <li class="list-group-item"><center>Age: ${lists.dob.age}</center></li>
                            <li class="list-group-item"><center>Email ID: ${lists.email}</center></li>
                            <li class="list-group-item"><center>Gender: ${lists.gender}</center></li>
                            <li class="list-group-item"><center>City: ${lists.location.city}</center></li>
                            <li class="list-group-item"><center>Country: ${lists.location.country}</center></li>
                            <li class="list-group-item"><center>PostCode: ${lists.location.postcode}</center></li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('users').innerHTML = output;

        });
};
