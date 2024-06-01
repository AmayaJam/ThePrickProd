import * as checker from "./checkPassword.js";
import * as modifier from "./modifyReq.js";

/*-----===MENU ANIMATION===-----*/
document.querySelector('.third-button').addEventListener('click', function () {
    document.querySelector('.animated-icon3').classList.toggle('open');
    document.querySelector('.collapse').classList.toggle('show');
});

/*-----===SETTINGS OPEN/CLOSE===-----*/
// Select the open and close buttons
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
// Select the popup
const popup = document.getElementById("popup");

// Open the popup when the open button is clicked
openPopupButton.addEventListener("click", function() { popup.style.display = "block";});

// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", function() { popup.style.display = "none";});

// Close the popup when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === popup) { popup.style.display = "none"; }
});

/*-----===COLOURBLIND===-----*/
const toggleColorblindButton = document.getElementById("toggleColorblindButton");

// Add click event listener to toggle colorblind mode
toggleColorblindButton.addEventListener("click", function() {
    document.body.classList.toggle("colorblind-mode");

// Toggle button text and class
if (toggleColorblindButton.classList.contains("off")) {
    toggleColorblindButton.textContent = "Colorblind Mode: ON";
    toggleColorblindButton.classList.remove("off");
    toggleColorblindButton.classList.add("on");
} else {
    toggleColorblindButton.textContent = "Colorblind Mode: OFF";
    toggleColorblindButton.classList.remove("on");
    toggleColorblindButton.classList.add("off");
}
});

/*-----===WORD COUNTER===-----*/
var password = document.getElementById("pwgame-textarea");
var wrdCounter = document.querySelector(".counter h3");
var conditionClearCounter = 0;

password.addEventListener("input", () => {
    var passwordContent = password.value;
    
    console.log(passwordContent);
    console.log(conditionClearCounter);

   var wordCount = passwordContent.trim().split(/\s+/).filter(Boolean).length;
   wrdCounter.innerHTML = wordCount;

    var state;
    var cleared = 0; 

/*-----===VARIABLES===-----*/
    var req1 = checker.checkReq1(passwordContent);
    if (req1) {
        if(cleared == 0){
            cleared = 1;}
        state = true;
        modifier.modifyReq1(state, cleared);}
    else{
        state = false;
        modifier.modifyReq1(state, cleared);
    }

    var req2 = checker.checkReq2(passwordContent);
    if (req2) {
        if(cleared == 1){
            cleared = 2;
        }
        state = true;
        modifier.modifyReq2(state, cleared);}
    else{
        state = false;
        modifier.modifyReq2(state, cleared);}

    var req3 = checker.checkReq3(passwordContent);
    if (req3) {
        if(cleared == 2){
            cleared = 3;
        }
        state = true;
        modifier.modifyReq3(state, cleared);}
    else{
        state = false;
        modifier.modifyReq3(state, cleared);}

    var req4 = checker.checkReq4(passwordContent);

    if (req4) {
        if(cleared == 3){
            cleared = 4; }
        state = true;
        modifier.modifyReq4(state, cleared);}
    else{
        state = false;
        modifier.modifyReq4(state, cleared);}

    var req5 = checker.checkReq5(passwordContent);
    if (req5) {
        if(cleared == 4){
            cleared = 5;
        }
        state = true;
        modifier.modifyReq5(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq5(state, cleared);
    }
    
    var req6 = checker.checkReq6(passwordContent);
    if (req6) {
        if(cleared == 5){
            cleared = 6;
        }
        state = true;
        modifier.modifyReq6(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq6(state, cleared);
    }

    var req7 = checker.checkReq7(passwordContent);
    if (req7) {
        if(cleared == 6){
            cleared = 7;
        }
        state = true;
        modifier.modifyReq7(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq7(state, cleared);}

    var req8 = checker.checkReq8(passwordContent);
    if (req8) {
        if(cleared == 7){
            cleared = 8;}
        state = true;
        modifier.modifyReq8(state, cleared);
    }
    else{
        state = false;
        modifier.modifyReq8(state, cleared);
    }

    var req9 = checker.checkReq9(passwordContent);
    if (req9) {
        if(cleared == 8){
            cleared = 9; }
        state = true;
        modifier.modifyReq9(state, cleared);}
    else{
        state = false;
        modifier.modifyReq9(state, cleared); }

    var req10 = checker.checkReq10(passwordContent);
    if (req10) {
        if(cleared == 9){
            cleared = 10;}
        state = true;
        modifier.modifyReq10(state, cleared);}
    else{
        state = false;
        modifier.modifyReq10(state, cleared);}
 
});

