console.log("🎶 It's mine, it's mine, it's mine. Whose world is this? The world is yours, the world is yours. 🎶 — Nas");

// =======================
// Age & Copyright Year
// =======================
const date = new Date();
const year = date.getFullYear();
const birth_year = "1993";

let my_age = document.getElementById("my-age");
let the_year = document.getElementById("copyright-year");

my_age.innerHTML = year - birth_year;
the_year.innerHTML = year;
// =======================

// =======================
// Grab & Set Version
// =======================
let version_elm = document.getElementById("version");

fetch('../misc/version.json')
.then(response => response.json())
.then(data => version_elm.innerHTML = 'version ' + data.version);
// =======================

// =======================
// Card Content Change
// =======================
const ProjectsPage = () => {
     document.getElementById("david-info-side").classList.add("hidden");
     document.getElementById("crypto-card").classList.add("hidden");
     document.getElementById("projects-content").classList.remove('hidden');
};

const projects_button = document.getElementById("projects-button");
projects_button.addEventListener("click", ProjectsPage);

const AboutPage = () => {
     document.getElementById("david-info-side").classList.add("hidden");
     document.getElementById("crypto-card").classList.add("hidden");
     document.getElementById("about-content").classList.remove('hidden');
};

const about_button = document.getElementById("about-button");
about_button.addEventListener("click", AboutPage);

const HomePage = () => {
     document.getElementById("david-info-side").classList.remove("hidden");
     document.getElementById("crypto-card").classList.remove("hidden");
     document.getElementById("projects-content").classList.add('hidden');
     document.getElementById("about-content").classList.add('hidden');
};

const home_button_projects = document.getElementById("go-back-home-projects");
home_button_projects.addEventListener("click", HomePage);

const home_button_about = document.getElementById("go-back-home-about");
home_button_about.addEventListener("click", HomePage);
// =======================

// ===================================
// Buzzword Highlight Functionality
// ===================================
let word_index = 0;
const FlashBuzz = (word_arr) => {
     let buzz_elm = document.getElementById("buzzwords");

     // once array is done, reset index
     if (word_index == word_arr.length) {
          word_index = 0;
     }

     setTimeout(() => {
          // grabbing flashing text cursors
          let cursor_start_elm = document.getElementById("text-cursor-blink-start");
          let cursor_end_elm = document.getElementById("text-cursor-blink-end");

          // set terminal window text to random word
          buzz_elm.innerHTML = word_arr[word_index];

          // unhides buzzwords element to display random word;
          // hides starting flashing text cursor;
          // unhides ending flashing text cursor;
          buzz_elm.classList.remove('hidden');
          cursor_start_elm.classList.add('hidden');
          cursor_end_elm.classList.remove('hidden');
          setTimeout(() => {
               // after 2200 ms:
               // hide ending flashing text cursor;
               // add highlight class to buzzwords element;
               cursor_end_elm.classList.add('hidden');
               buzz_elm.classList.add('highlight-text');
               setTimeout(() => {
                    // after 2200 ms:
                    // unhide beginning flashing text cursor;
                    // reset buzzwords element's value to empty string;
                    // remove highlight class from buzzwords element;
                    cursor_start_elm.classList.remove('hidden');
                    buzz_elm.innerHTML = "";
                    buzz_elm.classList.remove('highlight-text');
                    setTimeout(() => {
                         // after 500 ms:
                         // increment index;
                         // rerun function;
                         word_index++;
                         FlashBuzz(word_arr);
                    }, 500);
               }, 2200);
          }, 2200);
     }, 2100);
};

// =======================================================================
// Fisher–Yates Shuffle -- CREDIT: https://bost.ocks.org/mike/shuffle/
// =======================================================================
const shuffle = (array) => {
     var m = array.length, t, i;

     // While there remain elements to shuffle...
     while (m) {

          // Pick a remaining element...
          i = Math.floor(Math.random() * m--);

          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
     }
     return array;
};

let buzzwords = [
     'automating tasks',
     'software development',
     'engineer',
     'server management',
     'problem solving',
     'tinkering',
     'data scraping',
     'data parsing',
     'networking',
     'query writer',
     'database management'
];
buzzwords = shuffle(buzzwords);

FlashBuzz(buzzwords);
// ===================================

// ============================
// Like Button Functionality
// ============================
const favorite_elm = document.getElementById("favorite");
const favorite_count = document.getElementById("fav-count");

if (!localStorage.getItem('nft-like')) { 
     localStorage.setItem('nft-like', '0');
}

let like_val = localStorage.getItem('nft-like');

switch (like_val) {
     case '0':
          favorite_elm.classList.remove('fas');
          favorite_elm.classList.add('far');
          favorite_count.innerHTML = like_val;
          break;
     case '1':
          favorite_elm.classList.add('fas');
          favorite_elm.classList.remove('far');
          favorite_count.innerHTML = like_val;
          break;
}

const FavoriteToggle = () => {
     let like = localStorage.getItem('nft-like');

     switch (like) {
          case '0':
               favorite_elm.classList.add('fas');
               favorite_elm.classList.remove('far');
               localStorage.setItem('nft-like', '1');
               favorite_count.innerHTML = "1";
               break;
          case '1':
               favorite_elm.classList.remove('fas');
               favorite_elm.classList.add('far');
               localStorage.setItem('nft-like', '0');
               favorite_count.innerHTML = "0";
               break;
     }
};

favorite_elm.addEventListener("click", FavoriteToggle);
// ============================

// ============================
// Tool Tips Functionality
// ============================
// ============================

// ===============================
// Dark/Light Mode Functionality
// ===============================
const light_dark_elm = document.getElementById("light-dark-mode");
const heres_the_goods = document.getElementById("heres-the-goods");

if (!localStorage.getItem('dark-mode')) { 
     localStorage.setItem('dark-mode', '0');
}

let darkmode_val = localStorage.getItem('dark-mode');

switch (darkmode_val) {
     case '0':
          light_dark_elm.classList.remove('fa-moon-stars');
          light_dark_elm.classList.add('fa-sun');
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('darkmode-bg');
          document.body.classList.add('lightmode-bg');
          
          break;
     case '1':
          light_dark_elm.classList.add('fa-moon-stars');
          light_dark_elm.classList.remove('fa-sun');
          document.documentElement.classList.add('dark');
          document.body.classList.add('darkmode-bg');
          document.body.classList.remove('lightmode-bg');
          break;
}

const DarkModeToggle = () => {
     let darkmode = localStorage.getItem('dark-mode');

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
// ===============================
