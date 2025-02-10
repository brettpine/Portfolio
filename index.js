const navLinks = document.querySelectorAll(".navbar a");
const articles = document.querySelectorAll("article");
const projectButton = document.querySelector(".about-content .btn");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((nav) => nav.classList.remove("active"));

        link.classList.add("active");

        const targetId = link.getAttribute("href").substring(1); // Remove the "#" at the start
        const targetArticle = document.getElementById(targetId);

        articles.forEach((article) => article.classList.remove("active"));
        targetArticle.classList.add("active");
    });
});

projectButton.addEventListener("click", (event) => {
    event.preventDefault();

    const targetNavLink = document.querySelector('nav a[href="#projects"]');
    targetNavLink.click();
});