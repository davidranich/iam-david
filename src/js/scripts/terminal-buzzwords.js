// ===================================
// Terminal Buzzwords
// ===================================

import { shuffle } from "./shuffle";

let word_index = 0;
let window_closed = 0;

const terminal_buzzwords_elm = document.getElementById("buzzwords");

const flashBuzzword = (word_arr) => {
     // if window was closed, kill function
     if (window_closed > 0) return;

     // once array is done, reset index
     if (word_index === word_arr.length) word_index = 0;

     setTimeout(() => {
          // set terminal window text to random word
          terminal_buzzwords_elm.innerHTML = word_arr[word_index];

          // unhides buzzwords element to display random word
          terminal_buzzwords_elm.classList.remove('hidden');
          setTimeout(() => {
               // we've shown the text for long enough, let's add to the count & re-run the function again to show another word
               word_index++;
               flashBuzzword(word_arr);
          }, 1900);
     }, 1500);
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

// scramble array items several times
buzzwords = shuffle(buzzwords);
buzzwords = shuffle(buzzwords);
buzzwords = shuffle(buzzwords);

flashBuzzword(buzzwords);