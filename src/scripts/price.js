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

function calc_price(number) {
  let start = document.getElementsByClassName("input_start")[number].value;
  let end = document.getElementsByClassName("input_end")[number].value;
  let x = document.createTextNode(start.split("-"));
  null_ut();
  make_price_elements(number, 100.00);
}
