// light/dark element above copyright
const light_dark_elm = document.getElementById("light-dark-mode");


// if local storage item doesn't exist, let's create it
if (!localStorage.getItem('dark-mode')) { 
     localStorage.setItem('dark-mode', 0);
}

// grab current local storage item value
let darkmode_val = parseInt(localStorage.getItem('dark-mode'));

// if 'dark-mode' is not enabled (0), then deliver light mode; else, deliver dark mode
setColorScheme(darkmode_val);

function resetClasses() {
     // reset bg classes
     document.body.classList.remove('lightmode-bg');
     document.documentElement.classList.remove('dark');
     document.body.classList.remove('darkmode-bg');

     // reset light/dark element icon
     light_dark_elm.classList.remove('fa-sun');
     light_dark_elm.classList.remove('fa-moon-stars');
}

function setColorScheme(value) {
     // reset light/dark element icon
     resetClasses();

     // convert value to an integer
     value = parseInt(value);

     if (!value) { // light mode
          document.body.classList.add('lightmode-bg');
          light_dark_elm.classList.add('fa-moon-stars');
     } else { // dark mode
          document.documentElement.classList.add('dark');
          document.body.classList.add('darkmode-bg');
          light_dark_elm.classList.add('fa-sun');
     }
}

light_dark_elm.addEventListener("click", () => {
     let darkmode = parseInt(localStorage.getItem('dark-mode'));

     if (!darkmode) { // enable dark mode
          setColorScheme(1);
          localStorage.setItem('dark-mode', 1);
     } else { // disable dark mode (enable light mode)
          setColorScheme(0);
          localStorage.setItem('dark-mode', 0);
     }
});