function infofunc(e, info) {
    var i, content, links;
    indicator = document.getElementsByClassName("tabIndicator");
    content = document.getElementsByClassName("demo2");

    if (info === '2019') {
        indicator[0].style.top = '85px';
    } else if (info === '2018') {
        indicator[0].style.top = '154px';
    } else {
        indicator[0].style.top = '25px';
    }
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    links = document.getElementsByClassName("demo");
    indicator = document.getElementsByClassName("tabIndicator");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    e.currentTarget.className += " active";
}
document.getElementById("current").click();