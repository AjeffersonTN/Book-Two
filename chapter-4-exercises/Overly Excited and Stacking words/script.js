// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuation, numberOfTimes) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let wordCounter = 1
    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp        

        if (wordCounter % 3 === 0) {
            buildMeUp += `${theWordArray[i]}${punctuation.repeat(numberOfTimes)} `
            
        } else {
            buildMeUp += `${theWordArray[i]} `
        }
        wordCounter++
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, ":)", 3)




