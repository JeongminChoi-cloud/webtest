const pages = [
  ["Index","mainpage.html"],
  ["News","news.html"],
  ["About","about.html"],
  ["Contact","contact.html"]
];

const nav = document.querySelector(".nav");
const current = location.pathname.split("/").pop() || "about.html";

pages.forEach(([label, file]) => {
  const btn = document.createElement("button");
  btn.className = "pill";
  btn.textContent = label;

  if(current === file) btn.classList.add("active");

  btn.onclick = () => {
    window.location.href = file;
  };

  nav.appendChild(btn);
});