import { shuffle } from "./shuffle";

let window_minimized = 0;
let window_closed = 0;

const closeTerminalWindow = () => {
     const mac_window = document.getElementById('mac-window');
     mac_window.classList.remove('rounded-lg');
     mac_window.classList.remove('bg-gray-400');
     mac_window.classList.remove('dark:bg-neutral-700');
     mac_window.classList.add('text-center');
     mac_window.classList.add('text-red-700');
     mac_window.classList.add('text-lg');
     window_closed = 1;
};

const minimizeTerminalWindow = () => {
     const mac_window_bottom = document.getElementById('mac-window-bottom');

     if (window_minimized == 1) {
          mac_window_bottom.classList.remove("hidden");
          window_minimized = 0;
          return;
     }

     mac_window_bottom.classList.add("hidden");
     window_minimized = 1;
};

const mac_red_dot = document.getElementById('window-dot-red');
const mac_amber_dot = document.getElementById('window-dot-amber');

mac_red_dot.addEventListener("click", closeTerminalWindow);
mac_amber_dot.addEventListener("click", minimizeTerminalWindow);

const terminal_buzzwords_elm = document.getElementById("buzzwords");
const flashBuzzword = (word_arr) => {
     // randomize order of items
     word_arr = shuffle(word_arr);
     
     let word_index = 0;

     const showNextWord = () => {
          // once array is done, shuffle and reset index
          if (word_index === word_arr.length) {
               word_arr = shuffle(word_arr);
               word_index = 0;
          }

          // if the user closes the window, kill the function
          if (window_closed === 1) {
               return;
          }

          setTimeout(() => {
               // set terminal window text to the current word
               terminal_buzzwords_elm.innerHTML = word_arr[word_index];

               // unhides buzzwords element to display the word
               terminal_buzzwords_elm.classList.remove('hidden');

               setTimeout(() => {
                    // increment index and show the next word
                    word_index++;
                    showNextWord();
               }, 1900);
          }, 1500);
     };

    showNextWord();
};

let buzzwords = [
     'automation',
     'software development',
     'full stack development',
     'front end development',
     'back end development',
     'data sanitizing',
     'mobile development',
     'cloud computing',
     'troubleshooting',
     'hardware',
     'windows && linux && macos',
     'command line',
     'shell scripting',
     'problem solving',
     'tinkering',
     'data scraping',
     'data parsing',
     'networking',
     'query writing',
     'relational databases',
     'nosql databases',
     'encryption',
     'api development',
     'amazon web services',
     'container applications',
     'continuous integration',
     'continuous delivery'
];

flashBuzzword(buzzwords);