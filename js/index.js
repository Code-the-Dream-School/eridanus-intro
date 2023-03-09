
const today = new Date();
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Christie Agbaosi ${thisYear} &#9889`;
footer.appendChild(copyright);

const skills = ["Javascript",
    "Microsoft Word",
    "PowerPoint",
    "Excel",
    "Google Docs",
    "Slides",
    "Sheets",
    "Bilingual(English, Spanish)"];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
