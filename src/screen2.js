function screenGameCard() {
    const conteiner = document.querySelector('.conteiner');
    conteiner.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper wrapper__screen2';

    const content = document.createElement('div');
    content.classList = 'content content__screen2';

    const timer = document.createElement('div');
    timer.classList = 'timer';

    const minSec = document.createElement('div');
    minSec.classList = 'min-sec';

    const min = document.createElement('p');
    min.classList = 'min';
    min.textContent = 'min';

    const sec = document.createElement('p');
    sec.classList = 'sec';
    sec.textContent = 'sec';

    const watch = document.createElement('div');
    watch.classList = 'watch';

    const m = document.createElement('div');
    m.classList = 'minuts';
    m.textContent = '00.';

    const s = document.createElement('div');
    s.classList = 'seconds';
    s.textContent = '00';

    const buttonStartOver = document.createElement('button');
    buttonStartOver.classList = 'button button__start-over';
    buttonStartOver.textContent = 'Начать заново';

    const cardField = document.createElement('div');
    cardField.classList = 'card-field';

    conteiner.appendChild(wrapper);
    wrapper.appendChild(content);
    content.appendChild(timer);
    timer.appendChild(minSec);
    minSec.appendChild(min);
    minSec.appendChild(sec);
    timer.appendChild(watch);
    watch.appendChild(m);
    watch.appendChild(s);
    content.appendChild(timer);
    content.appendChild(buttonStartOver);
    wrapper.appendChild(cardField);

    window.application.renderBlock('renderoneBlockCardField', cardField);

    let peremenMinuts = 0;
    let peremenSeconds = 0;
    function Tak() {
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
    }

    function taimer() {
        setInterval(Tak, 1000);
    }

    setTimeout(() => {
        taimer();
    }, 5000);

    buttonStartOver.addEventListener('click', () => {
        window.application.renderScreen('renderone_screen');
    });
}

window.application.screens['renderoneScreenGameCard'] = screenGameCard;

