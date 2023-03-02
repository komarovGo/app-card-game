const { it, expect } = require('@jest/globals');
const reversCard = require('./sum');

it('must add a class to an array "shirt_pick"', () => {
    //Подготовка
    const sample1 = document.createElement('div');
    const sample2 = document.createElement('div');
    const sample3 = document.createElement('div');

    const Arraysample = [sample1, sample2, sample3];
    //Действие

    // Сверка
    expect(reversCard(Arraysample)).toBe(
        Arraysample[0].classList[0] === 'shirt_pick'
    );
});
