/*The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.*/

document.querySelector("#activate-flight").addEventListener("click", function flightHandlerFunction(){

    document.getElementById("flight").className = "power enabled";

})


/*
1. Add the correct string as the first argument to addEventListener()
2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
3. Have your developer tools open. When you click the button, the following element...

<section id="flight" class="power disabled">  

Should then look like this.  

<section id="flight" class="power enabled">
*/
