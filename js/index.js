const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = ` Alzhan B &copy ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Java Script", "HTML", "CSS", "Something else"]; 
const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}