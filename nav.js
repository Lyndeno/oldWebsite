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

var html = `<div id="navbar">`

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