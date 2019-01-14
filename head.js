// ### Define header code ###
var pages = [
    ["Home", "index", false],
    ["About", "about", false],
    ["Contact", "contact", false],
    ["Craft", "craft", false],
    ["Tech Help", "tech", false]
];

var activePage = document.currentScript.getAttribute('activePage');
var isActive = false;
var index = 0;

while(isActive == false && index < 5){
    if(pages[index][0] == activePage)
    {
        pages[index][2] = true;
        isActive = true;
    }
    index++;
}

index = 0;

var html = `<div class="header">\
            <h1 class="header">Lyndon Sanche</h1>\
            </div>\
            <div id="navbar">`

while(index < 5) {
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