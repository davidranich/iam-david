const current_year = new Date().getFullYear();
const birth_year = 1993;
let age = (current_year - birth_year); // simple math to determine age for 'about' page

// age and copyright year elements
const my_age = document.getElementById("my-age");
const the_year = document.getElementById("copyright-year");

my_age.innerHTML = age;
the_year.innerHTML = current_year;