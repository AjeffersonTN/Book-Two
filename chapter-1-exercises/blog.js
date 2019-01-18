document.getElementsByClassName("article__header")[0].textContent = "Welcome to the Antonio blog";
/* same as above but used a query
document.querySelector(".article__header").textContent = "Welcome to the Antonio blog";*/

/*same as above but set to a variable

const firstArtHead = document.querySelector("article__header")
firstArtHead.textContent = "Welcome to the Antonio blog";
*/

const change = document.querySelectorAll("article__header")
for (let index = 0; index < change.length; index++) {
    const element = change[index]
    element.classList.add("important")
}


const removIng = document.querySelector(".dashed")
removIng.classList.remove("dashed");

const addIng = document.querySelector(".article__footer")
addIng.classList.add("goldenrod");
