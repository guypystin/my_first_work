window.onscroll = function showHeader() {
    var header = document.querySelector('.menu ');
    if ((window.pageYOffset >= 700) && (window.pageYOffset < 5250)) {
        header.classList.add('header_fixed');
    }
    else {
        header.classList.remove('header_fixed');
    }
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {}
}
const anchors = document.querySelectorAll('a[href*="#"')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}