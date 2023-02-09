
function BlocksGameCard() {
    const content = document.createElement('div');
    content.classList.add('content content__screen2');

    const timer = document.createElement('div');
    timer.classList.add('timer');

    const minSec = document.createElement('div');
    minSec.classList.add('min-sec');

    const min = document.createElement('p');
    min.classList.add('min');
    min.textContent = 'min';

    const sec = document.createElement('p');
    sec.classList.add('sec');
    sec.textContent = 'sec';

    const watch = document.createElement('div');
    watch.classList.add('watch');

    const m = document.createElement('h3');
    m.classList.add('minuts');
    m.textContent = '00.';

    const s = document.createElement('h3');
    s.classList.add('seconds');
    s.textContent = '00';

    const buttonStartOver = document.createElement('button');
    buttonStartOver.classList.add('button button__start-over');
    buttonStartOver.textContent = 'Начать заново';

    const cardField = document.createElement('div');
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
    const nemberMin = document.getElementsByTagName('h3')[0];
    const nemberSecond = document.getElementsByTagName('h3')[1];

    let peremenMinuts = 0;
    let peremenSeconds = 0;
    function tikTak() {
        peremenSeconds++;
        if (peremenSeconds <= 9) {
            s.innerHTML = `0${peremenSeconds}`;
        }
        if (peremenSeconds > 9) {
            s.innerHTML = `${peremenSeconds}`;
        }
        if (peremenSeconds > 59) {
            peremenMinuts++;
            peremenSeconds = 0;
            m.innerHTML = `0${peremenMinuts}.`;
        }
        if (peremenMinuts > 9) {
            m.innerHTML = `${peremenMinuts}.`;
        }

        window.application.watch = `${nemberMin.textContent}${nemberSecond.textContent}`;
        console.log(window.application.watch);
    }

    function taimer() {
        setInterval(tikTak, 1000);
    }

    setTimeout(() => {
        taimer();
    }, 5000);

    buttonStartOver.addEventListener('click', () => {
        console.log(`Время на игру - ${window.application.watch}`);
        window.application.idCards = [];
        console.log(`Время на игру - ${window.application.idCards}`);

        window.application.renderScreen('renderone_screen');
    });
}

window.application.blocks['rendeBlocksGameCard'] = BlocksGameCard;

