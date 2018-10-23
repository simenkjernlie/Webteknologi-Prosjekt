


images = ["../img/hotelbilder/hotel1-1.jpg", "../img/hotelbilder/hotel1-2.jpg", "../img/hotelbilder/hotel1-3.jpeg"]



function changeImg(){
    document.getElementById('bilder_slide').src = "../img/hotelbilder/hotel1-1.jpg"
    console.log(document.getElementById('bilder_slide').src)
    console.log("heiehi")

}







hotel_texts_def = ["Hotel Adriana is one of the best known hotels in the Cagliari area. It is known for its beautiful location by the beach, along with unbeatable service and chefs working around the clock to always offer freash mediterranean courses.", "sdad2", "afa3", "4"]
hotel_texts_exs = ["Hotel Adriana is one of the best known hotels in the Cagliari area. It is known for its beautiful location by the beach, along with unbeatable service and chefs working around the clock to always offer freash mediterranean courses. <br> <br> The hotel is located in the city center, but the beach is just a 5 minute walk away. Here you can play biljard or hang out in the pool area, while enjoing a feash Mojito from the bar.", "he2", "kl3", "sg4"]



var y = document.getElementById("utvidelse1");
var x = document.getElementById("utvidelse2");
var z = document.getElementById("utvidelse3");
var w = document.getElementById("utvidelse4");


y.style.display = "none"
var img1 = document.getElementById("img_ut1")
var text1 = document.getElementById('hot_text1')


function utvidelse1() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        w.style.display = "none";
        img1.src = "../img/hotelbilder/arrow.png"
        img2.src = "../img/hotelbilder/expand-arrow.png"
        img3.src = "../img/hotelbilder/expand-arrow.png"
        img4.src = "../img/hotelbilder/expand-arrow.png"
        text1.innerHTML = hotel_texts_exs[0]
    } else {
        y.style.display = "none";
        img1.src = "../img/hotelbilder/expand-arrow.png"
        text1.innerHTML = hotel_texts_def[0]
    }
    
    
}


x.style.display = "none"
var img2 = document.getElementById("img_ut2")
var text3 = document.getElementById('hot_text2')

function utvidelse2() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        w.style.display = "none"
        img2.src = "../img/hotelbilder/arrow.png"
        img1.src = "../img/hotelbilder/expand-arrow.png"
        img3.src = "../img/hotelbilder/expand-arrow.png"
        img4.src = "../img/hotelbilder/expand-arrow.png"
    } else {
        x.style.display = "none";
        img2.src = "../img/hotelbilder/expand-arrow.png"

    }
}


z.style.display = "none"
var img3 = document.getElementById("img_ut3")
var text3 = document.getElementById('hot_text3')

function utvidelse3() {
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        w.style.display = "none"
        img3.src = "../img/hotelbilder/arrow.png"
        img1.src = "../img/hotelbilder/expand-arrow.png"
        img2.src = "../img/hotelbilder/expand-arrow.png"
        img4.src = "../img/hotelbilder/expand-arrow.png"
        text3.innerHTML = hotel_texts_exs[2]

    } else {
        z.style.display = "none";
        img3.src = "../img/hotelbilder/expand-arrow.png"
        text3.innerHTML = hotel_texts_def[2]
    }
}


w.style.display = "none"
var img4 = document.getElementById("img_ut4")
var text3 = document.getElementById('hot_text4')

function utvidelse4() {
    if (w.style.display === "none") {
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        img4.src = "../img/hotelbilder/arrow.png"
        img1.src = "../img/hotelbilder/expand-arrow.png"
        img2.src = "../img/hotelbilder/expand-arrow.png"
        img3.src = "../img/hotelbilder/expand-arrow.png"
    } else {
        w.style.display = "none";
        img4.src = "../img/hotelbilder/expand-arrow.png"

    }
}



