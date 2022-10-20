'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // showUpBtn======================================================
    ((btnSelector: string): void => {
        let upBtn: Element | null = document.querySelector(btnSelector),
            flag: boolean = true;

        if (upBtn === null) {
            throw new Error('Could not find button')
        }

        function showUpBtn(): void {
            if (upBtn === null) {
                throw new Error('Could not find button')
            }
            upBtn.classList.add(btnSelector.substring(1) + '__show');
            flag = false;
        }

        function hideUpBtn(): void {
            if (upBtn === null) {
                throw new Error('Could not find button')
            }
            upBtn.classList.remove(btnSelector.substring(1) + '__show');
            flag = true;
        }

        window.addEventListener('scroll', (): void => {
            if (flag) {
                if (scrollY < document.documentElement.clientHeight) {
                    showUpBtn();
                }
            }
            if (scrollY == 0) {
                hideUpBtn();
            }
        })

        upBtn.addEventListener('click', (): void => {
            window.scrollTo(pageXOffset, 0);
            hideUpBtn();
        })

    })('.up__btn');

    // Modal Window ==================================================
    ((modalSelector: string, btnSelector: string, closeSelector: string): void => {
        const modal: Element | null = document.querySelector(modalSelector),
            btn: Element | null = document.querySelector(btnSelector),
            close: Element | null = document.querySelector(closeSelector);

        if (modal === null) {
            throw new Error('Could not find modal window')
        }
        if (btn === null) {
            throw new Error('Could not find button')
        }
        if (close === null) {
            throw new Error('Could not find close element')
        }

        function showModal() {
            if (modal === null) {
                throw new Error('Could not find modal window')
            }
            modal.classList.add(modalSelector.substring(1) + '__show');
            document.body.style.overflow = 'hidden';
        }

        function hideModal() {
            if (modal === null) {
                throw new Error('Could not find modal window')
            }
            modal.classList.remove(modalSelector.substring(1) + '__show');
            document.body.style.overflow = '';
        }

        btn.addEventListener('click', showModal);

        close.addEventListener('click', hideModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                hideModal();
            }
        });
    })('.modal', '.btn__more', '.modal__close');


});