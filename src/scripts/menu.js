const navbar = document.getElementById("navbar")
const nav_links = document.querySelector(".nav-links")
const mobile_menu_dropdown = document.getElementById("mobile-menu-dropdown")
const body = document.body
const menu_toggle = document.getElementById("menu-toggle")
const clicktotop = document.getElementById("clicktotop")
const dropdownCategories = document.getElementById("dropdown_categories")
const dropdownCategoriesButton = document.getElementById("dropdown_categories_button")
const accordionCategoriesButton = document.getElementById("accordion_categories_button")
const accordionCategories = document.getElementById("accordion_categories")

document.getElementById("menu-toggle").addEventListener("click", () => {
    mobile_menu_dropdown.classList.toggle("active")
    menu_toggle.classList.toggle("open")
});

window.onresize = resize

window.onscroll = (e) => {
    if (window.scrollY > 200) {
        if (clicktotop.classList.contains("clicktotop-hidden")) {
            clicktotop.classList.remove("clicktotop-hidden")
        }
    } else {
        if (!clicktotop.classList.contains("clicktotop-hidden")) {
            clicktotop.classList.add("clicktotop-hidden")
        }
    }
}
clicktotop.addEventListener("click", () => {
    if (!clicktotop.classList.contains("clicktotop-hidden")) {
        window.scrollTo(0, 0)
    }
})

function resize() {
    if(window.innerWidth > 1024 && mobile_menu_dropdown.classList.contains("active")) {
        mobile_menu_dropdown.classList.remove("active")
        menu_toggle.classList.remove("open")
    }
}

document.addEventListener('click', event => {
    if(mobile_menu_dropdown.classList.contains("active") && !mobile_menu_dropdown.contains(event.target) && !menu_toggle.contains(event.target) && !navbar.contains(event.target)) {
        mobile_menu_dropdown.classList.remove("active")
        menu_toggle.classList.remove("open")
    }
})

Array.from(mobile_menu_dropdown.children).forEach((link) => {
    link.addEventListener("click", () => {
        mobile_menu_dropdown.classList.remove("active")
        menu_toggle.classList.remove("open")
    })
})


const sun = document.querySelectorAll(".sun")
const moon = document.querySelectorAll(".moon")
const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
})();

if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    //sun.classList.remove("hidden")
    moon.forEach((el) => {el.classList.remove("hidden")})
} else {
    document.documentElement.classList.add('dark');
    //moon.classList.remove("hidden")
    sun.forEach((el) => {el.classList.remove("hidden")})
}

if(typeof theme == "string") window.localStorage.setItem('theme', theme);

const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    //sun.classList.toggle("hidden")
    sun.forEach((el) => {el.classList.toggle("hidden")})
    //moon.classList.toggle("hidden")
    moon.forEach((el) => {el.classList.toggle("hidden")})
}

document.querySelectorAll(".theme-toggle").forEach((el) => {
    el.addEventListener("click", handleToggleClick);
})
