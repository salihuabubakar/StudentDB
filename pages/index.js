// Indigen File upload and preview
const loadFile = function (event) {
  let image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);

  document.getElementById("preview").style.display = "none";
  document.getElementById("output").style.visibility = "visible";
};
