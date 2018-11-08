// initiere utvidelsesblokkene som "none" slik at de ikke vises

document.getElementById("utvidelse1").style.display = "none"
document.getElementById("utvidelse2").style.display = "none"
document.getElementById("utvidelse3").style.display = "none"
document.getElementById("utvidelse4").style.display = "none"

document.getElementById("linje1").style.display = "none"
document.getElementById("linje2").style.display = "none"
document.getElementById("linje3").style.display = "none"
document.getElementById("linje4").style.display = "none"





// funksjon for utvidelse. Tar inn tilhørende utvidelsesblokk-ID (for å vite hvilken blokk som skal utvides), ID for utvidelsespilen (slik
// at den pathen kan endres slik at den peker opp når blokken er utvided), og ID for linjeutvidelse som også utvides etter blokken
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

// Funksjon for å kalkulere pris for hotellbooking. Tar in ID'er for å finne verdiene som er fylt inn av bruker (check_in_date, check_out_date, nr_rooms, nr_adults),
// id til element for å vise kalkulert pris (price), og to induviduelle prisfaktorer som avhenger av hotellet (price_pr_room, price_pr_person).
function price(check_in_date, check_out_date, nr_rooms, nr_adults, price, price_pr_room, price_pr_person) {
    var price = document.getElementById(price)
    var check_in_date = document.getElementById(check_in_date).value
    var check_out_date = document.getElementById(check_out_date).value
    var nr_rooms = document.getElementById(nr_rooms).value
    var nr_adults = document.getElementById(nr_adults).value
    check_in_date = check_in_date.slice(5,7) + "/" + check_in_date.slice(8,10) + "/" + check_in_date.slice(0,4)         // transformere dato til riktig format
    check_out_date = check_out_date.slice(5,7) + "/" + check_out_date.slice(8,10) + "/" + check_out_date.slice(0,4)
    check_in_date = parseDate(check_in_date)
    check_out_date = parseDate(check_out_date)
    days_diff = datediff(check_in_date, check_out_date)
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

function form_validater(check_in_date, check_out_date, hot_name){
    var check_in_date = document.getElementById(check_in_date)
    check_in_date = check_in_date.value
    var check_out_date = document.getElementById(check_out_date).value
    check_in_date = check_in_date.slice(5,7) + "/" + check_in_date.slice(8,10) + "/" + check_in_date.slice(0,4)
    check_out_date = check_out_date.slice(5,7) + "/" + check_out_date.slice(8,10) + "/" + check_out_date.slice(0,4)

    var today = new Date();
    var day = today.getDate()
    var month = today.getMonth() + 1
    var  year = today.getFullYear()
    var current_date = month + "/" + day + "/" + year
    current_date = parseDate(current_date)
    var past_diff = datediff(current_date, check_in_date)

    check_in_date = parseDate(check_in_date)
    check_out_date = parseDate(check_out_date)

    var days_diff = datediff(check_in_date, check_out_date)
    if (past_diff < 0){
        alert("Please select valid check in and check out days! \n Select dates in the future")
        return false        
    }
    else if (days_diff<= 0){
        alert("Please select valid check in and check out days! \n Check in date before check out day")
        return false;
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
