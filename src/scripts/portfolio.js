const tab_list = document.querySelector(".portfolio-cards .tabs__tab-list")
const panels = document.querySelectorAll(".portfolio-cards .tabs__tab-panel")

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


// *************** Portfolio Cards *************** //
const portfolio_cards = document.querySelectorAll(".portfolio-card")
const portfolio_popups = document.querySelectorAll(".portfolio-popup")

Array.from(portfolio_cards).forEach((card) => {
    card.addEventListener('click', () => {
        Array.from(portfolio_popups).forEach((popup) => {
            popup.classList.remove("open")
        })
        const popup = document.getElementById(card.dataset.portfolioPopup)
        popup.classList.add("open")
        document.body.classList.add("fullpage-active")
    })
})

Array.from(portfolio_popups).forEach((popup) => {
    console.log(popup)
    const id = popup.id
    const close_popup_button = popup.children[0].children[0]
    close_popup_button.addEventListener('click', () => {
        popup.classList.remove("open")
        document.body.classList.remove("fullpage-active")
    })
})

