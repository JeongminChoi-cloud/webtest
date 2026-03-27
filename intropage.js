const stage = document.getElementById("stage");
const tpl = document.getElementById("walkerTemplate");

const headColors = [

"#ff4fbf",
"#ff0000",
"#ff7a00",
"#ffd400",
"#b7ff00",
"#00c853",
"#5ad7ff",
"#1e5bff",
"#8a2be2",
"#ffffff",
"#9e9e9e",
"#000000"

];

const gap = 1;

headColors.forEach((color,i)=>{

const node = tpl.content.firstElementChild.cloneNode(true);

node.style.animationDelay = `${i * gap}s`;

node.style.setProperty("--head",color);

stage.appendChild(node);

});

document.getElementById("introTitle").addEventListener("click", () => {
  window.location.href = "mainpage.html";
});

