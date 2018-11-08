//Under blir klokken og datoen lagret i from av strenger som senere kan fylles inn i skjemaet. 
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

//Her lages det et priselement som består av Eurotegnet og selve prisen.
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

//Her nuller funksjonene ut alle pristallene
function null_ut() {
  for (let i = 0; i < document.getElementsByClassName('price').length; i++) {
    make_price_elements(i, 0);
    document.getElementsByClassName("input_start")[i].style.boxShadow = "0px 0px 0px 0px";
  }
}

//Denne funksjonen setter inn dagens dato og klokkeslett inn i alle skjemaene.
function set_todays_date() {
  for (let i = 0; i < document.getElementsByClassName("input_start").length; i++) {
    document.getElementsByClassName("input_start")[i].value = today_date_string;
    document.getElementsByClassName("input_end")[i].value = today_date_string;
    document.getElementsByClassName("input_start_time")[i].value = time_now_string;
    document.getElementsByClassName("input_end_time")[i].value = time_now_string;
  }
}

let wrong_date_alert = 0;
let wrong_date_flag = 0;

/*Dette er funksjonen som utfører kalkuleringen av prisen og setter opp feilmeldinger dersom feil dato er satt inn før submit knappen er trykket inn.
Funksjonen har også flere kall til funksjonen som nuller ut og den som skaper visuelle tilbakemeldinger i form av farge rundt skjemaet.
*/
function calc_price(number, price_per_day) {
  let calculated_price = 0;
  let start_value = new Date(document.getElementsByClassName("input_start")[number].value);
  let end_value = new Date(document.getElementsByClassName("input_end")[number].value);
  calculated_price = (parseInt(end_value.getTime() - start_value.getTime())/(1000*60*60*24))*price_per_day;
  let diff_date_today = parseInt(start_value.getTime() - today.getTime());

//Dersom prisen blir mindre enn 0, altså datoen må være fylt ut feil. (Pick up date er satt etter End date)
  if (calculated_price < 0) {
    document.getElementsByClassName("input_start")[number].style.boxShadow = "2px 0px 10px 5px red";
    if ((wrong_date_alert % 10)===0) {
      alert("The 'Pick-Up date' is set after the 'End date' of the renting period. \nPlease refill the form.");
    }
    wrong_date_alert += 1;
    wrong_date_flag = 1;
  }

  //Sjekker her om datoen er satt før dagens dato og gir en eventuell feilmelding.
  else if (diff_date_today <= -100000000) {
    document.getElementsByClassName("input_start")[number].style.boxShadow = "2px 0px 10px 5px red";
    if ((wrong_date_alert % 10)===0) {
      alert("The 'Pick-Up date' cannot be set in the past. \nPlease refill the form.");
    }
    wrong_date_alert += 1;
    wrong_date_flag = 1;
  }

  //Dersom ingen av feilene over ble oppdaget så vil fargen bli oppdatert til grønn, andre priser nulles ut, og ny pris satt der brukeren skriver.
  else {
    wrong_date_flag = 0;
    null_ut();
    make_price_elements(number, calculated_price);

    //Effekt på pristallet
    document.getElementsByClassName('price')[number].classList.toggle("price_zoom");
    setTimeout(function () {
    document.getElementsByClassName('price')[number].classList.toggle("price_zoom");
  }, 300);
  document.getElementsByClassName("input_start")[number].style.boxShadow = "2px 0px 10px 5px green";
  }
}

/* Denne funksjonen har i oppgave å sjekke om datoen fylt ut av brukeren ikke har noen feil. Dersom feil blir oppdaget så vil en feilmelding
varsle brukeren om feilen. Ellers vil man få en melding om bestilt båt/sykkel*/
function verify_and_notify() {
  if (wrong_date_flag) {
    alert("Sorry, but you need to refill the form. Your date is not realistic.\nPick-Up date cannot be set after the End-of-trip date" )
  }
  else {
    alert("Thank you for using our webiste. \nWe will contact you as soon as we have a tailored offer for you. (1-2 working days)" )
  }
}
