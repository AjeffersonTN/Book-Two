const canidateInfo = {
    name: "Elizabeth Sanger",
    age: 45,
    martialStatus: "Married",
    children: true,
    profession: "Lawyer",
    yearsPoliticalExperience: 4,
    politicalParty: "Democrat",
    missionStatement: "Together as one",
    biography: "Cha cha slide",
    images: [],
    district: {
        districtNumber: 6,
        population: 150000,
        keyLeaders: [],
        addKeyLeaders: function (leader) {
            this.keyLeaders.push(leader)
        }
    },
    politicalViews: {
        taxes: "hate them",
        jobs: "need more",
        infrastructure: "fix stuff and save trees",
        healthCare: "everyone should have it",
        crimeAndEnforcement: "eye for an eye",
    }
    websites: {
        registerToVote: "wwww.voteIdiot.com"
        donateYourMoney: "www.giveItToMe$$.com"
    }
}
canidateInfo.district.addKeyLeaders("Bob Dole")
console.log(canidateInfo)



const volunteerList = {
    volunteers: [],
    addVolunteer: function (volunteer){
        this.volunteers.push(volunteer)
    },
    getAllVolunteers: function () {
        return this.volunteers
    }
}
const allvolunteers = volunteerList.getAllVolunteers()
console.log(allvolunteers)

const volunteerInformation = {
    name: "Jason Bourne",
    address: "Blah Bals",
    email: "NNN",
    phoneNumber: 1233445667,
    availability: ["weekdays, weekends, daily-mornings, daily-evenings"],
    activitiesToDo: ["flyers, answering calls, fundraising, crying"],

}
volunteerList.addVolunteer(volunteerInformation)
console.log(volunteerInformation)