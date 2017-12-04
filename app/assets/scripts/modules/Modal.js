import $ from "jquery";



class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".form-modal");
        this.closeModalButton = $(".form-modal__close");
        this.events();
    }

    events() {
        this.openModalButton.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("form-modal--visible");
    }

    closeModal() {
        this.modal.removeClass("form-modal--visible");
    }
}

export default Modal;