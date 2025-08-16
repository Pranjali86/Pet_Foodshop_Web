'use strict';

/**
 * Add event on element(s)
 */
const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let el of elem) el.addEventListener(type, callback);
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Header & back-to-top button toggle on scroll
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);
