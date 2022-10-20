'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // showUpBtn======================================================
    (function (btnSelector) {
        var upBtn = document.querySelector(btnSelector), flag = true;
        if (upBtn === null) {
            throw new Error('Could not find button');
        }
        function showUpBtn() {
            if (upBtn === null) {
                throw new Error('Could not find button');
            }
            upBtn.classList.add(btnSelector.substring(1) + '__show');
            flag = false;
        }
        function hideUpBtn() {
            if (upBtn === null) {
                throw new Error('Could not find button');
            }
            upBtn.classList.remove(btnSelector.substring(1) + '__show');
            flag = true;
        }
        window.addEventListener('scroll', function () {
            if (flag) {
                if (scrollY < document.documentElement.clientHeight) {
                    showUpBtn();
                }
            }
            if (scrollY == 0) {
                hideUpBtn();
            }
        });
        upBtn.addEventListener('click', function () {
            window.scrollTo(pageXOffset, 0);
            hideUpBtn();
        });
    })('.up__btn');
    // Modal Window ==================================================
    (function (modalSelector, btnSelector, closeSelector) {
        var modal = document.querySelector(modalSelector), btn = document.querySelector(btnSelector), close = document.querySelector(closeSelector);
        if (modal === null) {
            throw new Error('Could not find modal window');
        }
        if (btn === null) {
            throw new Error('Could not find button');
        }
        if (close === null) {
            throw new Error('Could not find close element');
        }
        function showModal() {
            if (modal === null) {
                throw new Error('Could not find modal window');
            }
            modal.classList.add(modalSelector.substring(1) + '__show');
            document.body.style.overflow = 'hidden';
        }
        function hideModal() {
            if (modal === null) {
                throw new Error('Could not find modal window');
            }
            modal.classList.remove(modalSelector.substring(1) + '__show');
            document.body.style.overflow = '';
        }
        btn.addEventListener('click', showModal);
        close.addEventListener('click', hideModal);
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                hideModal();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.code === 'Escape') {
                hideModal();
            }
        });
    })('.modal', '.btn__more', '.modal__close');
});
