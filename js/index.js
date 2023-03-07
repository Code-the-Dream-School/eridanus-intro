const today = new Date();
const thisyear = today.getFullYear();
const footerEl = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = 'Rojina Pradhan '+ thisyear;
footerEl.appendChild(copyright);
const skills = ["MS Office", "Canva", "Adobe", "HTML","JavaScript"];
const skillSection = document.querySelector("#skills");
const skillsList = skillSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
skillsList.appendChild(skill);
} 