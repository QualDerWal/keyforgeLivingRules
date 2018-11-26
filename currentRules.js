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
    var ruleSections = json.sections;
    console.log(ruleSections)
    // container[0].innerHTML += '<div class="row"> <' + ruleSections[0].type + ' class="three columns">'+ ruleSections[0].title + '</'+ ruleSections[0].type +'><div class="nine columns">nine</div></div>';

    for (var index = 0; index < ruleSections.length; index++) {
        if(ruleSections[index].type){
            container[0].innerHTML += '<' + ruleSections[index].type +'>'+ ruleSections[index].title + '</'+ ruleSections[index].type +'>'+ '<p>'+ ruleSections[index].paragraph +'</p>';
        }
        else {
            container[0].innerHTML += '<p>'+ ruleSections[index].paragraph +'</p>';
        }
        if(ruleSections[index].oList){
            var temp = "";
            temp += "<ol>"
            for (let item = 0; item < ruleSections[index].oList.length; item++) {
                temp += '<li>'+ ruleSections[index].oList[item] +'</li>';
            }
            temp += "</ol>"
            container[0].innerHTML += temp;
        }
        if(ruleSections[index].uList){
            var temp = "";
            temp += "<ul>"
            for (let item = 0; item < ruleSections[index].uList.length; item++) {
                temp += '<li>'+ ruleSections[index].uList[item] +'</li>';
            }
            temp += "</ul>"
            container[0].innerHTML += temp;
        }
    }
}

