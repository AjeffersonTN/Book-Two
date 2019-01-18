

/*
FUNCTION!!!
const go = (direction, speed) => {
    if(speed > 75){
    console.log(`The car is moving ${direction}, at ${speed} mph SLOW DOWN`)
}
    else { 
        console.log(`The car is moving ${direction}, at ${speed} mph`)}
    }   
go("forward", 25)
*/

// for each element in the array if it's a "hotdog" print hotdog and if it's not print "not hotdog" to the console!

/*
const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]
for (let i = 0; i < foods.length; i++) {
    let currentFood = foods[i];
    if (currentFood === "hotdog") {
        console.log("hotdog");
    } else {
        console.log("not hotdog");
    }
    
    
}
*/
/*Loop over every item in this array:
Return a new array that contains only strings. Log out the result.

Hint: The typeof operator

const stuff = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];
let newStuff = [];
for (let index = 0; index < stuff.length; index++) {
    const element = stuff[index];
    if (typeof element === `string`) {
        newStuff.push(element);
    }
}
console.log(newStuff)*/

/*Lightning Exercise: Given the object below, output each of the values to the console using dot notation.*/
/*const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`height: ${wardrobe.height}, manufacture: ${wardrobe.manufacturer}, contents: ${wardrobe.contents}, depth: ${wardrobe.depth}, width ${wardrobe.width};

to add a key and value simply do below
wardrobe.material = "cedar"

to add the basehall to contents array
wardrobe.contents.push(baseball hat)*/

/*Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.*/
/*
const family = {
    member: "Antonio"
}
const family1 = {
    membere: "Keisha"
}
const family2 = {
    member: "Justice"
}
const family3 = {
    member: "Jenesis"
}

const familyMembers = [family, family1, family2, family3]
console.log(familyMembers)*/

/*
const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
 }

 const animalsDispaly = kennel["currentAnimals"]
 console.log(animalsDispaly)

 //OR//
 const animalsDispaly = kennel["currentAnimals"]
 for (let i = 0; i < animalsDispaly.length; i++) {
     const currentAnimals = animalsDispaly[i];
     
 }
 console.log(animalsDispaly)*/

 /*Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

Lightning Exercise 2: Output only Andy and Zoe in the console.*/
/*
 const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
const fullT = nashvilleSoftwareSchool["instructors"]["fullTime"]
const partT = nashvilleSoftwareSchool ["instructors"]["partTime"]
console.log(partT + "," + fullT)

const andyN = nashvilleSoftwareSchool.instructors.fullTime[4]
const zoeN = nashvilleSoftwareSchool.instructors.partTime[0]
console.log(andyN, zoeN)
*/
/*Output the following value to the console.
Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album*/
/*
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
const paul = beatles.members[1].name
const dateStart = beatles.history.formed
const dateEnd = beatles.history.disbanded
const birth = beatles.members[1].birth
const album = beatles.albums[3]

console.log(`${paul} was in the Beatles from ${dateStart} to ${dateEnd}. He was born in ${birth}. He contributed heavily to the ${album}.`)

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${ beatles.albums[3]}.`)
/*Design a function named `evenOrOdd` that take a single number as an argument.
2. It should return the string "Even" if the number is evenly divisible by two.
3. It should return the string "Odd" if the number is not evenly divisible by two.

Use the modulo - or remainder - operator in JavaScript to accomplish this.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()*/
/*
const evenOrOdd = originalNumber => {
    if(originalNumber % 2 === 0) {
    return "Even"
    }   
    return "Odd"
 }
 /*1. Create an array of numbers. Some even, some odd.
2. Iterate the array and invoke the `evenOrOdd` passing the current number as the argument.
3. Use `console.log` to display the result in the Developer Console.*/
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < nums.length; i++) {
    const currentNumbers = nums[i];
   const itWasEvenOrOdd = evenOrOdd(currentNumbers)    
   console.log(itWasEvenOrOdd)
}

/*both are the same above and below */ 

/*
nums.forEach(currentNumbers => {
    const itWasEvenOrOdd = evenOrOdd(currentNumbers)    
    console.log(itWasEvenOrOdd)
} )

*/

/*Use dot notation to access the value of the key "meaning_of_life" in this object
Now access it using a variable called "meaning": let meaning = "meaning_of_life"
*/
/*
let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life
console.log(meaning)
*/





































