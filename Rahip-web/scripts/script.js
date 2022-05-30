/*  Aside   */

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.add("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// const navTogglerBtn = document.querySelector(".nav-toggler"),
//   aside = document.querySelector(".aside");

// navTogglerBtn.addEventListener("click", () => {
//   asideSectionTogglerBtn();
// });

// function asideSectionTogglerBtn() {
//   aside.classList.toggle("open");
//   navTogglerBtn.classList.toggle("open");
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.toggle("open");
//   }
// }

/* ************** ContactForm ************ */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/enzos3397@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
  console.log($form);
})(document);

((d) => {
  const $form = d.querySelector(".contact-form2"),
    $loader = d.querySelector(".contact-form-loader2"),
    $response = d.querySelector(".contact-form-response2");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/enzos3397@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $form.reset();
        location.hash = "#gracias";
      })
      .catch((err) => {
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
  console.log($form);
})(document);

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* Style Switcher */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  if (dayNight.querySelector("i").classList.value === "fas fa-sun") {
    localStorage.setItem("theme", "dark");
  }
  if (dayNight.querySelector("i").classList.value === "fas fa-moon") {
    localStorage.setItem("theme", "light");
  }

  console.log(dayNight.querySelector("i").classList.value);
  console.log(localStorage);
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "light") {
    dayNight.querySelector("i").classList = "fas fa-moon";
  }
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList = "fas fa-sun";
  }
});
