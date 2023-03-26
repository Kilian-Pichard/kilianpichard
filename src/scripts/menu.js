const nav_links = document.querySelector(".nav-links")
//const mobile_menu = document.getElementById("mobile-menu")
const body = document.body
const menu_toggle = document.getElementById("menu-toggle")
const clicktotop = document.getElementById("clicktotop")
const dropdownCategories = document.getElementById("dropdown_categories")
const dropdownCategoriesButton = document.getElementById("dropdown_categories_button")
const accordionCategoriesButton = document.getElementById("accordion_categories_button")
const accordionCategories = document.getElementById("accordion_categories")

document.getElementById("menu-toggle").addEventListener("click", () => {
    //mobile_menu.classList.toggle("mobile-menu-active")
    body.classList.toggle("fullpage-active")
    menu_toggle.classList.toggle("open")
});

//window.onresize = resize

window.onscroll = (e) => {
    if (window.scrollY > 200) {
        if (clicktotop.classList.contains("invisible") && clicktotop.classList.contains("opacity-0")) {
            clicktotop.classList.replace("invisible", "visible")
            clicktotop.classList.replace("opacity-0", "opacity-100")
        }
    } else {
        if (clicktotop.classList.contains("visible") && clicktotop.classList.contains("opacity-100")) {
            clicktotop.classList.replace("visible", "invisible")
            clicktotop.classList.replace("opacity-100", "opacity-0")
        }
    }
}
clicktotop.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

//function resize() {
//    if(window.innerWidth >= 768 && mobile_menu.classList.contains("mobile-menu-active")) {
//        mobile_menu.classList.remove("mobile-menu-active")
//    }
//}

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
