const TICKET_COST = 800;

const sessionDate = document.querySelectorAll(".session-date-item");
const schemeSvg = document.getElementById("scheme-svg");
const seatsSvg = schemeSvg.querySelectorAll("g[id^=seats]");
const totalPriceTag = document.querySelector(".price-total");

const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

sessionDate.forEach((item) => {
  item.addEventListener("click", (e) => {
    if(!e.target.classList.contains("selected")){
      for (let i = 0; i < sessionDate.length; i++) {
        sessionDate[i].classList.remove("selected");
      }
      e.target.classList.add("selected");
    }
  });
});

seatsSvg.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.classList.contains("booked")) {
      e.target.classList.toggle("active");

      let totalSeats = schemeSvg.querySelectorAll(".active").length;
      totalPriceTag.textContent = totalSeats * TICKET_COST;
    }
  });
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
