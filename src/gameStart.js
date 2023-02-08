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
        } else {
            window.application.conteiner.innerHTML = '';
            window.application.cardField.innerHTML = '';
            this.screens[screenName]();
        }
    },
    renderBlock: function (blockName, conteiner) {
        if (!window.application.blocks[blockName]) {
            console.log('Такого блока нет');
        } else {
            this.blocks[blockName](conteiner);
        }
    },
};

// Начальный экран
function oneScreen() {
    const wrapper = document.createElement('div');

    const content = document.createElement('div');
    content.classList = 'content content__screen1';

    const title = document.createElement('h2');
    title.classList = 'title';
    title.textContent = 'Выбери сложность';

    const menubuttons = document.createElement('div');
    menubuttons.classList = 'button__lvl';

    const btn1 = document.createElement('button');
    btn1.classList = 'btn btn-1';
    btn1.textContent = '1';

    const btn2 = document.createElement('button');
    btn2.classList = 'btn btn-2';
    btn2.textContent = '2';

    const btn3 = document.createElement('button');
    btn3.classList = 'btn btn-3';
    btn3.textContent = '3';

    const buttonStartGame = document.createElement('button');
    buttonStartGame.classList = 'button button__start-game button__hiding';
    buttonStartGame.textContent = 'Старт';
    window.application.conteiner.appendChild(wrapper);

    wrapper.appendChild(content);
    content.appendChild(title);
    content.appendChild(menubuttons);
    menubuttons.appendChild(btn1);
    menubuttons.appendChild(btn2);
    menubuttons.appendChild(btn3);
    content.appendChild(buttonStartGame);

    const buttonLvlSelec = document.querySelectorAll('.button__lvl');
    buttonLvlSelec.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const target = event.target;
            const textContent = target.textContent;
            if (textContent === '1') {
                window.application.levels = textContent;
                target.classList.add('add__color');
                btn2.classList.remove('add__color');
                btn3.classList.remove('add__color');
            } else if (textContent === '2') {
                window.application.levels = textContent;
                target.classList.add('add__color');
                btn1.classList.remove('add__color');
                btn3.classList.remove('add__color');
            } else if (textContent === '3') {
                window.application.levels = textContent;
                target.classList.add('add__color');
                btn1.classList.remove('add__color');
                btn2.classList.remove('add__color');
            }
            buttonStart.disabled = false;
            buttonStart.classList.remove('button__hiding');
        });
    });
    const buttonStart = document.querySelector('.button__start-game');
    buttonStart.disabled = true;

    buttonStart.addEventListener('click', () => {
        if (window.application.levels === '1') {
            window.application.renderScreen('renderGame');
        } else if (window.application.levels === '2') {
            window.application.renderScreen('renderGame');
        } else if (window.application.levels === '3') {
            window.application.renderScreen('renderGame');
        }
    });
}
window.application.screens['renderone_screen'] = oneScreen;
window.application.renderScreen('renderone_screen');
