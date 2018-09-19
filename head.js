// ### Define header code ###
var pages = [
    ["Home", "index.html", false],
    ["About", "about.html", false],
    ["Contact", "contact.html", false]
];

var activePage = document.currentScript.getAttribute('activePage');
var isActive = false;
var index = 0;

while(isActive == false && index < 3){
    if(pages[index][0] == activePage)
    {
        pages[index][2] = true;
        isActive = true;
    }
    index++;
}

index = 0;

var html = `<div class="header">\
            <h1>Lyndon Sanche</h1>\
            </div>\
            <div id="navbar">`

while(index < 3) {
    if (pages[index][2] == true) {
        html += `<a class="active" href="${pages[index][1]}">${pages[index][0]}</a>`;
    }
    else if (pages[index][2] == false) {
        html += `<a href="${pages[index][1]}">${pages[index][0]}</a>`;
    }  
    index++;
}
html += '</div>';

document.write(html);

// ### Sticky code ###

// Execute myFunction whenever page is scrolled
window.onscroll = function() {myFunction()};

// get nav
var navbar = document.getElementById("navbar");

// get offset position
var sticky = navbar.offsetTop;

// add sticky class whenever you reach the bar scroll position

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

}