const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `Illia Shabaiev &#9816 ${thisYear}`;
footer.appendChild(copyright);

const skills = ['JavaScript',
    'HTML',
    'CSS',
    'Cypress',
    'Webdriver IO']
const skillsSection = document.getElementById("skills")
const skillsList = document.querySelector(".skillset")

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}