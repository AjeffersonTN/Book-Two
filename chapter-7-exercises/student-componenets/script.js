const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
 
 ]
 
 const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
 } 

 /*same as above but the above uses ... rest operator which allows for unlimited arguments that don't need to be typed in
 const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
 } */
 
 const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
 }

 /*same as above but the above uses ... rest operator which allows for unlimited arguments that don't need to be typed in 
 const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
 }*/
  
 const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
 }

 /*same as above. however, the above function is not using the rest operator
 const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
 }
 */


 
//  const student = (name, sectionContent, info, pf) => {
//     return `
//         <div id="student">
//             ${h1(name, `xx-large ${pf}`)}
//             ${section(sectionContent, "gold")}
//             ${aside(info, "pushRight")}
//         </div>
//     `
//  }
/*SAME AS the two functions below. however you will need to add passing or failing to the loop "passing" in the if and "failing" in the else*/
             
 
 const passingStudent = (name, sectionContent, info) => {
    return `
        <div id="student">
            ${h1(name, "xx-large passing")}
            ${section(sectionContent, "gold")}
            ${aside(info, "pushRight")}
        </div>
    `
 }
 const failingStudent = (name, sectionContent, info) => {
    return `
        <div id="student">
            ${h1(name, "xx-large failing")}
            ${section(sectionContent, "gold")}
            ${aside(info, "pushRight")}
        </div>
    `
 }
 // students.forEach(currentStudent => {
 //         const studentHTMLRepresentation = studentPass(
 //         currentStudent.name,
 //         currentStudent.class,
 //         currentStudent.info)
 //     document.querySelector("#container").innerHTML += studentHTMLRepresentation
 // })
 
 
 for (currentStudent of students) {
    let studentComponent = ""
    if (currentStudent.score >= 60) {
        studentComponent = passingStudent(
            currentStudent.name,
            currentStudent.class,
            currentStudent.info,
            )
    } else {
        studentComponent = failingStudent(
            currentStudent.name,
            currentStudent.class,
            currentStudent.info,
            )
    }
    document.querySelector("#container").innerHTML += studentComponent
 }