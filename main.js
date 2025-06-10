function getafisha() {
  document.getElementById("afishaDropdown").classList.toggle("show");
}

function getactual() {
  document.getElementById("actualDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, div, buttons, container, links, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  container = document.querySelector(".button-container")
  buttons = container.getElementsByTagName("button");
  div = document.getElementById("myDropdown");
  links = div.getElementsByTagName("a");

  // Скрываем все кнопки и ссылки в начале
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none"; 
  }
  for (i = 0; i < links.length; i++) {
    links[i].style.display = 'none';
  }

  for (i = 0; i < buttons.length; i++) {
    txtValue = buttons[i].textContent; 
    if (txtValue.toUpperCase().includes(filter)) {
      buttons[i].style.display = "";
    }
  }
  for (i = 0; i < links.length; i++) {
    txtValue = links[i].textContent; 
    if (txtValue.toUpperCase().includes(filter)) {
      links[i].style.display = "";
    }
  }
}

function logsignin() {
  document.getElementById("loginDropdown").classList.toggle("show");
}

function logfunc() {
  var input, filter, div, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "none";
      }
  }
}

function togglePopup() {
  const overlay = document.getElementById('popupOverlayLogin');
  overlay.classList.toggle('show');
}

function toggle2Popup() {
  const overlay = document.getElementById('popupOverlayReg');
  overlay.classList.toggle('show');
}

function toggle3Popup() {
  const overlay = document.getElementById("popupOverlayCheburashka");
  overlay.classList.toggle("show");
}

function toggle4Popup() {
  const overlay = document.getElementById("popupOverlayBasta");
  overlay.classList.toggle("show");
}

function toggle5Popup() {
  const overlay = document.getElementById("popupOverlayBuratino");
  overlay.classList.toggle("show");
}

function theatrePopup() {
  const overlay = document.getElementById('popupOverlayTheatre');
  overlay.classList.toggle('show');
}

function cinemasPopup() {
  const overlay = document.getElementById('popupOverlayCinemas');
  overlay.classList.toggle('show');
}

function masterclassesPopup() {
  const overlay = document.getElementById('popupOverlayMasterClasses');
  overlay.classList.toggle('show');
}

function exhibitionsPopup() {
  const overlay = document.getElementById('popupOverlayExhibitions');
  overlay.classList.toggle('show');
}

function concertsPopup() {
  const overlay = document.getElementById('popupOverlayConcerts');
  overlay.classList.toggle('show');
}

// АКТУАЛЬНОЕ

function cheburashkaPopup() {
  const overlay = document.getElementById('popupOverlayCheburashka');
  overlay.classList.toggle('show');
}

function bastaPopup() {
  const overlay = document.getElementById('popupOverlayBasta');
  overlay.classList.toggle('show');
}

function buratinoPopup() {
  const overlay = document.getElementById('popupOverlayBuratino');
  overlay.classList.toggle('show');
}

function newEventPopup() {
  document.getElementById("popupOverlayNewEvent").classList.add("show");
}

function toggle6Popup() {
  const overlay = document.getElementById('popupOverlayNewEvent');
  overlay.classList.toggle('show');
}
// закрываев вкладки по пустому пространству
