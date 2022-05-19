const date = new Date();
const year = date.getFullYear();
const birth_year = "1993";

const my_age = document.getElementById("my-age");
const the_year = document.getElementById("copyright-year");

my_age.innerHTML = year - birth_year;
the_year.innerHTML = year;