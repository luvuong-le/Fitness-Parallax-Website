$(document).ready(function () {
    $('select').material_select();
});

/* Sections */
let landingPage = document.getElementById("landing_page");
let servicesPage = document.getElementById("services");
let resultsPage = document.getElementById("results");
let packagesPage = document.getElementById("packages");
let signUp = document.getElementById("sign-up");

/* Buttons */
let home = document.getElementById("top-home");
let landingBtn = document.getElementById("landing-button");
let servicesBtn = document.getElementById("section-motivated");
let resultsBtn = document.getElementById("section-results");
let packagesBtn = document.getElementById("section-packages");
let loginBtn = document.getElementById("section-login");

home.addEventListener("click", (e) => {
    landingPage.scrollIntoView({behavior: "smooth"});
    removeAllActive();
    e.target.classList.add("active");
});

landingBtn.addEventListener("click", (e) => {
    resultsPage.scrollIntoView({ behavior: "smooth" });
    removeAllActive();
    resultsBtn.classList.add("active");
});

servicesBtn.addEventListener("click", (e) => {
    servicesPage.scrollIntoView({ behavior: "smooth" });
    removeAllActive();
    e.target.classList.add("active");
});

resultsBtn.addEventListener("click", (e) => {
    resultsPage.scrollIntoView({ behavior: "smooth" });
    removeAllActive();
    e.target.classList.add("active");
});

packagesBtn.addEventListener("click", (e) => {
    packagesPage.scrollIntoView({ behavior: "smooth" });
    removeAllActive();
    e.target.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    signUp.scrollIntoView({ behavior: "smooth" });
    removeAllActive();
    e.target.classList.add("active");
});

function removeAllActive() {
    let links = document.querySelectorAll(".nav-link");
    for (let l of links) {
        l.classList.remove("active");
    }
}