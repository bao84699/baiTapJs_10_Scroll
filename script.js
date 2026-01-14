let section1 = document.querySelector(".section1");
let section1a = document.querySelector(".section1a");
let sections = document.querySelectorAll(".section2, .section3, .section4");

let nowsize = 0.7;

function updateTrigger() {
    if (window.innerWidth < 800) {
        nowsize = 0.9; // mobile
    } else {
        nowsize = 0.7; // desktop
    }
}

window.addEventListener("scroll", () => {
    const scrolling = window.scrollY + window.innerHeight * nowsize;
    if (scrolling >= section1.offsetTop) {
        section1.classList.add("show");
        section1a.classList.add("flight");
    } else {
        section1.classList.remove("show");
        section1a.classList.remove("flight");
    }
    sections.forEach(section => {
        if (scrolling >= section.offsetTop) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });

});
