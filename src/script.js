'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener('DOMContentLoaded', function () {
    function displayUpBtn(btnSelector) {
        var upBtn = document.querySelector(btnSelector), flag = true;
        if (upBtn === null) {
            throw new Error('Could not find button');
        }
        function showUpBtn() {
            upBtn === null || upBtn === void 0 ? void 0 : upBtn.classList.add(btnSelector.substring(1) + '__show');
            flag = false;
        }
        function hideUpBtn() {
            upBtn === null || upBtn === void 0 ? void 0 : upBtn.classList.remove(btnSelector.substring(1) + '__show');
            flag = true;
        }
        ;
    }
    ;
    displayUpBtn('.up__btn');
    function showModal(modalSelector, modal, header) {
        header.style.width = document.body.offsetWidth + 'px';
        var paddingOffset = document.body.clientWidth - document.body.offsetWidth + 'px';
        if (paddingOffset !== '0px') {
            document.body.style.paddingRight = paddingOffset;
        }
        else {
            document.body.style.paddingRight = '17px';
        }
        modal.classList.add(modalSelector.substring(1) + '__show');
        document.body.style.overflow = 'hidden';
    }
    function hideModal(modalSelector, modal, header) {
        header.style.width = '100%';
        modal.classList.remove(modalSelector.substring(1) + '__show');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';
    }
    function toggleModal(modalSelector, btnSelector, closeSelector, headerSelector) {
        var modal = document.querySelector(modalSelector), btn = document.querySelector(btnSelector), close = document.querySelector(closeSelector), header = document.querySelector(headerSelector);
        if (modal === null) {
            throw new Error('Could not find modal window');
        }
        if (btn === null) {
            throw new Error('Could not find button');
        }
        if (close === null) {
            throw new Error('Could not find close element');
        }
        if (header === null) {
            throw new Error('Could not find close header');
        }
        btn.addEventListener('click', function () { showModal(modalSelector, modal, header); });
        close.addEventListener('click', function () { hideModal(modalSelector, modal, header); });
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                hideModal(modalSelector, modal, header);
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.code === 'Escape') {
                hideModal(modalSelector, modal, header);
            }
        });
    }
    ;
    toggleModal('.modal', '.btn__more', '.modal__close', '.header');
    function openBurgerMenu(burgerSelector, menuSelector, crossSelector, linkSelector) {
        var burger = document.querySelector(burgerSelector), menu = document.querySelector(menuSelector), cross = document.querySelector(crossSelector), links = document.querySelectorAll(linkSelector);
        if (burger === null) {
            throw new Error('Could not find burger');
        }
        if (menu === null) {
            throw new Error('Could not find menu');
        }
        if (cross === null) {
            throw new Error('Could not find close element');
        }
        burger.addEventListener('click', function () {
            menu.style.display = "flex";
            burger.style.display = "none";
            cross.style.display = "block";
            document.body.style.overflow = 'hidden';
        });
        function close() {
            menu.style.display = "none";
            burger.style.display = "block";
            cross.style.display = "none";
            document.body.style.overflow = '';
        }
        menu.addEventListener('click', function (e) {
            links.forEach(function (link) {
                if (e.target == link && document.documentElement.scrollWidth < 1000) {
                    close();
                }
            });
        });
        cross.addEventListener('click', function () {
            close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.code === 'Escape' && window.getComputedStyle(menu).display === 'flex') {
                close();
            }
        });
    }
    ;
    openBurgerMenu('.burger', '.nav', '.cross', '.nav__link');
    function navigation(linksSelector, pointsSelector) {
        var links = document.querySelectorAll(linksSelector), points = document.querySelectorAll(pointsSelector);
        function scrollTo(point) {
            window.scroll({
                left: 0,
                top: point === null || point === void 0 ? void 0 : point.offsetTop,
                behavior: 'smooth'
            });
        }
        links.forEach(function (link, i) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                scrollTo(points[i]);
            });
        });
    }
    ;
    navigation('.nav__link', '.point');
    function postRequest(formSelector, modalSelector, modalContentSelector, headerSelector) {
        var _this = this;
        var form = document.querySelector(formSelector);
        if (form === null) {
            throw new Error('Could not find form');
        }
        var message = {
            success: "Thank you!<br>Please, wait for our call!",
            failure: 'Something went wrong.<br>Please try again later.'
        };
        var postData = function (url, data) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: data
                        })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        function bindpostData(form) {
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
                e.preventDefault();
                var formData = new FormData(form);
                var json = JSON.stringify(Object.fromEntries(formData.entries()));
                postData('server.php', json)
                    .then(function (data) {
                    console.log(data);
                    showThanksModal(message.success);
                })["catch"](function () {
                    showThanksModal(message.failure);
                })["finally"](function () {
                    form.reset();
                });
            });
        }
        function showThanksModal(message) {
            var modal = document.querySelector(modalSelector), prevModalDialog = document.querySelector(modalContentSelector), header = document.querySelector(headerSelector);
            if (modal === null) {
                throw new Error('Could not find modal window');
            }
            if (prevModalDialog === null) {
                throw new Error('Could not find modal dialog');
            }
            if (header === null) {
                throw new Error('Could not find header');
            }
            prevModalDialog.style.display = 'none';
            showModal(modalSelector, modal, header);
            var thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = "<div class=\"modal__content\">\n                <div class=\"modal__title\">".concat(message, "</div>\n                </div>");
            modal.append(thanksModal);
            setTimeout(function () {
                thanksModal.remove();
                prevModalDialog.style.display = 'block';
                hideModal(modalSelector, modal, header);
            }, 3000);
        }
        bindpostData(form);
    }
    ;
    postRequest('.callback', '.modal', '.modal__content', '#header');
});
