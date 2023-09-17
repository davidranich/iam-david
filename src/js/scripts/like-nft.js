// grab heart favorite icon and count elements
const favorite_elm = document.getElementById("favorite");
const favorite_count = document.getElementById("fav-count");

// if local storage item doesn't exist, let's create it
if (!localStorage.getItem('nft-like')) { 
     localStorage.setItem('nft-like', 0);
}

// grab current local storage item value
let like_val = parseInt(localStorage.getItem('nft-like'));

// if not favorited, show outlined style icon; else show filled-in style icon
// also set count based on 'nft-like' value
if (!like_val) {
     favorite_elm.classList.add('far');
     favorite_count.innerHTML = like_val;
} else {
     favorite_elm.classList.add('fas');
     favorite_count.innerHTML = like_val;
}

function toggle(value) {
     // convert value to an integer
     value = parseInt(value);

     // if not favorited, show outlined style icon; else show filled-in style icon
     if (!value) {
          favorite_elm.classList.add('fas');
          favorite_elm.classList.remove('far');
          favorite_count.innerHTML = 1;
          localStorage.setItem('nft-like', 1);
     } else {
          favorite_elm.classList.remove('fas');
          favorite_elm.classList.add('far');
          favorite_count.innerHTML = 0;
          localStorage.setItem('nft-like', 0);
     }
}

favorite_elm.addEventListener("click", () => {
     let like = parseInt(localStorage.getItem('nft-like'));
     toggle(like);

     // if (!like) {
     //      toggle(1);
     // } else {
     //      toggle(0);
     // }
});