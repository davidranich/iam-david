// light/dark element above copyright
const light_dark_elm = document.getElementById("light-dark-mode");

// if local storage item doesn't exist, let's create it
if (!localStorage.getItem('dark-mode')) { 
     localStorage.setItem('dark-mode', 0);
}

// grab current local storage item value
let darkmode_val = parseInt(localStorage.getItem('dark-mode'));

// if dark-mode is not enabled (0), then deliver light mode; else, deliver dark mode
if (!darkmode_val) {
     document.body.classList.add('lightmode-bg');
     light_dark_elm.classList.add('fa-sun');
} else {
     document.documentElement.classList.add('dark');
     document.body.classList.add('darkmode-bg');
     light_dark_elm.classList.add('fa-moon-stars');
}

function toggle(value) {
     // convert value to an integer
     value = parseInt(value);

     // if dark mode is enabled currently, disable it; else enable dark mode
     if (!value) {
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('darkmode-bg');
          document.body.classList.add('lightmode-bg');
     
          light_dark_elm.classList.remove('fa-moon-stars');
          light_dark_elm.classList.add('fa-sun');
     } else {
          document.documentElement.classList.add('dark');
          document.body.classList.add('darkmode-bg');
          document.body.classList.remove('lightmode-bg');
     
          light_dark_elm.classList.add('fa-moon-stars');
          light_dark_elm.classList.remove('fa-sun');
     }
}

light_dark_elm.addEventListener("click", () => {
     let darkmode = parseInt(localStorage.getItem('dark-mode'));

     if (!darkmode) {
          toggle(1);
          localStorage.setItem('dark-mode', 1);
     } else {
          toggle(0);
          localStorage.setItem('dark-mode', 0);
     }
});