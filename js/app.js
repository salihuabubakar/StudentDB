//Quick note

/*  Question ? mark after every 'addEventListener' is placed
    there to check if the page has loaded or not 
    for it to execute the function. 
*/


// Login 
let matricNo = document.getElementById("matricNo");
let password = document.getElementById("password");
let errorMsg = document.getElementById("error");
const loginForm = document.getElementById("loginForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if(matricNo.value === "") {
    errorMsg.innerHTML = "Matric Number is required";
  } else if(password.value === "") {
    errorMsg.innerHTML = "Password is required";
  } else if(password.value.length < 6) {
    errorMsg.innerHTML = "Password must be atleast 6 characters long";
  }else {
    errorMsg.innerHTML = "processing...";
    window.location.replace("pages/dashboard.html")
    console.log("successfully logged in");
  }
})

let adminId = document.getElementById("adminId");
const adminLoginForm = document.getElementById("adminLoginForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminId.value === "") {
    errorMsg.innerHTML = "Admin Id is required";
  } else if (password.value === "") {
    errorMsg.innerHTML = "Password is required";
  } else if(password.value.length < 6) {
    errorMsg.innerHTML = "Password must be atleast 6 characters long";
  } else {
    errorMsg.innerHTML = "processing...";
    window.location.replace("pages/admin-dashboard.html");
    console.log("successfully logged in");
  }
});

// Redirect to admin login page

// const addminLoginPageBtn = document.getElementById("addminLoginPageBtn").addEventListener("dblclick", () => {
//   window.location.href="admin-login.html";
// })


// Fuction to collect file uploaded directly from the input
const getFileUploadFromInput = function (event) {
  let image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
}

/* Fuction to hide the 'Preview File' text 
from the image preview box And displays the uploaded 
file in the preview box */
const hideAndDisplayFile = function () {
  document.getElementById("preview").style.display = "none";
  document.getElementById("output").style.visibility = "visible";
}


// Indigen File upload and preview
const loadIndigeneLetterFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// Birth cert File upload and preview
const loadBirthCertFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// Attestation File upload and preview
const loadAttestationFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// Passport File upload and preview
const loadPassportFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// Jamb admission File upload and preview
const loadJambAdmLetterFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// School admission File upload and preview
const loadSchoolAdmLetterFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// Olevel File upload and preview
const loadOlevelFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

// Course reg File upload and preview
const loadCourseRegFile = function (event) {
  getFileUploadFromInput(event);
  hideAndDisplayFile();
};

/*Script to open and close the rejection comment modal */

const modalContainer = document.getElementById("modalContainer");

const openModal = document.getElementById("open")?.addEventListener("click", () => {
  modalContainer.classList.add("show");
});
const closeModal = document.getElementById("close")?.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

const body = document.getElementsById("body")?.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
