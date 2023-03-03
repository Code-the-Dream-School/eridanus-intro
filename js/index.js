const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Anna Iurchyk ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript'];
const skillSection = document.getElementById('skills');

for(let i = 0; i <= skills.length; i++) {

    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillSection.appendChild(skill);
}

