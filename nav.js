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

var html = `<ul>`

while(index < 3) {
    if (pages[index][2] == true) {
        html += `<li><a class="active" href="${pages[index][1]}">${pages[index][0]}</a></li>`;
    }
    else if (pages[index][2] == false) {
        html += `<li><a href="${pages[index][1]}">${pages[index][0]}</a></li>`;
    }  
    index++;
}
html += '</ul>';

document.write(html);