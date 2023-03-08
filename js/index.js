const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();

const skills = ["HTML/CSS", "JavaScript", "SPSS", "Wondershare Filmora", "Questionnaire Design", "Proficient in Spanish, French, and Japanese", "Pub Trivia Champion"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = `\xA9 Marice Romero ${thisYear}`;
footer.appendChild(copyright);