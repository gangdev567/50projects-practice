const open = document.getElementById("open");
const close = document.getElementById("close");
const container1 = document.querySelector(".container1");

open.addEventListener("click", () => container1.classList.add("show-nav"));

close.addEventListener("click", () => container1.classList.remove("show-nav"));
