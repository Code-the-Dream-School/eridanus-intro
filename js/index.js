// Footer
const fullName = "Greg Curl";
const footer = document.querySelector("footer");

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");

copyright.innerHTML = `${fullName} ${thisYear} &copy`;
footer.appendChild(copyright)

// Skills section
const skills = ["HTML", "CSS", "Ruby", "Rails", "Python"]

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul")
// console.log(skillsList);
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}
