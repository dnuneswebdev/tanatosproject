import $ from "jquery";

class Menu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".menu");
        this.closeMenuX = $(".menu__close");

        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.closeMenuX.click(this.closeMenu.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
        
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