import "./utils/bling"

// toggle header on md
const header = $("header");
const headerStyle = getComputedStyle(header)
const toggleBtn = $("#toggle-header");

toggleBtn.on('click', () => {
    header.classList.toggle('show-header')

    if(headerStyle.display === 'none') {
        toggleBtn.style.transition = 'left 290ms'
        toggleBtn.style.left = '0rem'
    } else {
        toggleBtn.style.left = '8rem'
    }
})