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
        bilde_path.src = "../img/arrow.png";
        document.getElementById(linje).style.display = "block"
    }

    else {
        utvidelse_block.style.display = "none"
        bilde_path.src = "../img/expand-arrow.png";
        document.getElementById(linje).style.display = "none"
    }

}




var days_in_month = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]

function nr_days(year, month, day){
    console.log("aad")

}


function price(check_in_date, check_out_date, nr_rooms, nr_adults, price) {

    var price = document.getElementById(price)
    var check_in_date = document.getElementById(check_in_date).value
    var check_out_date = document.getElementById(check_out_date).value
    var nr_rooms = document.getElementById(nr_rooms).value
    var nr_adults = document.getElementById(nr_adults).value
    check_in_date = check_in_date.slice(5,7) + "/" + check_in_date.slice(8,10) + "/" + check_in_date.slice(0,4)
    check_out_date = check_out_date.slice(5,7) + "/" + check_out_date.slice(8,10) + "/" + check_out_date.slice(0,4)

    console.log(nr_rooms, typeof(nr_rooms))
    check_in_date = parseDate(check_in_date)
    check_out_date = parseDate(check_out_date)
    days_diff = datediff(check_in_date, check_out_date)
    var amount = (days_diff*nr_rooms + days_diff*0.6*nr_adults)*10
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

