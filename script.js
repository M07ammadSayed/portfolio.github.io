window.onunload = function () {
    if (window.scrollY > 0) {
        window.scroll(0, 0);
    }
};

let typed = new Typed("#typing", {
    strings: ["Photographer"],
    typeSpeed: 200,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 2500,
    fadeOut: false,
    fadeIn: false,
    loop: true,
    showCursor: false,
    autoInsertCss: false
});

const element = document.querySelectorAll("nav.nav-con ul li a");
for(let i = 0; i < element.length; i++) {
    element[i].onclick = e=> {
        let n = 0;

        while(n < element.length) {
            element[n++].className = "";
        }

        e.target.className = "active";
    }
};

window.onscroll = function () {
    const element = document.querySelectorAll("nav.nav-con ul li a");
    if (this.scrollY >= document.getElementById("about").offsetTop) {
        document.getElementById("bi").style.bottom = "15px";
        document.querySelector("nav.nav-con").style.backgroundColor = "rgba(45, 48, 51, .5)";
        document.querySelector("nav.nav-con").style.height = "60px";
        element[0].className = "";
        element[1].className = "active";
    } else {
        document.getElementById("bi").style.bottom = "-50px";
        document.getElementById("bi").style.opacity = "0";
        document.querySelector("nav.nav-con").style.backgroundColor = "transparent";
        document.querySelector("nav.nav-con").style.height = "80px";
    }

    if (this.scrollY >= document.getElementById("skills").offsetTop) {
        element[1].className = "";
        element[2].className = "active";
    }
};

document.getElementById("bi").onclick = function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
};

document.querySelector("section.intro-con div.intro div svg").onclick = function () {
    window.scroll({
        top: document.getElementById("about").offsetTop,
        behavior: "smooth"
    });
};

new WOW().init();