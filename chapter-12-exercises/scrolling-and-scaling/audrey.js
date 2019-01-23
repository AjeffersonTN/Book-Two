// make the box get bigger as you scroll

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
    let width = (window.scrollY / 3)
    let height = (window.scrollY / 4)

    if (width >= 50) {
        audrey.style.width = `${width}px`

    }
    if (height >= 100) {
        audrey.style.minHeight = `${height}px`

    }

    
    
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.

        make the box get bigger as you scroll
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})