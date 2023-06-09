import checkIfAdmin from "../utils/checkIfAdmin.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextId from "../utils/getNextId.js";

let nextId;
let isAdmin;
let isConnected;
let showNewPopup;
let editSaveBtn = document.getElementById("editFlightPopupSaveBtn");
let favoritePageBtn = document.getElementById("favorite-page-btn");

let navAddNewFlightLink;
let addNewFlightSaveBtn = document.getElementById("addFlightPopupsaveBtn ");
let addNewFlight;

const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");

const initializeNavbar = (showNewPopupFromHomePage, addFlightFromHomePage) => {
  nextId = getNextId();
  isAdmin = checkIfAdmin();
  isConnected = checkIfConnected();
  if (isConnected) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
    favoritePageBtn.classList.remove("d-none");
  }
  showNewPopup = showNewPopupFromHomePage;
  addNewFlight = addFlightFromHomePage;

  navAddNewFlightLink = document.getElementById("nav-add-new-flight-link");
  if (!isAdmin) {
    navAddNewFlightLink.classList.add("d-none");
  }
  navAddNewFlightLink.addEventListener("click", () => {
    showNewPopup();
    // addNewFlightSaveBtn.classList.remove("d-none");
  });
};

export default initializeNavbar;
