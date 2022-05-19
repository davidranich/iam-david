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