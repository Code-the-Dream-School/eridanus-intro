const today = new Date();
const thisYear = today.getFullYear();
console.log("this is year!", thisYear);
const footer = document.guerySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Yulia Lopatko & copy ${thisYear} &#9816`;
footer.appendChild(copyright);

const skills= [
  "HTML",
  "Node.js",
  "Customer service",
  "Busuness Analitics",
];

const skillsSection = document.getElementById('skills')
const skillsList = skillsSection.querySelect('ul')

for(let i = 0; i< skills.length; i++){
  let skill = document.createElement('li')
  skill.innerText = skills[i]
  skillsList.appendChild(skill);
};


