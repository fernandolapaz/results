// JSON DATA
const categories = document.querySelectorAll('.summary__category')
const result = document.getElementById('result')

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        // Add content to the summary list
        for (let i = 0; i < categories.length; i++) {
            categories[i].innerHTML = `
            <img src='${data[i].icon}' alt='' width='20' height='20'>
            <h3>${data[i].category}</h3>
            <p class='summary__score'>${data[i].score}
            <span>/ 100</span></p>`
        }

        // Result (average of scores)
        let scores = []
        for (let i = 0; i < data.length; i++) {
            scores[i] = data[i].score
        }

        let total = scores.reduce((total, value) => total + value)
        let average = total / (scores.length)
        result.innerHTML = average.toFixed(0)
    }
    )

// ATTRIBUTION
const arrow = document.querySelector('.attr__btn')
const panel = document.querySelector('.attribution')

arrow.addEventListener('click', function () {
    panel.classList.toggle('show')

    if (panel.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
        this.removeAttribute('title')
        this.style.animation = 'none'
    } else {
        this.setAttribute('aria-expanded', 'false')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target)) {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
            arrow.setAttribute('aria-expanded', 'false')
            arrow.setAttribute('title', 'Show attribution information')
        }
    }
})

/* THEME SWITCHER */
const btnTheme = document.querySelector('.theme')
const iconsTheme = document.querySelectorAll('.theme__icon')
const root = document.querySelector(':root')

btnTheme.addEventListener('click', function () {
    root.classList.toggle('dark')

    for (let i of iconsTheme) {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden')
        } else {
            i.classList.add('hidden')
        }
    }
})