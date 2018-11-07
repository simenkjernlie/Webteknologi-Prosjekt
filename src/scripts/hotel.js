document.getElementById("utvidelse1").style.display = "none"
document.getElementById("utvidelse2").style.display = "none"
document.getElementById("utvidelse3").style.display = "none"
document.getElementById("utvidelse4").style.display = "none"

document.getElementById("linje1").style.display = "none"
document.getElementById("linje2").style.display = "none"
document.getElementById("linje3").style.display = "none"
document.getElementById("linje4").style.display = "none"






function utvidelse(utvidelseID, bilde_pil, linje){
    var utvidelse_block = document.getElementById(utvidelseID)
    let bilde_path = document.getElementById(bilde_pil)

        if (utvidelse_block.style.display == "none"){
        utvidelse_block.style.display = "block"
        bilde_path.src = "../img/arrow-up.svg";
        document.getElementById(linje).style.display = "block"
    }

    else {
        utvidelse_block.style.display = "none"
        bilde_path.src = "../img/arrow-down.svg"
        document.getElementById(linje).style.display = "none"
    }

}






function price(check_in_date, check_out_date, nr_rooms, nr_adults, price, price_pr_room, price_pr_person) {
    
    var price = document.getElementById(price)
    var check_in_date = document.getElementById(check_in_date).value
    var check_out_date = document.getElementById(check_out_date).value
    var nr_rooms = document.getElementById(nr_rooms).value
    var nr_adults = document.getElementById(nr_adults).value
    check_in_date = check_in_date.slice(5,7) + "/" + check_in_date.slice(8,10) + "/" + check_in_date.slice(0,4)
    check_out_date = check_out_date.slice(5,7) + "/" + check_out_date.slice(8,10) + "/" + check_out_date.slice(0,4)

    //console.log(nr_rooms, typeof(nr_rooms))
    check_in_date = parseDate(check_in_date)
    check_out_date = parseDate(check_out_date)
    days_diff = datediff(check_in_date, check_out_date)
    console.log(days_diff)
    var amount = (days_diff*nr_rooms*price_pr_room + days_diff*price_pr_person*nr_adults)
    if (days_diff > 0){
    price.innerHTML = "Book now for only " + amount + "€"
    } else {
        price.innerHTML = "Please fill in form for price estimation"
    }



}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

function form_validater(check_in_date, check_out_date){
    var check_in_date = document.getElementById(check_in_date)
    check_in_date = check_in_date.value
    var check_out_date = document.getElementById(check_out_date).value
    check_in_date = check_in_date.slice(5,7) + "/" + check_in_date.slice(8,10) + "/" + check_in_date.slice(0,4)
    check_out_date = check_out_date.slice(5,7) + "/" + check_out_date.slice(8,10) + "/" + check_out_date.slice(0,4)

    console.log("check_in_date, check_out_date")
    check_in_date = parseDate(check_in_date)
    check_out_date = parseDate(check_out_date)
    days_diff = datediff(check_in_date, check_out_date)

    if (days_diff<= 0){
        alert("Please select valid check in and check out days!")
        console.log("false")
        return false;
    } else {
        return true
    }
}



var adriana, barbo, marameda, bp;
function initMap() {
  adriana = { lat: 39.905319, lng: 8.596118 };
  barbo = { lat: 40.948178, lng: 9.565120 };
  marameda = { lat: 39.214894, lng: 9.116970 };
  bp = { lat: 39.222492, lng: 9.245832 };
  var mapAdriana = new google.maps.Map(document.getElementById("mapAdriana"), {
    zoom: 10,
    center: adriana
  });
  var mapBarbo = new google.maps.Map(document.getElementById("mapBarbo"), {
    zoom: 10,
    center: barbo
  });
  var mapMarameda = new google.maps.Map(document.getElementById("mapMarameda"), {
    zoom: 10,
    center: marameda
  });
  var mapBP = new google.maps.Map(document.getElementById("mapBP"), {
    zoom: 10,
    center: bp
  });
  var markerPizza = new google.maps.Marker({ position: adriana, map: mapAdriana });
  var markerSteak = new google.maps.Marker({ position: barbo, map: mapBarbo });
  var markerSeafood = new google.maps.Marker({ position: marameda, map: mapMarameda});
  var markerLobster = new google.maps.Marker({ position: bp, map: mapBP});
}
