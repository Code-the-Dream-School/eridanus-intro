let today = new Date();

let footer = document.querySelector("footer");

let p = document.createElement("p");

p.textContent = "Ali Reza " + thisYear;

let skills = ["HTML", "CSS", "Java", "JavaScript"];

let skillSection = document.querySelector("#skills");

let skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");

  skill.textContent = skills[i];

  skillsList.appendChild(skill);
}