function blockCardField() {
    const cardFild = document.querySelector('.card-field');

    const tus = document.createElement('div');
    const cardTB = document.createElement('img');
    cardTB.src = './static/card/b/t-b.svg';
    cardTB.classList = 'card';
    const cardTBshirt = document.createElement('img');
    cardTBshirt.src = './static/cover-card.svg';
    cardTBshirt.classList = 'shirt shirt_pick';

    tus.appendChild(cardTB);
    tus.appendChild(cardTBshirt);

    cardFild.appendChild(tus);

    const tus2 = document.createElement('div');
    const cardTCH = document.createElement('img');
    cardTCH.src = './static/card/ch/t-ch.svg';
    cardTCH.classList = 'card';
    const cardTCHshirt = document.createElement('img');
    cardTCHshirt.src = './static/cover-card.svg';
    cardTCHshirt.classList = 'shirt shirt_pick';

    tus2.appendChild(cardTCH);
    tus2.appendChild(cardTCHshirt);

    cardFild.appendChild(tus2);

    const karol = document.createElement('div');
    const cardKK = document.createElement('img');
    cardKK.src = './static/card/k/KK.svg';
    cardKK.classList = 'card';
    const cardKKshirt = document.createElement('img');
    cardKKshirt.src = './static/cover-card.svg';
    cardKKshirt.classList = 'shirt shirt_pick';

    karol.appendChild(cardKK);
    karol.appendChild(cardKKshirt);
    cardFild.appendChild(karol);

    const karol2 = document.createElement('div');
    const cardKP = document.createElement('img');
    cardKP.src = './static/card/P/KP.svg';
    cardKP.classList = 'card';
    const cardKPshirt = document.createElement('img');
    cardKPshirt.src = './static/cover-card.svg';
    cardKPshirt.classList = 'shirt shirt_pick';

    karol2.appendChild(cardKP);
    karol2.appendChild(cardKPshirt);
    cardFild.appendChild(karol2);

    const dama = document.createElement('div');
    const cardDB = document.createElement('img');
    cardDB.src = './static/card/b/d-b.svg';
    cardDB.classList = 'card';
    const cardDBshirt = document.createElement('img');
    cardDBshirt.src = './static/cover-card.svg';
    cardDBshirt.classList = 'shirt shirt_pick';

    dama.appendChild(cardDB);
    dama.appendChild(cardDBshirt);
    cardFild.appendChild(dama);

    const dama2 = document.createElement('div');
    const cardDCH = document.createElement('img');
    cardDCH.src = './static/card/ch/d-ch.svg';
    cardDCH.classList = 'card';
    const cardDCHshirt = document.createElement('img');
    cardDCHshirt.src = './static/cover-card.svg';
    cardDCHshirt.classList = 'shirt shirt_pick';

    dama2.appendChild(cardDCH);
    dama2.appendChild(cardDCHshirt);
    cardFild.appendChild(dama2);

    const valet = document.createElement('div');
    const cardVK = document.createElement('img');
    cardVK.src = './static/card/k/VK.svg';
    cardVK.classList = 'card';
    const cardVKshirt = document.createElement('img');
    cardVKshirt.src = './static/cover-card.svg';
    cardVKshirt.classList = 'shirt shirt_pick';

    valet.appendChild(cardVK);
    valet.appendChild(cardVKshirt);
    cardFild.appendChild(valet);

    const valet2 = document.createElement('div');
    const cardVP = document.createElement('img');
    cardVP.src = './static/card/P/JP.svg';
    cardVP.classList = 'card';
    const cardVPshirt = document.createElement('img');
    cardVPshirt.src = './static/cover-card.svg';
    cardVPshirt.classList = 'shirt shirt_pick';

    valet2.appendChild(cardVP);
    valet2.appendChild(cardVPshirt);
    cardFild.appendChild(valet2);

    const ten = document.createElement('div');
    const cardTenB = document.createElement('img');
    cardTenB.src = './static/card/b/10-b.svg';
    cardTenB.classList = 'card';
    const cardTenBshirt = document.createElement('img');
    cardTenBshirt.src = './static/cover-card.svg';
    cardTenBshirt.classList = 'shirt shirt_pick';

    ten.appendChild(cardTenB);
    ten.appendChild(cardTenBshirt);
    cardFild.appendChild(ten);

    const ten2 = document.createElement('div');
    const cardTenCH = document.createElement('img');
    cardTenCH.src = './static/card/ch/10-ch.svg';
    cardTenCH.classList = 'card';
    const cardTenCHshirt = document.createElement('img');
    cardTenCHshirt.src = './static/cover-card.svg';
    cardTenCHshirt.classList = 'shirt shirt_pick';

    ten2.appendChild(cardTenCH);
    ten2.appendChild(cardTenCHshirt);
    cardFild.appendChild(ten2);

    const nine = document.createElement('div');
    const cardNineK = document.createElement('img');
    cardNineK.src = './static/card/k/9K.svg';
    cardNineK.classList = 'card';
    const cardNineKshirt = document.createElement('img');
    cardNineKshirt.src = './static/cover-card.svg';
    cardNineKshirt.classList = 'shirt shirt_pick';

    nine.appendChild(cardNineK);
    nine.appendChild(cardNineKshirt);
    cardFild.appendChild(nine);

    const nine2 = document.createElement('div');
    const cardNineP = document.createElement('img');
    cardNineP.src = './static/card/P/9P.svg';
    cardNineP.classList = 'card';
    const cardNinePshirt = document.createElement('img');
    cardNinePshirt.src = './static/cover-card.svg';
    cardNinePshirt.classList = 'shirt shirt_pick';

    nine2.appendChild(cardNineP);
    nine2.appendChild(cardNinePshirt);
    cardFild.appendChild(nine2);

    const eight = document.createElement('div');
    const cardEightB = document.createElement('img');
    cardEightB.src = './static/card/b/8-b.svg';
    cardEightB.classList = 'card';
    const cardEightBshirt = document.createElement('img');
    cardEightBshirt.src = './static/cover-card.svg';
    cardEightBshirt.classList = 'shirt shirt_pick';

    eight.appendChild(cardEightB);
    eight.appendChild(cardEightBshirt);
    cardFild.appendChild(eight);

    const eight2 = document.createElement('div');
    const cardEightCH = document.createElement('img');
    cardEightCH.src = './static/card/ch/8-ch.svg';
    cardEightCH.classList = 'card';
    const cardEightCHshirt = document.createElement('img');
    cardEightCHshirt.src = './static/cover-card.svg';
    cardEightCHshirt.classList = 'shirt shirt_pick';

    eight2.appendChild(cardEightCH);
    eight2.appendChild(cardEightCHshirt);
    cardFild.appendChild(eight2);

    const seven = document.createElement('div');
    const cardSevenK = document.createElement('img');
    cardSevenK.src = './static/card/k/7K.svg';
    cardSevenK.classList = 'card';
    const cardSevenKshirt = document.createElement('img');
    cardSevenKshirt.src = './static/cover-card.svg';
    cardSevenKshirt.classList = 'shirt shirt_pick';

    seven.appendChild(cardSevenK);
    seven.appendChild(cardSevenKshirt);
    cardFild.appendChild(seven);

    const seven2 = document.createElement('div');
    const cardSevenP = document.createElement('img');
    cardSevenP.src = './static/card/P/7P.svg';
    cardSevenP.classList = 'card';
    const cardSevenPshirt = document.createElement('img');
    cardSevenPshirt.src = './static/cover-card.svg';
    cardSevenPshirt.classList = 'shirt shirt_pick';

    seven2.appendChild(cardSevenP);
    seven2.appendChild(cardSevenPshirt);
    cardFild.appendChild(seven2);

    const six = document.createElement('div');
    const cardSixB = document.createElement('img');
    cardSixB.src = './static/card/b/6-b.svg';
    cardSixB.classList = 'card';
    const cardSixBshirt = document.createElement('img');
    cardSixBshirt.src = './static/cover-card.svg';
    cardSixBshirt.classList = 'shirt shirt_pick';

    six.appendChild(cardSixB);
    six.appendChild(cardSixBshirt);
    cardFild.appendChild(six);

    const six2 = document.createElement('div');
    const cardSixCH = document.createElement('img');
    cardSixCH.src = './static/card/ch/6-ch.svg';
    cardSixCH.classList = 'card';
    const cardSixCHshirt = document.createElement('img');
    cardSixCHshirt.src = './static/cover-card.svg';
    cardSixCHshirt.classList = 'shirt shirt_pick';

    six2.appendChild(cardSixCH);
    six2.appendChild(cardSixCHshirt);
    cardFild.appendChild(six2);

    let faceCard = [
        tus,
        tus2,
        karol,
        karol2,
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

    function sortCard(faceCard) {
        return faceCard.sort(function () {
            return 0.5 - Math.random();
        });
    }

    sortCard(faceCard);

    // window.application.cards = faceCard;

    // let shirtCard = [
    //     cardTB,
    //     cardTCH,
    //     cardKK,
    //     cardKP,
    //     cardDB,
    //     cardDCH,
    //     cardVK,
    //     cardVP,
    //     cardTenB,
    //     cardTenCH,
    //     cardNineK,
    //     cardNineP,
    //     cardEightB,
    //     cardEightCH,
    //     cardSevenK,
    //     cardSevenP,
    //     cardSixB,
    //     cardSixCH,
    // ];

    // function fusShirtCard(shirtCard) {
    //     for (let i = 0; i < shirtCard.length; i++) {
    //         shirtCard[i].classList.remove('shirt_pick');
    //     }
    // }
    // setTimeout((id) => {
    //     fusShirtCard(shirtCard);
    // }, 5000);
}

window.application.blocks['renderoneBlockCardField'] = blockCardField;
