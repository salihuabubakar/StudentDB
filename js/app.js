// Login 
let matricNo = document.getElementById("matricNo");
let password = document.getElementById("password");
let errorMsg = document.getElementById("error");
const loginForm = document.getElementById("loginForm").addEventListener("submit", (event) => {
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

// Redirect to admin login page
// const addminLoginPageBtn = document.getElementById("addminLoginPageBtn").addEventListener("dblclick", () => {
//   window.location.href="admin-login.html";
// })
