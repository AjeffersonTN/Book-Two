/*The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.*/

/*
1. Add the correct string as the first argument to addEventListener()
2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
3. Have your developer tools open. When you click the button, the following element...

<section id="flight" class="power disabled">  

Should then look like this.  

<section id="flight" class="power enabled">
*/

document.querySelector("#activate-flight").addEventListener("click", function flightHandlerFunction(){

    document.getElementById("flight").className = "power enabled";

})


/*
Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

document.querySelector("#activate-mindreading").addEventListener()
document.querySelector("#activate-xray").addEventListener()
*/

document.querySelector("#activate-mindreading").addEventListener("click", function mindReadingHandlerFunction(){

    document.getElementById("mindreading").className = "power enabled";

})


document.querySelector("#activate-xray").addEventListener("click", function xrayHandlerFunction(){

    document.getElementById("xray").className = "power enabled";

})


/*
Once that is complete, add two more buttons

Enable All Powers
Disable All Powers

Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.
*/

document.querySelector("#activate-all").addEventListener("click", function xrayHandlerFunction(){

    document.getElementById("xray").className = "power enabled";
    document.getElementById("mindreading").className = "power enabled";
    document.getElementById("flight").className = "power enabled";

})
document.querySelector("#deactivate-all").addEventListener("click", function xrayHandlerFunction(){

    document.getElementById("xray").className = "power disabled";
    document.getElementById("mindreading").className = "power disabled";
    document.getElementById("flight").className = "power disabled";

})