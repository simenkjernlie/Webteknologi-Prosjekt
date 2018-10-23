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
let price_per_month = [900000,15000 ,9000]

function calc_price(number) {
  let calculated_price = 0;
  let start_value = document.getElementsByClassName("input_start")[number].value.split("-");
  let end_value = document.getElementsByClassName("input_end")[number].value.split("-");
  let dif_days = end_value[2] - start_value[2];
  let dif_months = end_value[1] - start_value[1];
  let dif_years = end_value[0] - start_value[0]
  if (dif_years < 0) {
    alert("The 'End Of Trip Date' is before the 'Pick-Up Date'. \nPlease rewrite the form, thank you.");
  }
  else if (dif_months < 0 && dif_years === 0) {
    alert("The 'End Of Trip Date' is before the 'Pick-Up Date'. \nPlease rewrite the form, thank you.");
}
  else if (dif_days < 0 && dif_months === 0 && dif_years === 0) {
    alert("The 'End Of Trip Date' is before the 'Pick-Up Date'. \nPlease rewrite the form, thank you.");
}
  else {
  calculated_price = dif_days*price_per_day[number] + dif_months*price_per_month[number];
  null_ut();
  make_price_elements(number, calculated_price);
}

}
