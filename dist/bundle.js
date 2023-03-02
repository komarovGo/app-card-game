/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

window.application = {
    blocks: {},
    screens: {},
    levels: [],
    watch: [],
    cards: {},
    idCards: [],
    clickUserCard: {},
    conteiner: document.querySelector('.conteiner'),
    cardField: document.querySelector('.card-field'),
    renderScreen: function (screenName) {
        if (!window.application.screens[screenName]) {
            console.warn('Такой страницы нет');
        }
        else {
            window.application.conteiner.innerHTML = '';
            window.application.cardField.innerHTML = '';
            this.screens[screenName]();
        }
    },
    renderBlock: function (blockName, conteiner) {
        if (!window.application.blocks[blockName]) {
            console.log('Такого блока нет');
        }
        else {
            this.blocks[blockName](conteiner);
        }
    },
};
function oneScreen() {
    var wrapper = document.createElement('div');
    var content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('content__screen1');
    var title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Выбери сложность';
    var menubuttons = document.createElement('div');
    menubuttons.classList.add('button__lvl');
    var btn1 = document.createElement('button');
    btn1.classList.add('btn');
    btn1.classList.add('btn-1');
    btn1.textContent = '1';
    var btn2 = document.createElement('button');
    btn2.classList.add('btn');
    btn2.classList.add('btn-2');
    btn2.textContent = '2';
    var btn3 = document.createElement('button');
    btn3.classList.add('btn');
    btn3.classList.add('btn-3');
    btn3.textContent = '3';
    var buttonStartGame = document.createElement('button');
    buttonStartGame.classList.add('button');
    buttonStartGame.classList.add('button__start-game');
    buttonStartGame.classList.add('button__hiding');
    buttonStartGame.textContent = 'Старт';
    window.application.conteiner.appendChild(wrapper);
    wrapper.appendChild(content);
    content.appendChild(title);
    content.appendChild(menubuttons);
    menubuttons.appendChild(btn1);
    menubuttons.appendChild(btn2);
    menubuttons.appendChild(btn3);
    content.appendChild(buttonStartGame);
    var buttonLvlSelec = document.querySelectorAll('.button__lvl');
    buttonLvlSelec.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            var target = event.target;
            var textContent = target.textContent;
            if (textContent === '1') {
                window.application.levels = textContent;
                target.classList.add('add__color');
                btn2.classList.remove('add__color');
                btn3.classList.remove('add__color');
            }
            else if (textContent === '2') {
                window.application.levels = textContent;
                target.classList.add('add__color');
                btn1.classList.remove('add__color');
                btn3.classList.remove('add__color');
            }
            else if (textContent === '3') {
                window.application.levels = textContent;
                target.classList.add('add__color');
                btn1.classList.remove('add__color');
                btn2.classList.remove('add__color');
            }
            buttonStart.disabled = false;
            buttonStart.classList.remove('button__hiding');
        });
    });
    var buttonStart = document.querySelector('.button__start-game');
    buttonStart.disabled = true;
    buttonStart.addEventListener('click', function () {
        if (window.application.levels === '1') {
            window.application.renderScreen('renderGame');
        }
        else if (window.application.levels === '2') {
            window.application.renderScreen('renderGame');
        }
        else if (window.application.levels === '3') {
            window.application.renderScreen('renderGame');
        }
    });
}
window.application.screens['renderone_screen'] = oneScreen;
window.application.renderScreen('renderone_screen');
function BlocksGameCard() {
    var content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('content__screen2');
    var timer = document.createElement('div');
    timer.classList.add('timer');
    var minSec = document.createElement('div');
    minSec.classList.add('min-sec');
    var min = document.createElement('p');
    min.classList.add('min');
    min.textContent = 'min';
    var sec = document.createElement('p');
    sec.classList.add('sec');
    sec.textContent = 'sec';
    var watch = document.createElement('div');
    watch.classList.add('watch');
    var m = document.createElement('h3');
    m.classList.add('minuts');
    m.textContent = '00.';
    var s = document.createElement('h3');
    s.classList.add('seconds');
    s.textContent = '00';
    var buttonStartOver = document.createElement('button');
    buttonStartOver.classList.add('button');
    buttonStartOver.classList.add('button__start-over');
    buttonStartOver.textContent = 'Начать заново';
    var cardField = document.createElement('div');
    cardField.classList.add('card-field');
    content.appendChild(timer);
    timer.appendChild(minSec);
    minSec.appendChild(min);
    minSec.appendChild(sec);
    timer.appendChild(watch);
    watch.appendChild(m);
    watch.appendChild(s);
    content.appendChild(timer);
    content.appendChild(buttonStartOver);
    window.application.conteiner.appendChild(content);
    var nemberMin = document.getElementsByTagName('h3')[0];
    var nemberSecond = document.getElementsByTagName('h3')[1];
    var peremenMinuts = 0;
    var peremenSeconds = 0;
    function tikTak() {
        peremenSeconds++;
        if (peremenSeconds <= 9) {
            s.innerHTML = "0".concat(peremenSeconds);
        }
        if (peremenSeconds > 9) {
            s.innerHTML = "".concat(peremenSeconds);
        }
        if (peremenSeconds > 59) {
            peremenMinuts++;
            peremenSeconds = 0;
            m.innerHTML = "0".concat(peremenMinuts, ".");
        }
        if (peremenMinuts > 9) {
            m.innerHTML = "".concat(peremenMinuts, ".");
        }
        window.application.watch = "".concat(nemberMin.textContent).concat(nemberSecond.textContent);
        console.log(window.application.watch);
    }
    function taimer() {
        setInterval(tikTak, 1000);
    }
    setTimeout(function () {
        taimer();
    }, 5000);
    buttonStartOver.addEventListener('click', function () {
        window.application.idCards = [];
        window.application.renderScreen('renderone_screen');
    });
}
window.application.blocks['rendeBlocksGameCard'] = BlocksGameCard;
function blockCardField() {
    var tus = document.createElement('div');
    tus.classList.add('box');
    var cardTB = document.createElement('img');
    cardTB.src = './static/card/b/t-b.svg';
    cardTB.classList.add('card');
    var cardTBshirt = document.createElement('img');
    cardTBshirt.src = './static/cover-card.svg';
    cardTBshirt.classList.add('shirt');
    cardTBshirt.id = 'tus';
    tus.appendChild(cardTB);
    tus.appendChild(cardTBshirt);
    var tus2 = document.createElement('div');
    tus2.classList.add('box');
    var cardTCH = document.createElement('img');
    cardTCH.src = './static/card/ch/t-ch.svg';
    cardTCH.classList.add('card');
    var cardTCHshirt = document.createElement('img');
    cardTCHshirt.src = './static/cover-card.svg';
    cardTCHshirt.classList.add('shirt');
    cardTCHshirt.id = 'tus';
    tus2.appendChild(cardTCH);
    tus2.appendChild(cardTCHshirt);
    var korol = document.createElement('div');
    korol.classList.add('box');
    var cardKK = document.createElement('img');
    cardKK.src = './static/card/k/KK.svg';
    cardKK.classList.add('card');
    var cardKKshirt = document.createElement('img');
    cardKKshirt.src = './static/cover-card.svg';
    cardKKshirt.classList.add('shirt');
    cardKKshirt.id = 'korol';
    korol.appendChild(cardKK);
    korol.appendChild(cardKKshirt);
    var korol2 = document.createElement('div');
    korol2.classList.add('box');
    var cardKP = document.createElement('img');
    cardKP.src = './static/card/P/KP.svg';
    cardKP.classList.add('card');
    var cardKPshirt = document.createElement('img');
    cardKPshirt.src = './static/cover-card.svg';
    cardKPshirt.classList.add('shirt');
    cardKPshirt.id = 'korol';
    korol2.appendChild(cardKP);
    korol2.appendChild(cardKPshirt);
    var dama = document.createElement('div');
    dama.classList.add('box');
    var cardDB = document.createElement('img');
    cardDB.src = './static/card/b/d-b.svg';
    cardDB.classList.add('card');
    var cardDBshirt = document.createElement('img');
    cardDBshirt.src = './static/cover-card.svg';
    cardDBshirt.classList.add('shirt');
    cardDBshirt.id = 'dama';
    dama.appendChild(cardDB);
    dama.appendChild(cardDBshirt);
    var dama2 = document.createElement('div');
    dama2.classList.add('box');
    var cardDCH = document.createElement('img');
    cardDCH.src = './static/card/ch/d-ch.svg';
    cardDCH.classList.add('card');
    var cardDCHshirt = document.createElement('img');
    cardDCHshirt.src = './static/cover-card.svg';
    cardDCHshirt.classList.add('shirt');
    cardDCHshirt.id = 'dama';
    dama2.appendChild(cardDCH);
    dama2.appendChild(cardDCHshirt);
    var valet = document.createElement('div');
    valet.classList.add('box');
    var cardVK = document.createElement('img');
    cardVK.src = './static/card/k/VK.svg';
    cardVK.classList.add('card');
    var cardVKshirt = document.createElement('img');
    cardVKshirt.src = './static/cover-card.svg';
    cardVKshirt.classList.add('shirt');
    cardVKshirt.id = 'valet';
    valet.appendChild(cardVK);
    valet.appendChild(cardVKshirt);
    var valet2 = document.createElement('div');
    valet2.classList.add('box');
    var cardVP = document.createElement('img');
    cardVP.src = './static/card/P/JP.svg';
    cardVP.classList.add('card');
    var cardVPshirt = document.createElement('img');
    cardVPshirt.src = './static/cover-card.svg';
    cardVPshirt.classList.add('shirt');
    cardVPshirt.id = 'valet';
    valet2.appendChild(cardVP);
    valet2.appendChild(cardVPshirt);
    var ten = document.createElement('div');
    ten.classList.add('box');
    var cardTenB = document.createElement('img');
    cardTenB.src = './static/card/b/10-b.svg';
    cardTenB.classList.add('card');
    var cardTenBshirt = document.createElement('img');
    cardTenBshirt.src = './static/cover-card.svg';
    cardTenBshirt.classList.add('shirt');
    cardTenBshirt.id = 'ten';
    ten.appendChild(cardTenB);
    ten.appendChild(cardTenBshirt);
    var ten2 = document.createElement('div');
    ten2.classList.add('box');
    var cardTenCH = document.createElement('img');
    cardTenCH.src = './static/card/ch/10-ch.svg';
    cardTenCH.classList.add('card');
    var cardTenCHshirt = document.createElement('img');
    cardTenCHshirt.src = './static/cover-card.svg';
    cardTenCHshirt.classList.add('shirt');
    cardTenCHshirt.id = 'ten';
    ten2.appendChild(cardTenCH);
    ten2.appendChild(cardTenCHshirt);
    var nine = document.createElement('div');
    nine.classList.add('box');
    var cardNineK = document.createElement('img');
    cardNineK.src = './static/card/k/9K.svg';
    cardNineK.classList.add('card');
    var cardNineKshirt = document.createElement('img');
    cardNineKshirt.src = './static/cover-card.svg';
    cardNineKshirt.classList.add('shirt');
    cardNineKshirt.id = 'nine';
    nine.appendChild(cardNineK);
    nine.appendChild(cardNineKshirt);
    var nine2 = document.createElement('div');
    nine2.classList.add('box');
    var cardNineP = document.createElement('img');
    cardNineP.src = './static/card/P/9P.svg';
    cardNineP.classList.add('card');
    var cardNinePshirt = document.createElement('img');
    cardNinePshirt.src = './static/cover-card.svg';
    cardNinePshirt.classList.add('shirt');
    cardNinePshirt.id = 'nine';
    nine2.appendChild(cardNineP);
    nine2.appendChild(cardNinePshirt);
    var eight = document.createElement('div');
    eight.classList.add('box');
    var cardEightB = document.createElement('img');
    cardEightB.src = './static/card/b/8-b.svg';
    cardEightB.classList.add('card');
    var cardEightBshirt = document.createElement('img');
    cardEightBshirt.src = './static/cover-card.svg';
    cardEightBshirt.classList.add('shirt');
    cardEightBshirt.id = 'eight';
    eight.appendChild(cardEightB);
    eight.appendChild(cardEightBshirt);
    var eight2 = document.createElement('div');
    eight2.classList.add('box');
    var cardEightCH = document.createElement('img');
    cardEightCH.src = './static/card/ch/8-ch.svg';
    cardEightCH.classList.add('card');
    var cardEightCHshirt = document.createElement('img');
    cardEightCHshirt.src = './static/cover-card.svg';
    cardEightCHshirt.classList.add('shirt');
    cardEightCHshirt.id = 'eight';
    eight2.appendChild(cardEightCH);
    eight2.appendChild(cardEightCHshirt);
    var seven = document.createElement('div');
    seven.classList.add('box');
    var cardSevenK = document.createElement('img');
    cardSevenK.src = './static/card/k/7K.svg';
    cardSevenK.classList.add('card');
    var cardSevenKshirt = document.createElement('img');
    cardSevenKshirt.src = './static/cover-card.svg';
    cardSevenKshirt.classList.add('shirt');
    cardSevenKshirt.id = 'seven';
    seven.appendChild(cardSevenK);
    seven.appendChild(cardSevenKshirt);
    var seven2 = document.createElement('div');
    seven2.classList.add('box');
    var cardSevenP = document.createElement('img');
    cardSevenP.src = './static/card/P/7P.svg';
    cardSevenP.classList.add('card');
    var cardSevenPshirt = document.createElement('img');
    cardSevenPshirt.src = './static/cover-card.svg';
    cardSevenPshirt.classList.add('shirt');
    cardSevenPshirt.id = 'seven';
    seven2.appendChild(cardSevenP);
    seven2.appendChild(cardSevenPshirt);
    var six = document.createElement('div');
    six.classList.add('box');
    var cardSixB = document.createElement('img');
    cardSixB.src = './static/card/b/6-b.svg';
    cardSixB.classList.add('card');
    var cardSixBshirt = document.createElement('img');
    cardSixBshirt.src = './static/cover-card.svg';
    cardSixBshirt.classList.add('shirt');
    cardSixBshirt.id = 'six';
    six.appendChild(cardSixB);
    six.appendChild(cardSixBshirt);
    var six2 = document.createElement('div');
    six2.classList.add('box');
    var cardSixCH = document.createElement('img');
    cardSixCH.src = './static/card/ch/6-ch.svg';
    cardSixCH.classList.add('card');
    var cardSixCHshirt = document.createElement('img');
    cardSixCHshirt.src = './static/cover-card.svg';
    cardSixCHshirt.classList.add('shirt');
    cardSixCHshirt.id = 'six';
    six2.appendChild(cardSixCH);
    six2.appendChild(cardSixCHshirt);
    var boxCard = [
        tus,
        tus2,
        korol,
        korol2,
        dama,
        dama2,
        valet,
        valet2,
        ten,
        ten2,
        nine,
        nine2,
        eight,
        eight2,
        seven,
        seven2,
        six,
        six2,
    ];
    function sortCard(boxCard) {
        return boxCard.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sortCard(boxCard);
    window.application.cards = boxCard;
    var shirtCard = [
        cardTBshirt,
        cardTCHshirt,
        cardKKshirt,
        cardKPshirt,
        cardDBshirt,
        cardDCHshirt,
        cardVKshirt,
        cardVPshirt,
        cardTenBshirt,
        cardTenCHshirt,
        cardNineKshirt,
        cardNinePshirt,
        cardEightBshirt,
        cardEightCHshirt,
        cardSevenKshirt,
        cardSevenPshirt,
        cardSixBshirt,
        cardSixCHshirt,
    ];
    function reversCard(shirtCard) {
        for (var i = 0; i < shirtCard.length; i++) {
            shirtCard[i].classList.add('shirt_pick');
        }
    }
    setTimeout(function () {
        reversCard(shirtCard);
    }, 5000);
    boxCard.forEach(function (pick) {
        pick.addEventListener('click', function (event) {
            var target = event.target;
            target.classList.remove('shirt_pick');
            console.log(target.id);
            window.application.idCards.push(target.id);
            if (window.application.idCards.length === 2) {
                comparison();
            }
        });
    });
    function comparison() {
        if (window.application.idCards[0] === window.application.idCards[1]) {
            window.application.idCards = [];
            window.application.renderScreen('rendeWinScreen');
        }
        else {
            window.application.idCards = [];
            window.application.renderScreen('rendelossScreen');
        }
    }
}
window.application.blocks['renderBlockCardField'] = blockCardField;
function blockPlayingField() {
    if (window.application.levels === '3') {
        for (var i = 0; i < window.application.cards.length; i++) {
            window.application.cardField.appendChild(window.application.cards[i]);
            window.application.conteiner.appendChild(window.application.cardField);
        }
    }
    else if (window.application.levels === '2') {
        for (var i = 6; i < window.application.cards.length; i++) {
            window.application.cardField.appendChild(window.application.cards[i]);
            window.application.conteiner.appendChild(window.application.cardField);
        }
    }
    else if (window.application.levels === '1') {
        for (var i = 12; i < window.application.cards.length; i++) {
            window.application.cardField.appendChild(window.application.cards[i]);
            window.application.conteiner.appendChild(window.application.cardField);
        }
    }
}
window.application.blocks['renderBlockPlayingField'] = blockPlayingField;
function renderGameScreen() {
    window.application.renderBlock('rendeBlocksGameCard');
    window.application.renderBlock('renderBlockCardField');
    window.application.renderBlock('renderBlockPlayingField');
}
window.application.screens['renderGame'] = renderGameScreen;
function lossScreen() {
    var wrapper = document.createElement('div');
    var content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('content__loss-win');
    var emoji = document.createElement('img');
    emoji.src = './static/smail.svg';
    emoji.classList.add('emoji');
    var title = document.createElement('h2');
    title.classList.add('title');
    title.classList.add('title__loss');
    title.textContent = 'Вы проиграли!';
    var paragraph = document.createElement('h2');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Затраченное время:';
    var minuts = document.createElement('div');
    minuts.classList.add('watch');
    minuts.classList.add('watch__loss');
    minuts.textContent = window.application.watch;
    var buttonStartGame = document.createElement('button');
    buttonStartGame.classList.add('button');
    buttonStartGame.classList.add('button__start-over');
    buttonStartGame.textContent = 'Играть снова';
    wrapper.appendChild(content);
    content.appendChild(emoji);
    content.appendChild(title);
    content.appendChild(paragraph);
    content.appendChild(minuts);
    content.appendChild(buttonStartGame);
    window.application.conteiner.appendChild(content);
    buttonStartGame.addEventListener('click', function () {
        window.application.renderScreen('renderone_screen');
    });
}
window.application.screens['rendelossScreen'] = lossScreen;
function WinScreen() {
    var wrapper = document.createElement('div');
    var content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('content__loss-win');
    var emoji = document.createElement('img');
    emoji.src = './static/Image.svg';
    emoji.classList.add('emoji');
    var title = document.createElement('h2');
    title.classList.add('title');
    title.classList.add('title__loss');
    title.textContent = 'Вы выиграли!';
    var paragraph = document.createElement('h2');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Затраченное время:';
    var minuts = document.createElement('div');
    minuts.classList.add('watch');
    minuts.classList.add('watch__loss');
    minuts.textContent = window.application.watch;
    var buttonStartGame = document.createElement('button');
    buttonStartGame.classList.add('button');
    buttonStartGame.classList.add('button__start-over');
    buttonStartGame.textContent = 'Играть снова';
    wrapper.appendChild(content);
    content.appendChild(emoji);
    content.appendChild(title);
    content.appendChild(paragraph);
    content.appendChild(minuts);
    content.appendChild(buttonStartGame);
    window.application.conteiner.appendChild(content);
    buttonStartGame.addEventListener('click', function () {
        window.application.renderScreen('renderone_screen');
    });
}
window.application.screens['rendeWinScreen'] = WinScreen;

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map