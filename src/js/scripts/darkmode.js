const light_dark_elm = document.getElementById("light-dark-mode");

if (!localStorage.getItem('dark-mode')) { 
     localStorage.setItem('dark-mode', 0);
}

let darkmode_val = localStorage.getItem('dark-mode');
darkmode_val = parseInt(darkmode_val);

if (!darkmode_val) {
     document.body.classList.add('lightmode-bg');
     light_dark_elm.classList.add('fa-sun');
} else {
     document.documentElement.classList.add('dark');
     document.body.classList.add('darkmode-bg');
     light_dark_elm.classList.add('fa-moon-stars');
}

function toggle(value) {
     value = parseInt(value);
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
     let darkmode = localStorage.getItem('dark-mode');
     darkmode = parseInt(darkmode);

     if (!darkmode) {
          toggle(1);
          localStorage.setItem('dark-mode', 1);
     } else {
          toggle(0);
          localStorage.setItem('dark-mode', 0);
     }
});