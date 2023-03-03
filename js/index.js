const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `Olga Adams &copy ${thisYear}`;

footer.appendChild(copyright);

const skills = ["HTML", 
                "CSS",
                "JavaScript",
];   

const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul')

for (i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

