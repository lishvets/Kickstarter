/* global Swiper */// Додаємо, щоб ESLint не скаржився на невідомий Swiper
// eslint-disable-next-line no-unused-vars
new Swiper(".features__swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:function(){var t=this.slides.length;document.querySelector(".swiper-pagination-total").textContent=t.toString().padStart(2,"0");var e=this.realIndex+1;document.querySelector(".swiper-pagination-current").textContent=e.toString().padStart(2,"0")},slideChange:function(){// Оновлюємо числову пагінацію
var t=this.realIndex+1;// Поточний слайд
document.querySelector(".swiper-pagination-current").textContent=t.toString().padStart(2,"0")}}});//# sourceMappingURL=index.4a6f021a.js.map

//# sourceMappingURL=index.4a6f021a.js.map
