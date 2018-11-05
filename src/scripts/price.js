let today = new Date();
let minutes = today.getMinutes();
let hours = today.getHours();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}
if(mm<10) {
    mm = '0'+mm
}
if(minutes < 10) {
    minutes = '0'+ minutes
}
if(hours<10) {
    hours = '0'+ hours
}
let today_date_string = yyyy + "-" + mm + "-" + dd;
let time_now_string = hours + ":" + minutes;


function make_price_elements(i, pris) {
  let img = document.createElement('img');
  let tall = document.createTextNode(pris);
  let space = document.createTextNode("\xa0");
  img.src = "../img/euro-vector.png";
  img.style.width = "6%";
  let price_class = document.getElementsByClassName('price')[i];
  price_class.innerHTML = "";
  price_class.appendChild(img);
  price_class.appendChild(space);
  price_class.appendChild(tall);
}

function null_ut() {
<<<<<<< HEAD
  for (i = 0; i < 3; i++) {
=======
  //The for loop was defined to run 4 iterations despite the fact that Biking only had 3 elements.
  //This was solved by reading the number of elements the exists
  for (let i = 0; i < document.getElementsByClassName('price').length; i++) {
>>>>>>> 741139e652ba0234f6d21dd53810e04101c49e3e
    make_price_elements(i, 0);
  }
}

function set_todays_date() {
  //The for loop was defined to run 4 iterations despite the fact that Biking only had 3 elements.
  //This was solved by reading the number of elements the exists
  for (let i = 0; i < document.getElementsByClassName("input_start").length; i++) {
    document.getElementsByClassName("input_start")[i].value = today_date_string;
    document.getElementsByClassName("input_end")[i].value = today_date_string;
    document.getElementsByClassName("input_start_time")[i].value = time_now_string;
    document.getElementsByClassName("input_end_time")[i].value = time_now_string;
  }
}

let wrong_date_alert = 0;
let wrong_date_flag = 0;

function calc_price(number, price_per_day) {
  let calculated_price = 0;
  let start_value = new Date(document.getElementsByClassName("input_start")[number].value);
  let end_value = new Date(document.getElementsByClassName("input_end")[number].value);
  calculated_price = (parseInt(end_value.getTime() - start_value.getTime())/(1000*60*60*24))*price_per_day;
  console.log(calculated_price);

  if (calculated_price < 0) {
    document.getElementsByClassName("input_start")[number].style.boxShadow = "2px 0px 10px 5px red";
    if ((wrong_date_alert % 10)===0) {
      alert("The 'Pick-Up date' is set after the 'End date' of the renting period. \nPlease refill the form.");
    }
    wrong_date_alert += 1;
    wrong_date_flag = 1;
  }
  else {
    wrong_date_flag = 0;
    null_ut();
    make_price_elements(number, calculated_price);
    document.getElementsByClassName("input_start")[number].style.boxShadow = "none"

    //Effekt på pristallet
    document.getElementsByClassName('price')[number].classList.toggle("price_zoom");
    setTimeout(function () {
    document.getElementsByClassName('price')[number].classList.toggle("price_zoom");
  }, 300);
  document.getElementsByClassName("input_start")[number].style.boxShadow = "2px 0px 10px 5px green";
  }
}


function verify_and_notify(i) {
  if (wrong_date_flag) {
    alert("Sorry, but you need to refill the form. Your date is not realistic.\nPick-Up date cannot be set after the End-of-trip date" )
  }
  else {
    alert("Thank you for using our webiste. \nWe will contact you as soon as we have a tailored offer for you. (1-2 working days)" )
  }
}
