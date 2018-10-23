


images = ["../img/hotelbilder/hotel1-1.jpg", "../img/hotelbilder/hotel1-2.jpg", "../img/hotelbilder/hotel1-3.jpeg"]



function changeImg(){
    document.getElementById('bilder_slide').src = "../img/hotelbilder/hotel1-1.jpg"
    console.log(document.getElementById('bilder_slide').src)
    console.log("heiehi")

}


hotel_texts_def = ["Hotel Adriana is one of the best known hotels in the Cagliari area. It is known for its beautiful location by the beach, along with unbeatable service and chefs working around the clock to always offer freash mediterranean courses.", "sdad2", "afa3", "4"]
hotel_texts_exs = ["Hotel Adriana is one of the best known hotels in the Cagliari area. It is known for its beautiful location by the beach, along with unbeatable service and chefs working around the clock to always offer freash mediterranean courses. <br> <br> The hotel is located in the city center, but the beach is just a 5 minute walk away. Here you can play biljard or hang out in the pool area, while enjoing a feash Mojito from the bar.", "he2", "kl3", "sg4"]



var ut1 = document.getElementById("gul_boks1");
var img1 = document.getElementById("img_ut1")
var text1 = document.getElementById('hot_text1')
var hot1 = document.getElementById('hotel_block1')

ut1.style.display = "none"
function utvidelse1() {
    if (ut1.style.display === "none") {
        ut1.style.display = "block";
        img1.src = "../img/hotelbilder/arrow.png"
        hot1.style.height = "700px"
        text1.innerHTML = hotel_texts_exs[0]
        img1.style.top = "52%"
    } else {
        ut1.style.display = "none";
        hot1.style.height = "200px"
        img1.src = "../img/hotelbilder/expand-arrow.png"
        text1.innerHTML = hotel_texts_def[0]
        img1.style.top = "80%"

    }
    
    
}

var ut2 = document.getElementById("gul_boks2");
var img2 = document.getElementById("img_ut2")
var text2 = document.getElementById('hot_text2')
var hot2 = document.getElementById('hotel_block2')
ut2.style.display = "none"

function utvidelse2() {
    if (ut2.style.display === "none") {
        ut2.style.display = "block";
        hot2.style.height = "700px"
        img2.style.top = "52%"
        img2.src = "../img/hotelbilder/arrow.png"
        ut1.style.display = "none"
        ut3.style.display = "none"
        ut4.style.display = "none"
        hot1.style.height = "200px"
        hot3.style.height = "200px"
        hot4.style.height = "200px"





    } else {
        ut2.style.display = "none";
        hot2.style.height = "200px"
        img2.style.top = "80%"
        img2.src = "../img/hotelbilder/expand-arrow.png"

    }
}



var ut3 = document.getElementById("gul_boks3");
var img3 = document.getElementById("img_ut3")
var text3 = document.getElementById('hot_text3')
var hot3 = document.getElementById('hotel_block3')
ut3.style.display = "none"

function utvidelse3() {
    if (ut3.style.display === "none") {
        ut3.style.display = "block";
        hot3.style.height = "700px"
        img3.style.top = "52%"
        img3.src = "../img/hotelbilder/arrow.png"

    } else {
        ut3.style.display = "none";
        hot3.style.height = "200px"
        img3.style.top = "80%"
        img3.src = "../img/hotelbilder/expand-arrow.png"
    }
}


var img4 = document.getElementById("img_ut4")
var text3 = document.getElementById('hot_text4')


var ut4 = document.getElementById("gul_boks4");
var img4 = document.getElementById("img_ut4")
var text4 = document.getElementById('hot_text4')
var hot4 = document.getElementById('hotel_block4')
ut4.style.display = "none"

function utvidelse4() {
    if (ut4.style.display === "none") {
        ut4.style.display = "block";
        hot4.style.height = "700px"
        img4.style.top = "52%"
        img4.src = "../img/hotelbilder/arrow.png"

    } else {
        ut4.style.display = "none";
        hot4.style.height = "200px"
        img4.style.top = "80%"
        img4.src = "../img/hotelbilder/expand-arrow.png"
    }
}