function blockCardField() {
    const tus = document.createElement('div');
    tus.classList.add('box');
    const cardTB = document.createElement('img');
    cardTB.src = './static/card/b/t-b.svg';
    cardTB.classList.add( 'card');
    const cardTBshirt = document.createElement('img');
    cardTBshirt.src = './static/cover-card.svg';
    cardTBshirt.classList.add('shirt');
    cardTBshirt.id = 'tus';

    tus.appendChild(cardTB);
    tus.appendChild(cardTBshirt);

    const tus2 = document.createElement('div');
    tus2.classList.add('box');
    const cardTCH = document.createElement('img');
    cardTCH.src = './static/card/ch/t-ch.svg';
    cardTCH.classList.add('card') ;
    const cardTCHshirt = document.createElement('img');
    cardTCHshirt.src = './static/cover-card.svg';
    cardTCHshirt.classList.add('shirt');
    cardTCHshirt.id = 'tus';

    tus2.appendChild(cardTCH);
    tus2.appendChild(cardTCHshirt);

    const korol = document.createElement('div');
    korol.classList.add('box');
    const cardKK = document.createElement('img');
    cardKK.src = './static/card/k/KK.svg';
    cardKK.classList.add('card');
    const cardKKshirt = document.createElement('img');
    cardKKshirt.src = './static/cover-card.svg';
    cardKKshirt.classList.add('shirt');
    cardKKshirt.id = 'korol';

    korol.appendChild(cardKK);
    korol.appendChild(cardKKshirt);

    const korol2 = document.createElement('div');
    korol2.classList.add('box');
    const cardKP = document.createElement('img');
    cardKP.src = './static/card/P/KP.svg';
    cardKP.classList.add('card') ;
    const cardKPshirt = document.createElement('img');
    cardKPshirt.src = './static/cover-card.svg';
    cardKPshirt.classList.add('shirt') ;
    cardKPshirt.id = 'korol';

    korol2.appendChild(cardKP);
    korol2.appendChild(cardKPshirt);

    const dama = document.createElement('div');
    dama.classList.add('box');
    const cardDB = document.createElement('img');
    cardDB.src = './static/card/b/d-b.svg';
    cardDB.classList.add('card') ;
    const cardDBshirt = document.createElement('img');
    cardDBshirt.src = './static/cover-card.svg';
    cardDBshirt.classList.add('shirt');
    cardDBshirt.id = 'dama';

    dama.appendChild(cardDB);
    dama.appendChild(cardDBshirt);

    const dama2 = document.createElement('div');
    dama2.classList.add('box') ;
    const cardDCH = document.createElement('img');
    cardDCH.src = './static/card/ch/d-ch.svg';
    cardDCH.classList.add('card');
    const cardDCHshirt = document.createElement('img');
    cardDCHshirt.src = './static/cover-card.svg';
    cardDCHshirt.classList.add('shirt');
    cardDCHshirt.id = 'dama';

    dama2.appendChild(cardDCH);
    dama2.appendChild(cardDCHshirt);

    const valet = document.createElement('div');
    valet.classList.add('box');
    const cardVK = document.createElement('img');
    cardVK.src = './static/card/k/VK.svg';
    cardVK.classList.add('card');
    const cardVKshirt = document.createElement('img');
    cardVKshirt.src = './static/cover-card.svg';
    cardVKshirt.classList.add('shirt');
    cardVKshirt.id = 'valet';

    valet.appendChild(cardVK);
    valet.appendChild(cardVKshirt);

    const valet2 = document.createElement('div');
    valet2.classList.add('box');
    const cardVP = document.createElement('img');
    cardVP.src = './static/card/P/JP.svg';
    cardVP.classList.add('card') ;
    const cardVPshirt = document.createElement('img');
    cardVPshirt.src = './static/cover-card.svg';
    cardVPshirt.classList.add('shirt') ;
    cardVPshirt.id = 'valet';

    valet2.appendChild(cardVP);
    valet2.appendChild(cardVPshirt);

    const ten = document.createElement('div');
    ten.classList.add('box');
    const cardTenB = document.createElement('img');
    cardTenB.src = './static/card/b/10-b.svg';
    cardTenB.classList.add('card');
    const cardTenBshirt = document.createElement('img');
    cardTenBshirt.src = './static/cover-card.svg';
    cardTenBshirt.classList.add('shirt') ;
    cardTenBshirt.id = 'ten';

    ten.appendChild(cardTenB);
    ten.appendChild(cardTenBshirt);

    const ten2 = document.createElement('div');
    ten2.classList.add('box');
    const cardTenCH = document.createElement('img');
    cardTenCH.src = './static/card/ch/10-ch.svg';
    cardTenCH.classList.add('card') ;
    const cardTenCHshirt = document.createElement('img');
    cardTenCHshirt.src = './static/cover-card.svg';
    cardTenCHshirt.classList.add('shirt');
    cardTenCHshirt.id = 'ten';

    ten2.appendChild(cardTenCH);
    ten2.appendChild(cardTenCHshirt);

    const nine = document.createElement('div');
    nine.classList.add('box');
    const cardNineK = document.createElement('img');
    cardNineK.src = './static/card/k/9K.svg';
    cardNineK.classList.add('card') ;
    const cardNineKshirt = document.createElement('img');
    cardNineKshirt.src = './static/cover-card.svg';
    cardNineKshirt.classList.add('shirt') ;
    cardNineKshirt.id = 'nine';

    nine.appendChild(cardNineK);
    nine.appendChild(cardNineKshirt);

    const nine2 = document.createElement('div');
    nine2.classList.add('box');
    const cardNineP = document.createElement('img');
    cardNineP.src = './static/card/P/9P.svg';
    cardNineP.classList.add('card') ;
    const cardNinePshirt = document.createElement('img');
    cardNinePshirt.src = './static/cover-card.svg';
    cardNinePshirt.classList.add('shirt') ;
    cardNinePshirt.id = 'nine';

    nine2.appendChild(cardNineP);
    nine2.appendChild(cardNinePshirt);

    const eight = document.createElement('div');
    eight.classList.add('box') ;
    const cardEightB = document.createElement('img');
    cardEightB.src = './static/card/b/8-b.svg';
    cardEightB.classList.add('card') ;
    const cardEightBshirt = document.createElement('img');
    cardEightBshirt.src = './static/cover-card.svg';
    cardEightBshirt.classList.add('shirt');
    cardEightBshirt.id = 'eight';

    eight.appendChild(cardEightB);
    eight.appendChild(cardEightBshirt);

    const eight2 = document.createElement('div');
    eight2.classList.add('box') ;
    const cardEightCH = document.createElement('img');
    cardEightCH.src = './static/card/ch/8-ch.svg';
    cardEightCH.classList.add('card') ;
    const cardEightCHshirt = document.createElement('img');
    cardEightCHshirt.src = './static/cover-card.svg';
    cardEightCHshirt.classList.add('shirt');
    cardEightCHshirt.id = 'eight';

    eight2.appendChild(cardEightCH);
    eight2.appendChild(cardEightCHshirt);

    const seven = document.createElement('div');
    seven.classList.add('box') ;
    const cardSevenK = document.createElement('img');
    cardSevenK.src = './static/card/k/7K.svg';
    cardSevenK.classList.add('card') ;
    const cardSevenKshirt = document.createElement('img');
    cardSevenKshirt.src = './static/cover-card.svg';
    cardSevenKshirt.classList.add('shirt');
    cardSevenKshirt.id = 'seven';

    seven.appendChild(cardSevenK);
    seven.appendChild(cardSevenKshirt);

    const seven2 = document.createElement('div');
    seven2.classList.add('box') ;
    const cardSevenP = document.createElement('img');
    cardSevenP.src = './static/card/P/7P.svg';
    cardSevenP.classList.add('card') ;
    const cardSevenPshirt = document.createElement('img');
    cardSevenPshirt.src = './static/cover-card.svg';
    cardSevenPshirt.classList.add('shirt');
    cardSevenPshirt.id = 'seven';

    seven2.appendChild(cardSevenP);
    seven2.appendChild(cardSevenPshirt);

    const six = document.createElement('div');
    six.classList.add('box') ;
    const cardSixB = document.createElement('img');
    cardSixB.src = './static/card/b/6-b.svg';
    cardSixB.classList.add('card') ;
    const cardSixBshirt = document.createElement('img');
    cardSixBshirt.src = './static/cover-card.svg';
    cardSixBshirt.classList.add('shirt');
    cardSixBshirt.id = 'six';

    six.appendChild(cardSixB);
    six.appendChild(cardSixBshirt);

    const six2 = document.createElement('div');
    six2.classList.add('box') ;
    const cardSixCH = document.createElement('img');
    cardSixCH.src = './static/card/ch/6-ch.svg';
    cardSixCH.classList.add('card') ;
    const cardSixCHshirt = document.createElement('img');
    cardSixCHshirt.src = './static/cover-card.svg';
    cardSixCHshirt.classList.add('shirt');
    cardSixCHshirt.id = 'six';

    six2.appendChild(cardSixCH);
    six2.appendChild(cardSixCHshirt);

    let boxCard = [
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

    function sortCard(boxCard: any) {
        return boxCard.sort(function () {
            return 0.5 - Math.random();
        });
    }

    sortCard(boxCard);

    window.application.cards = boxCard;
    let shirtCard = [
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

    function reversCard(shirtCard: any) {
        for (let i = 0; i < shirtCard.length; i++) {
            shirtCard[i].classList.add('shirt_pick');
        }
    }
    setTimeout(() => {
        reversCard(shirtCard);
    }, 5000);

    boxCard.forEach((pick) => {
        pick.addEventListener('click', (event) => {
            const target: any = event.target;
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
        } else {
            window.application.idCards = [];
            window.application.renderScreen('rendelossScreen');
        }
    }
}

window.application.blocks['renderBlockCardField'] = blockCardField;

function blockPlayingField() {
    if (window.application.levels === '3') {
        for (let i = 0; i < window.application.cards.length; i++) {
            window.application.cardField.appendChild(
                window.application.cards[i]
            );
            window.application.conteiner.appendChild(
                window.application.cardField
            );
        }
    } else if (window.application.levels === '2') {
        for (let i = 6; i < window.application.cards.length; i++) {
            window.application.cardField.appendChild(
                window.application.cards[i]
            );
            window.application.conteiner.appendChild(
                window.application.cardField
            );
        }
    } else if (window.application.levels === '1') {
        for (let i = 12; i < window.application.cards.length; i++) {
            window.application.cardField.appendChild(
                window.application.cards[i]
            );
            window.application.conteiner.appendChild(
                window.application.cardField
            );
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
