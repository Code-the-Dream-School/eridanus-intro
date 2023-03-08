let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement('p');
copyright.innerHTML = "Jose Castillo " + thisYear;

document.body.appendChild(copyright);

let skills = ["Coding in Python", "Coding in JavaScript", "Digital Marketing", "Proficient in Excel"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");

//Loop for Array 
let total = 0;
for( i=0; i < skills.length; i++) {
let skill = document.createElement("li");
    total += skills[i];
//skill.innerHTML = skills[i];
skillsList.appendChild(skill);
//console.log(skills[i])
}
