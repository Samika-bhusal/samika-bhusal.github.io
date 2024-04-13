document.addEventListener('DOMContentLoaded', function() {


  
  
  const toggleSwitch = document.querySelector('#darkModeToggle');
  const body = document.querySelector('body');
  

  const elementsToToggle = [
    'my-resume h1',
    'about-section h1',
    '.contact-me label',
    '.contact-me h1',
    '.About'
  ];
  
  toggleSwitch.addEventListener('change', switchTheme);
  
  function switchTheme() {
   
    console.log("Switching theme..."); 
  
      if (toggleSwitch.checked) {
          
          body.classList.add('dark-mode');
          elementsToToggle.forEach(selector => {
              document.querySelector(selector).style.color = '#90b9ff';
          });
      } else {
          
          body.classList.remove('dark-mode');
          elementsToToggle.forEach(selector => {
              document.querySelector(selector).style.color = '#223952';
          });
      }
  }
  
  });
  