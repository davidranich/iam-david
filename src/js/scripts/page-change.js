const aboutPage = () => {
     document.getElementById("david-info-side").classList.add("hidden");
     document.getElementById("crypto-card").classList.add("hidden");
     document.getElementById("about-content").classList.remove('hidden');
};

const about_button = document.getElementById("about-button");
about_button.addEventListener("click", aboutPage);

const homePage = () => {
     document.getElementById("david-info-side").classList.remove("hidden");
     document.getElementById("crypto-card").classList.remove("hidden");
     document.getElementById("about-content").classList.add('hidden');
};

// go back to home button
const home_button = document.querySelectorAll(".go-home");
home_button.forEach(button => {
     button.addEventListener("click", homePage);
});