document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Poppins, sans-serif";
document.body.style.background =
  'url("images/image.png") no-repeat center center fixed';
document.body.style.backgroundSize = "110%";
document.body.style.transition =
  "background-position 0.5s ease, background-size 0.5s ease";
document.body.style.position = "relative";
document.body.style.overflowX = "hidden";


const bodyBefore = document.createElement("div");
bodyBefore.style.position = "fixed";
bodyBefore.style.top = "0";
bodyBefore.style.left = "0";
bodyBefore.style.width = "100%";
bodyBefore.style.height = "100%";
bodyBefore.style.background = "rgba(0,0,0,0.3)";
bodyBefore.style.zIndex = "-1";

document.body.appendChild(bodyBefore);


const todoApp = document.querySelector(".todo-app");
todoApp.style.width = "100%";
todoApp.style.maxWidth = "500px";
todoApp.style.background = "#fff";
todoApp.style.margin = "100px auto 20px";
todoApp.style.padding = "40px 30px 70px";
todoApp.style.borderRadius = "10px";
todoApp.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";

const container = document.querySelector(".container");
container.style.width = "100%";
container.style.minHeight = "100vh";
container.style.background =
  'url("images/image.jpg") no-repeat center center fixed';
container.style.backgroundSize = "cover";
container.style.padding = "10px";



const h2 = todoApp.querySelector("h2");
h2.style.color = "#002765";
h2.style.display = "flex";
h2.style.textAlign = "center";
h2.style.marginBottom = "20px";



const h2Img = h2.querySelector("img");
h2Img.style.width = "30px";
h2Img.style.marginLeft = "10px";




const row = document.querySelector(".row");
row.style.display = "flex";
row.style.alignItems = "center";
row.style.justifyContent = "space-between";
row.style.background = "#edeef0";
row.style.borderRadius = "30px";
row.style.paddingLeft = "20px";
row.style.marginBottom = "25px";


const input = row.querySelector("input");
input.style.flex = "1";
input.style.border = "none";
input.style.outline = "none";
input.style.background = "transparent";
input.style.padding = "10px";
input.style.fontSize = "14px";

const button = row.querySelector("button");
button.style.border = "none";
button.style.outline = "none";
button.style.padding = "16px 50px";
button.style.background = "#ff5945";
button.style.color = "#fff";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.borderRadius = "40px";




document.querySelectorAll("ul li").forEach((li) => {
    li.style.listStyle = "none";
    li.style.padding = "12px 8px 12px 50px";
    li.style.userSelect = "none";
    li.style.fontSize = "17px";
    li.style.cursor = "pointer";
    li.style.position = "relative";
  

    const before = document.createElement("span");
    before.style.position = "absolute";
    before.style.left = "8px";
    before.style.top = "12px";
    before.style.width = "28px";
    before.style.height = "28px";
    before.style.borderRadius = "50%";
    before.style.background =
      'url("images/unchecked.png") center/cover no-repeat';
  
    li.prepend(before);
  

    li.onclick = () => {
      li.classList.toggle("checked");
  
      if (li.classList.contains("checked")) {
        li.style.textDecoration = "line-through";
        li.style.color = "#555";
        before.style.background =
          'url("images/checked.png") center/cover no-repeat';
      } else {
        li.style.textDecoration = "none";
        li.style.color = "#000";
        before.style.background =
          'url("images/unchecked.png") center/cover no-repeat';
      }
    };
  });

  
  document.querySelectorAll("ul li span").forEach((span) => {
    span.style.position = "absolute";
    span.style.right = "0";
    span.style.top = "5px";
    span.style.width = "40px";
    span.style.height = "40px";
    span.style.fontSize = "22px";
    span.style.color = "#555";
    span.style.lineHeight = "40px";
    span.style.textAlign = "center";
    span.style.borderRadius = "50px";
  
    span.onmouseenter = () => {
      span.style.background = "#edeef0";
      span.style.color = "#ff5945";
    };
  
    span.onmouseleave = () => {
      span.style.background = "transparent";
      span.style.color = "#555";
    };
  });
  
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }   
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();