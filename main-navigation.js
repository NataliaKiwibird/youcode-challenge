(() => {
    const button = document.querySelector(".header__mobile-menu");
    const menu = document.querySelector(".header-nav__list")

    const toggleClass = () => {
        menu.classList.toggle("header-nav__list--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();
