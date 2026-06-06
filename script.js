const toggleBtn = document.querySelector(".toggle-btn");

// Mode sombre / clair
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light");
});