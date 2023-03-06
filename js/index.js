const today = new Date();
// console.log(today);
const thisYear = today.getFullYear();
// console.log(thisYear);
const footer = document.querySelector('#footer');
const copyright = document.createElement('p');
console.log(copyright);
copyright.innerHTML = 'Anton Kondakov &copy ' + thisYear;
footer.appendChild(copyright); 
let skills = ['Agile', 'JavaScript', 'HTML', 'CSS' ];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
// console.log(skillsList);

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}