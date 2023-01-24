console.log(window.application);

const fieldCard = document.querySelector('.field-card');
//Экран легкого уровня
function blockEzGame() {
    const ryd1 = document.createElement('div');
    ryd1.classList = 'ryad 1ryad';

    const cardBox1 = document.createElement('div');
    cardBox1.classList = 'card-box';

    const cardTP = document.createElement('img');
    cardTP.src = ' ../static/card/P/туз пики.jpg';
    cardTP.classList = 'card card__t-v';

    const cardBagraund = document.createElement('img');
    cardBagraund.src = '../static/cover-card.svg';
    cardBagraund.classList = 'card_bagraund';

    


    const cardTV = document.createElement('div');
    cardTV.classList = 'card card__t-v';

    const cardBox2 = document.createElement('div');
    cardBox2.classList = 'card-box';

    const cardTK = document.createElement('div');
    cardTK.classList = 'card card__t-k';

    const cardBox3 = document.createElement('div');
    cardBox3.classList = 'card-box';

    const cardTenCH = document.createElement('div');
    cardTenCH.classList = 'card card__10-ch';

    const cardBox4 = document.createElement('div');
    cardBox4.classList = 'card-box';

    const cardTenP = document.createElement('div');
    cardTenP.classList = 'card card__10-b';

    const cardBox5 = document.createElement('div');
    cardBox5.classList = 'card-box';

    const card1SixCH = document.createElement('div');
    card1SixCH.classList = 'card card__6-v';

    const cardBox6 = document.createElement('div');
    cardBox6.classList = 'card-box';

    const cardSixK = document.createElement('div');
    cardSixK.classList = 'card card__6-k';

    fieldCard.appendChild(ryd1);
    ryd1.appendChild(cardBox1);
    cardBox1.appendChild(cardTP);
    cardBox1.appendChild(cardBagraund);

    ryd1.appendChild(cardBox2);
    cardBox2.appendChild(cardTK);

    ryd1.appendChild(cardBox3);
    cardBox3.appendChild(cardTenCH);

    ryd1.appendChild(cardBox4);
    cardBox4.appendChild(cardTenP);

    ryd1.appendChild(cardBox5);
    cardBox5.appendChild(card1SixCH);

    ryd1.appendChild(cardBox6);
    cardBox6.appendChild(cardSixK);


}

blockEzGame();

// Секундомер
const numberMin = document.querySelector('.number_min');
const numberSec = document.querySelector('.number_sec');

let minute = 00;
let seconds = 00;

function startTimer() {
    seconds++;
    if (seconds <= 9) {
        numberSec.innerText = '0' + seconds 
    }
    if (seconds > 9) {
        numberSec.innerText = +seconds;
    }
    if (seconds > 59) {
        minute++;
        numberMin.innerText = `0${minute}. `;
        seconds = 0;
    }
}

setInterval(startTimer, 1000);
