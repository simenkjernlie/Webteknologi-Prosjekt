function indexPageChange(){
    changeWidthIndex();
    widthChangeBoxes();
}

function changeWidthIndex(){
    const portraitImgHeight = document.getElementById("portraitImage").offsetHeight;
    const about = document.getElementById("aboutIndex");
    about.style.height = portraitImgHeight+"px";
    const textWrapper = document.getElementById("textWrapper");
    textWrapper.style.fontSize = portraitImgHeight/30+"px";
}


function widthChangeBoxes() {
    const boxes = document.getElementsByClassName("activitis");
    const boxText = document.getElementsByClassName("hoverInf");
    const width = boxes[0].offsetWidth;
    for (e of boxText){
        e.style.fontSize = (String(width/220)+"em");
    }
}

function slideshow(){
    //TODO Should give a slideshow animation to the main page, modular so that evry image of a given class can use it
}