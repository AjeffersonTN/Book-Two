const shoppingCart = []

const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

        cartEl.innerHTML +=
        `
        <section class="shoppingCart__item">
        <div>${product.name}</div>
        <div>${product.quantity}</div>
        <div>${product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}</div>

        <button id="${idx}" class="cart_removeButton">Remove</button>
        </section>
        `

        grandTotal += product.price * product.quantity
    })

    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `
    // Get a reference to all purchase buttons
    const allRemoveButtons = document.querySelectorAll(".cart_removeButton")

    
    // Add a click event listener to each button
    for (button of allRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToRemove = shoppingCart.find(product) => {
                return parseInt(event.target.id) === product.id 
                
                 } // foundProduct.quantity --
                // displayShoppingCart()                                
            })
            if (indexToRemove !== null) {
                shoppingCart.splice(indexToRemove, 1)
                displayShoppingCart()
            }

    }
}
//Everytime the purchase button is click more than once change the quantity. add 1 to quanity counter or loop over the cart array













