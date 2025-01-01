let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("Lowercase");
let uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Special = document.getElementById("Special");
let genBtn = document.getElementById("genBtn");

// Slider Value
sliderValue.textContent = slider.value;
slider.addEventListener('input',  ()=>{
    sliderValue.textContent = slider.value;
});

genBtn.addEventListener("click", ()=>{
    passBox.value = genPass();
})



// generating custom random charectors/numbers/suymbols using Math.random
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "@#$%^&*";


function genPass(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += Numbers.checked ? numbers : "";
    allChars += Special.checked ? symbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }


    let i =1;
    while(i<=slider.value){
    genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
    i++;
    }
    return genPassword;

}


// for copy icon **copy password
// copyIcon.addEventListener("click", ()=>{
//     if(passBox.value != "" || passBox.value.length >= 1){
//         navigator.clipboard.writeText(passBox.value);
//     };
   
// });