window.application = {
    selecteLevel: {},
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        conteiner.innerHTML = '';
        this.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        if (!window.application.blocks[blockName]) {
            console.log('Такого блока нет');
        } else {
            this.blocks[blockName](container);
        }
    },
    watch: [],
    card: {},
    clickUserCard: {},
};

const conteiner = document.querySelector('.conteiner');
const buttonLvlSelec = document.querySelectorAll('.button__lvl');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');

buttonLvlSelec.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const target = event.target;
        const textContent = target.textContent;
        if (textContent === '1') {
            window.application.selecteLevel = textContent;
            target.classList.add('add__color');
            btn2.classList.remove('add__color');
            btn3.classList.remove('add__color');
        } else if (textContent === '2') {
            window.application.selecteLevel = textContent;
            target.classList.add('add__color');
            btn1.classList.remove('add__color');
            btn3.classList.remove('add__color');
        } else if (textContent === '3') {
            window.application.selecteLevel = textContent;
            target.classList.add('add__color');
            btn1.classList.remove('add__color');
            btn2.classList.remove('add__color');
        }
        buttonStart.disabled = false;
        buttonStart.classList.remove('button__hiding');
    });
});

const buttonStart = document.querySelector('.button__start');
buttonStart.disabled = true;

buttonStart.addEventListener('click', () => {
    if (window.application.selecteLevel === '1') {
        window.application.renderScreen('renderScreenFieldShirtUp');
    } else if (window.application.selecteLevel === '2') {
        window.application.renderScreen('renderScreenFieldShirtUp');
    } else if (window.application.selecteLevel === '3') {
        location.href = '/screen2.html';
    }
});
