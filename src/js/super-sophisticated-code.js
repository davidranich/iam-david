console.log("🎶 It's mine, it's mine, it's mine. Whose world is this? The world is yours, the world is yours. 🎶 — Nas");

// =======================
// Age & Copyright Year
// =======================
const date = new Date();
const year = date.getFullYear();
const birth_year = "1993";

const my_age = document.getElementById("my-age");
const the_year = document.getElementById("copyright-year");

my_age.innerHTML = year - birth_year;
the_year.innerHTML = year;

// =======================

// ============
// NFT Price
// ============
let nft_price_tooltip = "";

fetch('../lib/eth-price.json')
     .then(response => response.json())
     .then(data => SetNFTPrice(data.price));

const SetNFTPrice = (price) => {
     price = price.replace("$", "");
     price = price.replace(",", "");
     
     const nft_eth = "6.510";
     let final = ((parseFloat(price) * parseFloat(nft_eth)).toFixed(2));
     final = "$" + final;

     // add comma when necessary
     nft_price_tooltip = final.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// ============

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
let window_closed = 0;
const FlashBuzz = (word_arr) => {
     const buzz_elm = document.getElementById("buzzwords");

     // if window was closed, kill function
     if (window_closed > 0) { return; }

     // once array is done, reset index
     if (word_index == word_arr.length) {
          word_index = 0;
     }

     setTimeout(() => {
          // grabbing flashing text cursors
          const cursor_start_elm = document.getElementById("text-cursor-blink-start");
          const cursor_end_elm = document.getElementById("text-cursor-blink-end");

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
                         // if window was closed, kill function
                         if (window_closed > 0) { return; }

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
     let m = array.length, t, i;

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

// scramble array items
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

const like_val = localStorage.getItem('nft-like');

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
     const like = localStorage.getItem('nft-like');

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
import tippy from 'tippy.js';

tippy('#nft-price', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal"></span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 12],
     placement: 'right',
     animation: 'shift-away',
     onShow(instance) {
          instance.setContent('<span class="hidden lg:block opacity-90 terminal text-xs font-normal">' + nft_price_tooltip + '</span>');
     }
});

tippy('#favorite', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">favorite</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 6],
     placement: 'bottom-end',
     animation: 'shift-away'
});

tippy('#light-dark', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">dark/light</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 4],
     placement: 'left-end',
     animation: 'shift-away'
});

tippy('#crypto-nft', {
     content: '<span class="hidden lg:block opacity-90 terminal text-xs font-normal">click me</span>',
     allowHTML: true,
     delay: [300, 50],
     offset: [0, 4],
     placement: 'right',
     animation: 'shift-away'
});

// ============================

// ===============================
// Easter Egg Stuff
// ===============================
const crypto_nft = document.getElementById('crypto-nft');
const mac_red_dot = document.getElementById('window-dot-red');
const mac_amber_dot = document.getElementById('window-dot-amber');

const CloseWindow = () => {
     const mac_window = document.getElementById('mac-window');
     mac_window.classList.remove('rounded-lg');
     mac_window.classList.remove('bg-gray-400');
     mac_window.classList.remove('dark:bg-neutral-700');
     mac_window.classList.add('text-center');
     mac_window.classList.add('text-red-700');
     mac_window.classList.add('text-lg');
     mac_window.innerHTML = "How dare you.";
     window_closed = 1;
};

let minimized = 0;
const MinimizeWindow = () => {
     const mac_window_bottom = document.getElementById('mac-window-bottom');

     if (minimized == 1) {
          mac_window_bottom.classList.remove("hidden");
          minimized = 0;
          return;
     }

     mac_window_bottom.classList.add("hidden");
     minimized = 1;
};

let title_changed = 0;
const TitleChange = () => {
     const title_elm = document.getElementById('title');

     if (title_changed == 1) {
          title_elm.innerHTML = "David Ranich";
          title_elm.classList.add('text-slate-700');
          title_changed = 0;
          return;
     }

     // remove original text color
     title_elm.classList.remove('text-slate-700');
     
     // grab each letter from name and push to an array
     let letter_arr = title_elm.innerHTML.split('');

     // colors for each letter
     let colors_arr = [
          'text-red-600',
          'text-orange-500',
          'text-yellow-400',
          'text-green-500',
          'text-emerald-500',
          'text-cyan-500',
          'text-sky-400',
          'text-violet-500',
          'text-rose-500',
          'text-amber-400',
          'text-purple-500',
          'text-pink-500'
     ];

     // scramble array items
     colors_arr = shuffle(colors_arr);

     // remove original text
     title_elm.innerHTML = title_elm.innerHTML.replace("David Ranich", "");

     letter_arr.forEach((letter, index) => {
          let space = " ";
          if (letter == space) {
               title_elm.innerHTML = title_elm.innerHTML + ' ';
               return;
          }

          title_elm.innerHTML = title_elm.innerHTML + '<span class="' + colors_arr[index] + '">' + letter + '</span>';
     });
     
     title_changed = 1;
};

crypto_nft.addEventListener("click", TitleChange);
mac_red_dot.addEventListener("click", CloseWindow);
mac_amber_dot.addEventListener("click", MinimizeWindow);
// ===============================

// ===============================
// Dark/Light Mode Functionality
// ===============================
const light_dark_elm = document.getElementById("light-dark-mode");

if (!localStorage.getItem('dark-mode')) { 
     localStorage.setItem('dark-mode', '0');
}

const darkmode_val = localStorage.getItem('dark-mode');

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
// ===============================
