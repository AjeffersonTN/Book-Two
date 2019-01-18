for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0//
            console.log(currentNumber) // Only 2, 4, 6 will appear//
    }

   if (currentNumber % 7 && currentNumber % 5 === 0) {
        console.log("Chicken Monkey")
    } 
   if (currentNumber % 5 === 0) {
        console.log("Chicken")
    }
    
    if (currentNumber % 7 === 0) {
        console.log("Monkey")
    }
    
   
    else {
        console.log(Sorry)
    }
