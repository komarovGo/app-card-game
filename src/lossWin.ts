function lossScreen() {
    const wrapper = document.createElement('div');

    const content = document.createElement('div');
    content.classList.add('content content__loss-win');

    const emoji = document.createElement('img');
    emoji.src = './static/smail.svg';
    emoji.classList.add('emoji');

    const title = document.createElement('h2');
    title.classList.add('title title__loss');
    title.textContent = 'Вы проиграли!';

    const paragraph = document.createElement('h2');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Затраченное время:';

    const minuts = document.createElement('div');
    minuts.classList.add('watch watch__loss');
    minuts.textContent = window.application.watch;

    const buttonStartGame = document.createElement('button');
    buttonStartGame.classList.add('button button__start-over');
    buttonStartGame.textContent = 'Играть снова';

    wrapper.appendChild(content);
    content.appendChild(emoji);
    content.appendChild(title);
    content.appendChild(paragraph);
    content.appendChild(minuts);
    content.appendChild(buttonStartGame);

    window.application.conteiner.appendChild(content);

    buttonStartGame.addEventListener('click', () => {
        window.application.renderScreen('renderone_screen');
    });
}

window.application.screens['rendelossScreen'] = lossScreen;

function WinScreen() {
    const wrapper = document.createElement('div');

    const content = document.createElement('div');
    content.classList.add('content content__loss-win');

    const emoji = document.createElement('img');
    emoji.src = './static/Image.svg';
    emoji.classList.add('emoji');

    const title = document.createElement('h2');
    title.classList.add('title title__loss');
    title.textContent = 'Вы выиграли!';

    const paragraph = document.createElement('h2');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Затраченное время:';

    const minuts = document.createElement('div');
    minuts.classList.add('watch watch__loss');
    minuts.textContent = window.application.watch;

    const buttonStartGame = document.createElement('button');
    buttonStartGame.classList.add('button button__start-over');
    buttonStartGame.textContent = 'Играть снова';

    wrapper.appendChild(content);
    content.appendChild(emoji);
    content.appendChild(title);
    content.appendChild(paragraph);
    content.appendChild(minuts);
    content.appendChild(buttonStartGame);

    window.application.conteiner.appendChild(content);

    buttonStartGame.addEventListener('click', () => {
        window.application.renderScreen('renderone_screen');
    });
}

window.application.screens['rendeWinScreen'] = WinScreen;
