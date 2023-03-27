const tab_list = document.querySelector(".about-resume .tabs__tab-list")
const panels = document.querySelectorAll(".about-resume .tabs__tab-panel")

Array.from(tab_list.children).forEach((tab) => {
    tab.addEventListener('click', () => {
        Array.from(tab_list.children).forEach((tab) => {
            tab.classList.remove("tabs__tab--selected")
        })
        Array.from(panels).forEach((panel) => {
            panel.classList.remove("tabs__tab-panel--selected")
        })
        const panel = document.querySelector(`#${tab.dataset.panel}`)
        tab.classList.add("tabs__tab--selected")
        panel.classList.add("tabs__tab-panel--selected")
    })
})

