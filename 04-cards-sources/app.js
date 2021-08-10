const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', function() {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach(function(slide) {
        slide.classList.remove('active')
    })
}