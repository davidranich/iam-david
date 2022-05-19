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