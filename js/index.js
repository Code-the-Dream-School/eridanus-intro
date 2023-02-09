//Creating a Date object

const today = new Date();
const thisYear = today.getFullYear();

// appending paragraff to the footer
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const unicode = "&copy";
copyright.innerHTML = unicode + " Tatyana " + thisYear;
footer.appendChild(copyright);

// adding list of skills 
 const skills = ["Java", "Java Script", "Type Script", "HTML", "CSS", "SQL"];
 const skillsection = document.getElementById("skills");
 const skillList = document.getElementById("list");
 for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillList.appendChild(skill);
 }


console.log(footer);





//Dom manipulation practice

//GetElementById()
const title = document.getElementById('main-heading');
console.log(title);
//GetElementByClass()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);
//GetElementByTagName()
const tagList = document.getElementsByTagName('li');
console.log(tagList);
// querySelector()

//querySelectorAll()
