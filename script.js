const preloader = document.querySelector(".preloader");
const top_menu = document.querySelector(".header_menu");
const bottom_menu = document.querySelector(".nav_menu");
window.addEventListener('load', function () {
    welcome_section.style.opacity = "1";
    this.setTimeout(function () {
        preloader.style.opacity = "0";
        this.setTimeout(function () {
            preloader.style.display = "none";
        }, 300)
        document.querySelectorAll('.content div').forEach(el => {
            el.style.animation = '.5s loading4';
        })
        top_menu.style.animation = '1s loading5';
        bottom_menu.style.animation = '1s loading5';
    }, 500)
    showName();
    checkIfLogged();
    daysCounter();
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    // const handleIntersection = (entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('is-visible');
    //             if (entry.target.classList.contains("welcome_page")) {
    //                 home.style.color = "#02a2ff";
    //             }
    //             if (entry.target.classList.contains("notes_page")) {
    //                 notes.style.color = "#02a2ff";
    //             }
    //             if (entry.target.classList.contains("gym_page")) {
    //                 gym.style.color = "#02a2ff";
    //             }
    //             if (entry.target.classList.contains("stats_page")) {
    //                 stats.style.color = "#02a2ff";
    //             }
    //         } else {
    //             entry.target.classList.remove('is-visible');
    //             if (entry.target.classList.contains("welcome_page")) {
    //                 home.style.color = "#fff";
    //             }
    //             if (entry.target.classList.contains("notes_page")) {
    //                 notes.style.color = "#fff";
    //             }
    //             if (entry.target.classList.contains("gym_page")) {
    //                 gym.style.color = "#fff";
    //             }
    //             if (entry.target.classList.contains("stats_page")) {
    //                 stats.style.color = "#fff";
    //             }
    //         }
    //     });
    // };

    const handleIntersection = (entries, observer) => {
        const colorMap = {
            "welcome_page": home,
            "notes_page": notes,
            "gym_page": gym,
            "stats_page": stats,
        };

        entries.forEach(entry => {
            const targetClassList = entry.target.classList;
            const isVisible = entry.isIntersecting;

            targetClassList.toggle('is-visible', isVisible);

            for (const className in colorMap) {
                if (targetClassList.contains(className)) {
                    colorMap[className].style.color = isVisible ? "#02a2ff" : "#fff";
                }
            }
        });
    };


    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function toggleSection(showSection, hideSections) {
    showSection.style.display = "block";
    this.setTimeout(function () {
        showSection.style.opacity = "1";
    }, 100)
    for (const section of hideSections) {
        section.style.display = "none";
        section.style.opacity = "0";
    }
}

const home = document.querySelector(".home_i");
const notes = document.querySelector(".notes_i");
const gym = document.querySelector(".gym_i");
const stats = document.querySelector(".stats_i");

const welcome_section = document.querySelector(".welcome_page");
const notes_section = document.querySelector(".notes_page");
const gym_section = document.querySelector(".gym_page");
const stats_section = document.querySelector(".stats_page");

home.addEventListener('click', function () {
    toggleSection(welcome_section, [notes_section, gym_section, stats_section]);
});

notes.addEventListener('click', function () {
    toggleSection(notes_section, [welcome_section, gym_section, stats_section]);
});

gym.addEventListener('click', function () {
    toggleSection(gym_section, [welcome_section, notes_section, stats_section]);
});

stats.addEventListener('click', function () {
    toggleSection(stats_section, [welcome_section, notes_section, gym_section]);
});

function login() {
    let username = document.getElementById("userName").value;
    let error = document.querySelector(".error");
    if (username.length >= 3 && username.length <= 15) {
        localStorage.setItem("username", username);

        let login_page = document.querySelector(".login_page");
        login_page.style.opacity = "0";
        this.setTimeout(function () {
            login_page.style.display = "none";
        }, 300);
        showName();
    }
    if (username.length < 3) {
        error.innerHTML = "Nazwa jest za krótka!";
        error.style.opacity = "1";
        error.style.transform = "translateY(0)";
        this.setTimeout(function () {
            error.style.opacity = "0";
            error.style.transform = "translateY(20px)";
        }, 2000);
    }
    if (username.length > 15) {
        error.innerHTML = "Nazwa jest zbyt długa!";
        error.style.opacity = "1";
        error.style.transform = "translateY(0)";
        this.setTimeout(function () {
            error.style.opacity = "0";
            error.style.transform = "translateY(20px)";
        }, 2000);
    }
}

function showName() {
    let username = localStorage.getItem("username");
    if (username != null) {
        document.querySelector(".hello_header").innerHTML = "Hi, " + username;
    }
}
function checkIfLogged() {
    let username = localStorage.getItem("username");
    let login_page = document.querySelector(".login_page");
    if (username === null) {
        let login_page = document.querySelector(".login_page");
        login_page.style.display = "flex";
        login_page.style.opacity = "1";
    } else {
        login_page.style.display = "none";
    }
}
function changeName() {
    let login_page = document.querySelector(".login_page");
    login_page.style.display = "flex";
    this.setTimeout(function () {
        login_page.style.opacity = "1";
    }, 1);
}
function daysCounter() {
    let days = document.querySelector(".under_da_header");
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const daysLeft = (6 - currentDay + 7) % 7;
  
    days.innerHTML = daysLeft + " days left";
}
// localStorage.clear();