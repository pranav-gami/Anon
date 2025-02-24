'use strict';


// // accordion variables
// const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
// const accordion = document.querySelectorAll('[data-accordion]');

// for (let i = 0; i < accordionBtn.length; i++) {

//   accordionBtn[i].addEventListener('click', function () {

//     const clickedBtn = this.nextElementSibling.classList.contains('active');

//     for (let i = 0; i < accordion.length; i++) {

//       if (clickedBtn) break;

//       if (accordion[i].classList.contains('active')) {

//         accordion[i].classList.remove('active');
//         accordionBtn[i].classList.remove('active');

//       }

//     }

//     this.nextElementSibling.classList.toggle('active');
//     this.classList.toggle('active');

//   });

// }

// LOADS JS AFTER HTML EXECUTION GETS COMPLETED.

document.addEventListener("DOMContentLoaded", function () {

    // MODAL-BOX

    const modalBox = document.querySelector(".popup");
    const modalCloseBtn = document.querySelector(".modal_close-btn");
    const modalOverlay = document.querySelector(".popup_overlay")

    const closeModal = () => {
        console.log("Modal closed.")
        modalBox.classList.add("closed");
    }

    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    // NOTIFICATION-BOX

    const notificationBox = document.querySelector(".notification_box");
    const notCloseBtn = document.querySelector(".not_close-btn");

    notCloseBtn.addEventListener("click", () => {
        console.log("Notification-Box is Closed.")
        notificationBox.classList.add("closed");
    });


    // MOBILE NAVIGATION  (MOBILE MENU AND SIDE MENU)

    const mobileMenuBtn = document.querySelector('[mobile-menu-open]');
    const mobileMenu = document.querySelector('[mobile-menu]');
    const mobileMenuCloseBtn = document.querySelector('.mob_menucls-btn');
    const overlay = document.querySelector('.overlay');

    mobileMenuBtn.addEventListener("click", function () {
        console.log("Mobile Menu Opened.");
        mobileMenu.classList.add("active");
        overlay.classList.add("active");
    })

    const closeMenu = () => {
        console.log("Mobile Menu closed.");
        overlay.classList.remove("active");
        mobileMenu.classList.remove("active");
    }

    mobileMenuCloseBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // CATEGORY MENU
    const categoryMenubtn = document.querySelector('[category-menu-open]');
    const categoryMenu = document.querySelector('[category-menu]');
    const mobileCatCloseBtn = document.querySelector('.sidebar__category-close');

    categoryMenubtn.addEventListener("click", function () {
        console.log("cat Menu Opened.");
        categoryMenu.classList.add("active");
        overlay.classList.add("active");
    })

    const closeCatMenu = () => {
        console.log("Cat Menu closed.");
        overlay.classList.remove("active");
        categoryMenu.classList.remove("active");
    }
    mobileCatCloseBtn.addEventListener("click", closeCatMenu);
    overlay.addEventListener("click", closeCatMenu);


    // SIDEBAR CATEGORY (ON CLICKING PARTICULAR BUTTONS LISI SHOULD BE VISIBLE)

    const dataAcoordianBtn = document.querySelectorAll("[data-accordian-btn]");
    const dataAcoordianMenu = document.querySelectorAll("[data-accordian-menu]");
    const addIcon = document.querySelectorAll(".add-icon");
    const removeIcon = document.querySelectorAll(".remove-icon");

    for (let i = 0; i < dataAcoordianBtn.length; i++) {
        dataAcoordianBtn[i].addEventListener("click", function () {
            // Close all accordions first
            for (let j = 0; j < dataAcoordianMenu.length; j++) {
                if (j !== i) {  // Exclude the clicked button
                    dataAcoordianMenu[j].classList.remove("active");
                    addIcon[j].style.display = "block";
                    removeIcon[j].style.display = "none";
                }
            }

            // Toggle only the clicked one
            let isActive = dataAcoordianMenu[i].classList.toggle("active");

            if (isActive) {
                removeIcon[i].style.display = "block";
                addIcon[i].style.display = "none";
            } else {
                removeIcon[i].style.display = "none";
                addIcon[i].style.display = "block";
            }
        });
    }
})
