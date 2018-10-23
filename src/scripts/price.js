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
  document.getElementsByClassName('price')[i].innerHTML = "";
  document.getElementsByClassName('price')[i].appendChild(img);
  document.getElementsByClassName('price')[i].appendChild(space);
  document.getElementsByClassName('price')[i].appendChild(tall);
}

function null_ut() {
  for (i = 0; i < 3; i++) {
    make_price_elements(i, 0);
  }
}

function set_todays_date() {
  for (i=0; i < 3; i++) {
    document.getElementsByClassName("input_start")[i].value = today_date_string;
    document.getElementsByClassName("input_end")[i].value = today_date_string;
    document.getElementsByClassName("input_start_time")[i].value = time_now_string;
    document.getElementsByClassName("input_end_time")[i].value = time_now_string;
  }
}

let price_per_day = [32000, 540, 350]

function calc_price(number) {
  let calculated_price = 0;
  let start_value = new Date(document.getElementsByClassName("input_start")[number].value);
  let end_value = new Date(document.getElementsByClassName("input_end")[number].value);
  calculated_price = (parseInt(end_value.getTime() - start_value.getTime())/(1000*60*60*24))*price_per_day[number];
  console.log(calculated_price);

  if (calculated_price < 0) {
    alert("The 'End Of Trip Date' is before the 'Pick-Up Date'. \nPlease rewrite the form, thank you.");
  }
  else {
    null_ut();
    make_price_elements(number, calculated_price);
  }
}
