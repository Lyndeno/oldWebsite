var pages = [
    ["Home", "index.html", false],
    ["About", "about.html", false],
    ["Contact", "contact.html", false]
];

var activePage = document.currentScript.getAttribute('activePage');
var isActive = false;
var index = 0;

while(isActive == false && index < 3){
    if(pages[0][0] == activePage)
    {
        pages[0][2] = true;
        isActive = true;
    }
    index++;
}

index = 0;

var html = `<ul>`

while(index < 3){
    if(pages[index][2] == true){
        html += `<li><a class="active" href="${pages[index][1]}">${pages[index][0]}</li>`;
    }
    else{
        html += `<li><a href="${pages[index][1]}">${pages[index][0]}</li>`;
    }  
    index++;
}
html += '</ul>';




/*var html = '<ul>\
                <li><a href="index.html">Home</a></li>\
                <li><a href="#">About</a></li>\
                <li><a href="#">Contact</a></li>\
                </ul>';
*/
//document.getElementById('nav').innerHTML = html;

document.write(html);