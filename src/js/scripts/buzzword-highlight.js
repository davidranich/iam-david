import { shuffle } from "./shuffle";

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
     if (word_index === word_arr.length) {
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
     'linux && macos',
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

// scramble array items
buzzwords = shuffle(buzzwords);

FlashBuzz(buzzwords);