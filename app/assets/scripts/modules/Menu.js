import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";


class Menu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".menu");
        this.closeMenuX = $(".menu__close");
        this.menuLinks = $(".menu a");

        this.addSmoothScrooling();
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.closeMenuX.click(this.closeMenu.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
        
    }

    addSmoothScrooling() {
        this.menuLinks.smoothScroll();
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeMenu();
        }
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("menu--visible");
        
        this.menuIcon.toggleClass("menu__close-x");
        
    }

    closeMenu() {
        this.menuContent.removeClass("menu--visible");
    }
}

export default Menu;