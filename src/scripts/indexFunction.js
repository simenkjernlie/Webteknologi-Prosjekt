//Function for calling other functions when the page changes (Called with onchange)
function indexPageChange(){
    changeWidthIndex();
    widthChangeBoxes();
}

//Changes the size of the aboutIndex wrapper depending on the size of the portraitImage
function changeWidthIndex(){
    const portraitImgHeight = document.getElementById("portraitImage").offsetHeight;
    const textWrapper = document.getElementById("textWrapper");
    textWrapper.style.fontSize = String(Math.max((portraitImgHeight/30), 10))+"px";
    const about = document.getElementById("aboutIndex");
    about.style.height = "auto";
    const autoHeight = about.offsetHeight;
    about.style.height = Math.max(portraitImgHeight, autoHeight)+"px";
}

//Changes the font size of the activities boxes when the boxes are resized
function widthChangeBoxes() {
    const boxes = document.getElementsByClassName("offers");
    const boxText = document.getElementsByClassName("hoverInfOffer");
    const width = boxes[0].offsetWidth;
    for (e of boxText){
        if (width > 280){
            e.style.fontSize = String(Math.max((width/300),0.7)) + "em";
        } else{
            e.style.fontSize = String(Math.max((width/250),0.7)) + "em";
        }
    }
}