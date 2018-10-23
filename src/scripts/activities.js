function widthChangeBoxes() {
    const boxes = document.getElementsByClassName("activitis");
    const boxText = document.getElementsByClassName("hoverInf");
    const width = boxes[0].offsetWidth;
    for (e of boxText){
        e.style.fontSize = (String(width/190)+"em");
    }
}