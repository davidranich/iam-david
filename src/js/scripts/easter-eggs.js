import { shuffle } from "./shuffle";

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