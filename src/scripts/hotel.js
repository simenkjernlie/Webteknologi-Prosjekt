document.getElementById("gul_boks1").style.display = "none"
document.getElementById("gul_boks2").style.display = "none"
document.getElementById("gul_boks3").style.display = "none"
document.getElementById("gul_boks4").style.display = "none"






hotel_texts_def = ["Hotel Adriana is one of the best known hotels in the Cagliari area. It is known for its beautiful location by the beach, along with unbeatable service and chefs working around the clock to always offer freash mediterranean courses.", "sdad2", "afa3", "4"]
hotel_texts_exs = ["Hotel Adriana is one of the best known hotels in the Cagliari area. It is known for its beautiful location by the beach, along with unbeatable service and chefs working around the clock to always offer freash mediterranean courses. <br> <br> The hotel is located in the city center, but the beach is just a 5 minute walk away. Here you can play biljard or hang out in the pool area, while enjoing a feash Mojito from the bar.", "he2", "kl3", "sg4"]

console.log(window.innerWidth)





function utvidelse(ut_element, parent_element, side, arrow) {
    let element = document.getElementById(ut_element);
    let parent = document.getElementById(parent_element);
    let side_ex = document.getElementById(side);
    let arrow_ex = document.getElementById(arrow);
    let width_changer = parent.style.width

    let width = document.body.clientWidth   
    if (element.style.display === "none") {
        element.style.display = "block"
        parent.style.height = "700px"
        side_ex.style.height = '375px'
        arrow_ex.src = "../img/hotelbilder/arrow.png"
        console.log(parent.style.width)
        arrow_ex.style.top = '375px'
        //document.getElementById("bilder_slide").style.display = "none"
        if (window.innerWidth >= 1000){
            parent.style.height = "700px"

            console.log("over")}


   

    } else {        
            parent.style.height = "200px"
            element.style.display = "none";
            side_ex.style.height = '170px'
            arrow_ex.src = "../img/hotelbilder/expand-arrow.png"
            arrow_ex.style.top = '80%'
            //document.getElementById("bilder_slide").style.display = "block"

            if (window.innerWidth < 1000){
                parent.style.height = "400px"

           // console.log(document.getElementById(body).style.width)

        
    }

}
}

var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//function nr_days(year, month, day){
//    var nr_days = (year-1)*365 + (month-1)*days_in_month[]

//}


function price(check_in_date, check_out_date, nr_rooms, nr_adults, nr_children){


    var check_in_date = document.getElementById("check_in_date").value
    var check_out_date = document.getElementById("check_out_date").value
    var nr_rooms = nr_rooms.value
    var nr_adults = nr_adults.value
    var nr_children = nr_children.value
    console.log(check_in_date, check_out_date, nr_rooms, nr_adults, nr_children)

    var cid_year1 = check_in_date.slice(0,4)
    var cid_month1 = check_in_date.slice(5,7)
    var cid_day1 = check_in_date.slice(8,10)
    console.log(cid_year1, cid_month1, cid_day1)


}
