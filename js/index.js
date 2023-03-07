const today = new Date();
const thisYear = today.getFullYear();
console.log("this year",thisYear);
const footer = document.querySelector("footer");//first one of something
const copyright = document.createElement("p");

copyright.innerHTML = `Fany Kreminski &copy${thisYear}`;
footer.appendChild(copyright);

const skills = ["HTML","CSS",".NET","C++"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for(let i=0; i<skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}