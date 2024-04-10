document.addEventListener('DOMContentLoaded', function() {

    // document.getElementById("contact").addEventListener("submit", function(event) {
  //     event.preventDefault(); 
    
  //     var formData = new formData(this);
    
  //     localStorage.setItem("formData", JSON.stringify(formData));
    
  //     alert("Form submitted!");
    
  //   });
  
  
  const toggleSwitch = document.querySelector('#darkModeToggle');
  const body = document.querySelector('body');
  
  //array of selectors for elements you want to toggle
  const elementsToToggle = [
    'my-resume h1',
    'about-section h1',
    '.contact-me label',
    '.contact-me h1',
    '.About'
  ];
  
  toggleSwitch.addEventListener('change', switchTheme);
  
  function switchTheme() {
    //line for debugging
    console.log("Switching theme..."); 
  
      if (toggleSwitch.checked) {
          //dark mode
          body.classList.add('dark-mode');
          elementsToToggle.forEach(selector => {
              document.querySelector(selector).style.color = '#90b9ff';
          });
      } else {
          //light mode
          body.classList.remove('dark-mode');
          elementsToToggle.forEach(selector => {
              document.querySelector(selector).style.color = '#223952';
          });
      }
  }
  
  });
  