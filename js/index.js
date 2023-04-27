let today = new Date();

let footer = document.querySelector("footer");

let p = document.createElement("p");
let thisYear = today.getFullYear();
p.innerHTML = "&copy;" + " Ali Reza " + thisYear;
footer.appendChild(p);

let skills = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "React",
  "My Sql",
  "Sql Server",
  "Node.js",
];

let skillSection = document.querySelector("#skills");

let skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");

  skill.textContent = skills[i];

  skillsList.appendChild(skill);
}
function toggleDropdown() {
  var dropdownMenu = document.querySelector(".dropdown-menu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

let messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event) {
  let userName = event.target.userName.value;
  let userEmail = event.target.userEmail.value;
  let userMessage = event.target.userMessage.value;

  console.log(userName, userEmail, userMessage);

  event.preventDefault();
  const messageSection = document.querySelector("#message");
  const messageList = messageSection.querySelector("ul:nth-child(2)");

  if (messageSection.style.display === "none") {
    messageSection.style.display = "block";
  }
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:email@example.com"> ${userName} </a>
  <span>" Wrote : "<br>${userMessage}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.id = "removeButton";

  removeButton.addEventListener("click", function (event) {
    let entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});

fetch("https://api.github.com/users/alirezanabavi/repos")
  .then((response) => response.json())
  .then((data) => {
    let repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById("projects");
    console.log(projectSection);
    let projectList = projectSection.querySelector("ul");
    console.log(projectList);
    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  });
