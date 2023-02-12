let icon = document.querySelector("#icon");
let body = document.querySelector("body");

  icon.addEventListener("click", function() {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  });

  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    body.classList.add("dark-theme");
  }
