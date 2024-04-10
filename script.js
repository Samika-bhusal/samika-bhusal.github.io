document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var formData = new formData(this);
  
    localStorage.setItem("formData", JSON.stringify(formData));
  
    alert("Form submitted!");
  
  });