// import './gameStart.js';
import './screen2.js';
import './style.css';
import './lossWin.js';

declare global {
    interface Window {
        application: any;
    }
}

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
    renderScreen: function (screenName: string) {
        if (!window.application.screens[screenName]) {
            console.warn('Такой страницы нет');
        } else {
            window.application.conteiner.innerHTML = '';
            window.application.cardField.innerHTML = '';
            this.screens[screenName]();
        }
    },
    renderBlock: function (blockName: string, conteiner: object) {
        if (!window.application.blocks[blockName]) {
            console.log('Такого блока нет');
        } else {
            this.blocks[blockName](conteiner);
        }
    },
};


