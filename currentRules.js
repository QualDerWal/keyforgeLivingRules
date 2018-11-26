var json = "";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', './currentRules.json', true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            console.log(xmlhttp)
            json = JSON.parse(xmlhttp.responseText);
         }
    }
};
xmlhttp.send(null);

function fillDom() {
    var container = document.getElementsByClassName( 'container' );
    // append to the element's content
    var titleList = json.sections;
    console.log(titleList)
    // container[0].innerHTML += '<div class="row"> <' + titleList[0].type + ' class="three columns">'+ titleList[0].title + '</'+ titleList[0].type +'><div class="nine columns">nine</div></div>';

    for (var index = 0; index < titleList.length; index++) {
        container[0].innerHTML += '<' + titleList[index].type +'>'+ titleList[index].title + '</'+ titleList[index].type +'>'+ '<div>'+ titleList[index].paragraph +'</div>';

        
    }
}

