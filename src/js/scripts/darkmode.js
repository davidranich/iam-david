const light_dark_elm = document.getElementById("light-dark-mode");

if (!localStorage.getItem('dark-mode')) { 
     localStorage.setItem('dark-mode', '0');
}

const darkmode_val = localStorage.getItem('dark-mode');

switch (darkmode_val) {
     case '1':
          light_dark_elm.classList.remove('fa-moon-stars');
          light_dark_elm.classList.add('fa-sun');
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('darkmode-bg');
          document.body.classList.add('lightmode-bg');
          
          break;
     case '0':
          light_dark_elm.classList.add('fa-moon-stars');
          light_dark_elm.classList.remove('fa-sun');
          document.documentElement.classList.add('dark');
          document.body.classList.add('darkmode-bg');
          document.body.classList.remove('lightmode-bg');
          break;
}

const DarkModeToggle = () => {
     const darkmode = localStorage.getItem('dark-mode');

     switch (darkmode) {
          case '0':
               light_dark_elm.classList.add('fa-moon-stars');
               light_dark_elm.classList.remove('fa-sun');
               localStorage.setItem('dark-mode', '1');
               document.documentElement.classList.add('dark');
               document.body.classList.add('darkmode-bg');
               document.body.classList.remove('lightmode-bg');
               break;
          case '1':
               light_dark_elm.classList.remove('fa-moon-stars');
               light_dark_elm.classList.add('fa-sun');
               localStorage.setItem('dark-mode', '0');
               document.documentElement.classList.remove('dark');
               document.body.classList.remove('darkmode-bg');
               document.body.classList.add('lightmode-bg');
               break;
     }
};

light_dark_elm.addEventListener("click", DarkModeToggle);