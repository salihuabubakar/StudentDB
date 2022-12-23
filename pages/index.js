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


let adminId = document.getElementById("adminId");
let password = document.getElementById("password");
let errorMsg = document.getElementById("error");
const loginForm = document.getElementById("adminLoginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminId.value === "") {
    errorMsg.innerHTML = "Admin Id is required";
  } else if (password.value === "") {
    errorMsg.innerHTML = "Password is required";
  } else {
    errorMsg.innerHTML = "processing...";
    window.location.replace("pages/admin-dashboard.html");
    console.log("successfully logged in");
  }
});