'use strict';

document.addEventListener('DOMContentLoaded', () => {

    function displayUpBtn(btnSelector: string): void {
        let upBtn = document.querySelector(btnSelector) as HTMLButtonElement,
            flag = true;

        if (upBtn === null) {
            throw new Error('Could not find button')
        }

        function showUpBtn(): void {
            upBtn?.classList.add(btnSelector.substring(1) + '__show');
            flag = false;
        }

        function hideUpBtn(): void {
            upBtn?.classList.remove(btnSelector.substring(1) + '__show');
            flag = true;
        };

    };
    displayUpBtn('.up__btn');

    function showModal(modalSelector: string, modal: HTMLDivElement, header: HTMLDivElement): void {
        header.style.width = document.body.offsetWidth + 'px';
        let paddingOffset: string = document.body.clientWidth - document.body.offsetWidth + 'px';
        if (paddingOffset !== '0px') {
            document.body.style.paddingRight = paddingOffset;
        } else {
            document.body.style.paddingRight = '17px';
        }

        modal.classList.add(modalSelector.substring(1) + '__show');
        document.body.style.overflow = 'hidden';
    }

    function hideModal(modalSelector: string, modal: HTMLDivElement, header: HTMLDivElement): void {
        header.style.width = '100%';
        modal.classList.remove(modalSelector.substring(1) + '__show');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';
    }

    function toggleModal(modalSelector: string, btnSelector: string, closeSelector: string, headerSelector: string): void {
        const modal = document.querySelector(modalSelector) as HTMLDivElement,
            btn = document.querySelector(btnSelector) as HTMLButtonElement,
            close = document.querySelector(closeSelector) as HTMLDivElement,
            header = document.querySelector(headerSelector) as HTMLDivElement;

        if (modal === null) {
            throw new Error('Could not find modal window')
        }
        if (btn === null) {
            throw new Error('Could not find button')
        }
        if (close === null) {
            throw new Error('Could not find close element')
        }
        if (header === null) {
            throw new Error('Could not find close header')
        }

        btn.addEventListener('click', () => { showModal(modalSelector, modal, header) });

        close.addEventListener('click', () => { hideModal(modalSelector, modal, header) });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(modalSelector, modal, header);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                hideModal(modalSelector, modal, header);
            }
        });
    };
    toggleModal('.modal', '.btn__more', '.modal__close', '.header');

    function openBurgerMenu(burgerSelector: string, menuSelector: string, crossSelector: string, linkSelector: string): void {
        const burger = document.querySelector(burgerSelector) as HTMLDivElement,
            menu = document.querySelector(menuSelector) as HTMLDivElement,
            cross = document.querySelector(crossSelector) as HTMLDivElement,
            links: NodeListOf<HTMLElement> = document.querySelectorAll(linkSelector);

        if (burger === null) {
            throw new Error('Could not find burger')
        }
        if (menu === null) {
            throw new Error('Could not find menu')
        }
        if (cross === null) {
            throw new Error('Could not find close element')
        }
        burger.addEventListener('click', (): void => {
            menu.style.display = "flex";
            burger.style.display = "none";
            cross.style.display = "block";
            document.body.style.overflow = 'hidden';
        });

        function close(): void {
            menu.style.display = "none";
            burger.style.display = "block";
            cross.style.display = "none";
            document.body.style.overflow = '';
        }

        menu.addEventListener('click', (e) => {
            links.forEach((link?: HTMLElement) => {
                if (e.target == link && document.documentElement.scrollWidth < 1000) {
                    close();
                }
            })
        });

        cross.addEventListener('click', () => {
            close();
        })

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && window.getComputedStyle(menu).display === 'flex') {
                close();
            }
        });
    };
    openBurgerMenu('.burger', '.nav', '.cross', '.nav__link');

    function navigation(linksSelector: string, pointsSelector: string): void {
        const links: NodeListOf<HTMLElement> = document.querySelectorAll(linksSelector),
            points: NodeListOf<HTMLElement> = document.querySelectorAll(pointsSelector);

        function scrollTo(point?: HTMLElement): void {
            window.scroll({
                left: 0,
                top: point?.offsetTop,
                behavior: 'smooth'
            });
        }

        links.forEach((link: HTMLElement, i: number) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                scrollTo(points[i]);
            })
        });

    };
    navigation('.nav__link', '.point');

    function postRequest(formSelector: string, modalSelector: string, modalContentSelector: string, headerSelector: string): void {

        const form = document.querySelector(formSelector) as HTMLFormElement;
        if (form === null) {
            throw new Error('Could not find form')
        }

        const message: { success: string, failure: string } = {
            success: "Thank you!<br>Please, wait for our call!",
            failure: 'Something went wrong.<br>Please try again later.',
        };

        const postData = async (url: string, data: string): Promise<Response> => {
            const res: Response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            });
            return await res;
        };

        function bindpostData(form: HTMLFormElement): void {
            form?.addEventListener('submit', (e) => {
                e.preventDefault();

                const formData = new FormData(form);
                const json: string = JSON.stringify(Object.fromEntries(formData.entries()));

                postData('server.php', json)
                    .then(data => {
                        console.log(data);
                        showThanksModal(message.success);
                    }).catch(() => {
                        showThanksModal(message.failure);
                    }).finally(() => {
                        form.reset();
                    })
            });
        }

        function showThanksModal(message: string) {
            const modal = document.querySelector(modalSelector) as HTMLDivElement,
                prevModalDialog = document.querySelector(modalContentSelector) as HTMLDivElement,
                header = document.querySelector(headerSelector) as HTMLDivElement;

            if (modal === null) {
                throw new Error('Could not find modal window')
            }
            if (prevModalDialog === null) {
                throw new Error('Could not find modal dialog')
            }
            if (header === null) {
                throw new Error('Could not find header')
            }
            prevModalDialog.style.display = 'none';

            showModal(modalSelector, modal, header);

            const thanksModal: HTMLDivElement = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `<div class="modal__content">
                <div class="modal__title">${message}</div>
                </div>`;

            modal.append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.style.display = 'block';
                hideModal(modalSelector, modal, header);
            }, 3000);
        }

        bindpostData(form);
    };
    postRequest('.callback', '.modal', '.modal__content', '#header');

});