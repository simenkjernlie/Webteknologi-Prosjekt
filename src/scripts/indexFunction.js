//Not currently in use
function heightAdjuster(){
    let aboutWrapper = document.getElementById("textWrapper");
    let aboutMain = document.getElementById("aboutIndex").offsetHeight;
    aboutWrapper.style.paddingTop = String(aboutMain/2 - aboutWrapper.offsetHeight/2)+"px";
}