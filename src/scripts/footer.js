const privacy_button = document.getElementById("footer-privacy")
const privacy_popup = document.getElementById("footer-privacy-popup")
const close_privacy_popup_button = document.querySelector("#footer-privacy-popup .close_icon")
const legal_button = document.getElementById("footer-legal")
const legal_popup = document.getElementById("footer-legal-popup")
const close_legal_popup_button = document.querySelector("#footer-legal-popup .close_icon")

privacy_button.addEventListener('click', () => {
    privacy_popup.classList.add("open")
    document.body.classList.add("fullpage-active")
})

close_privacy_popup_button.addEventListener('click', () => {
    privacy_popup.classList.remove("open")
    document.body.classList.remove("fullpage-active")
})

legal_button.addEventListener('click', () => {
    console.log(legal_popup)
    legal_popup.classList.add("open")
    document.body.classList.add("fullpage-active")
})

close_legal_popup_button.addEventListener('click', () => {
    legal_popup.classList.remove("open")
    document.body.classList.remove("fullpage-active")
})

document.addEventListener('click', event => {
    if(privacy_popup.classList.contains("open") && !privacy_popup.children[0].contains(event.target) && !privacy_button.contains(event.target)) {
        privacy_popup.classList.remove("open")
        document.body.classList.remove("fullpage-active")
    }
    if(legal_popup.classList.contains("open") && !legal_popup.children[0].contains(event.target) && !legal_button.contains(event.target)) {
        legal_popup.classList.remove("open")
        document.body.classList.remove("fullpage-active")
    }
})
