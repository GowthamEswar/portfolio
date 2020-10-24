const nav = document.querySelector('.nav-links');
const hamburger_menu = document.querySelector(".burger");
const body = document.getElementById("mybody");
let x = true;

hamburger_menu.addEventListener("click", () => {
    x = !x
    nav.classList.toggle('nav-active');
    hamburger_menu.classList.toggle("toggle");
    if (x === false) {
        body.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'scroll';
    }
})

function closenav() {
    console.log('navclosed');
    nav.classList.remove('nav-active');
    hamburger_menu.classList.remove("toggle");
    body.style.overflowY = 'scroll';
}

// layer
let layer = document.querySelector(".layer");
let imgcontainer = document.querySelector(".imageContainer");


imgcontainer.addEventListener("mouseover", function mouseOver() {
    layer.style.width = "0%";
    console.log('working')
});

imgcontainer.addEventListener("mouseleave", function mouseleave() {
    layer.style.width = "100%";
    console.log('not working')
});


//mouse
var cursor3 = document.querySelector(".cursor3");
const navbarHeight = document.querySelector('.navbar').clientHeight;

document.addEventListener("mousemove", function(e) {
    cursor3.style.left = e.pageX + 'px';
    cursor3.style.top = e.pageY - navbarHeight + 'px';
});

//scroll
function scrollAppear() {
    var aboutContent = document.querySelector(".about-content");
    var imageContainer = document.querySelector(".imageContainer");
    var tabPosition = document.querySelector(".tabPosition");
    var contact = document.querySelector(".h3contact");
    var contact2 = document.querySelector(".h3contact2");
    var socialmenu = document.querySelector(".social-menu");
    var aboutposition = aboutContent.getBoundingClientRect().bottom;
    var imageposition = imageContainer.getBoundingClientRect().bottom;
    var tabposition = tabPosition.getBoundingClientRect().bottom;
    var contactposition = contact.getBoundingClientRect().bottom;
    var aboutposfix;
    var imgposfix;
    var tabposfix;
    var contactposfix;
    var screenpositions = window.innerHeight

    function mediaquery(x) {
        if (x.matches) { // If media query matches
            imgposfix = imageposition - 200;
            aboutposfix = aboutposition - 400;
            tabposfix = tabposition - 200;
            contactposfix = contactposition + 200;
        } else {
            imgposfix = imageposition - 200;
            aboutposfix = aboutposition - 200;
            tabposfix = tabposition + 100;
            contactposfix = contactposition + 200
        }
    }

    var x = window.matchMedia("(max-width: 700px)")
    mediaquery(x) // Call listener function at run time
    x.addListener(mediaquery) // Attach listener function on state changes

    if (aboutposfix < screenpositions) {
        aboutContent.style.opacity = "1";
        aboutContent.style.transform = "translateX(0px)"
    } else {
        aboutContent.style.transform = "translateX(-200px)"
        aboutContent.style.opacity = "0";
    }

    if (imgposfix < screenpositions) {
        imageContainer.style.opacity = "1";
        imageContainer.style.transform = "translateX(0px)"
    } else {
        imageContainer.style.transform = "translateX(200px)"
        imageContainer.style.opacity = "0";
    }

    if (tabposfix < screenpositions) {
        tabPosition.style.opacity = "1";
    } else {
        tabPosition.style.opacity = "0";
    }

    if (contactposfix < screenpositions) {
        contact.style.opacity = "1";
        contact.style.transform = "translateX(0px)";
        contact2.style.opacity = "1";
        contact2.style.transform = "translateX(0px)";
        socialmenu.style.opacity = "1";
        socialmenu.style.transform = "translateX(0px)";
    } else {
        contact.style.opacity = "0";
        contact.style.transform = "translateX(200px)";
        contact2.style.opacity = "0";
        contact2.style.transform = "translateX(-200px)";
        socialmenu.style.opacity = "0";
        socialmenu.style.transform = "translateY(100px)";
    }
}

window.addEventListener('scroll', scrollAppear)