(() => {
    window.application = {
        selecteLevel: {},
        blocks: {},
        screens: {},
        renderScreen: function (o) {
            (e.innerHTML = ''), this.screens[o]();
        },
        renderBlock: function (e, o) {
            window.application.blocks[e]
                ? this.blocks[e](o)
                : console.log('Такого блока нет');
        },
        watch: [],
        card: {},
        clickUserCard: {},
    };
    const e = document.querySelector('.conteiner'),
        o = document.querySelectorAll('.button__lvl'),
        c = document.querySelector('.btn-1'),
        t = document.querySelector('.btn-2'),
        l = document.querySelector('.btn-3');
    o.forEach((e) => {
        e.addEventListener('click', (e) => {
            const o = e.target,
                s = o.textContent;
            '1' === s
                ? ((window.application.selecteLevel = s),
                  o.classList.add('add__color'),
                  t.classList.remove('add__color'),
                  l.classList.remove('add__color'))
                : '2' === s
                ? ((window.application.selecteLevel = s),
                  o.classList.add('add__color'),
                  c.classList.remove('add__color'),
                  l.classList.remove('add__color'))
                : '3' === s &&
                  ((window.application.selecteLevel = s),
                  o.classList.add('add__color'),
                  c.classList.remove('add__color'),
                  t.classList.remove('add__color')),
                (n.disabled = !1),
                n.classList.remove('button__hiding');
        });
    });
    const n = document.querySelector('.button__start');
    (n.disabled = !0),
        n.addEventListener('click', () => {
            '1' === window.application.selecteLevel ||
            '2' === window.application.selecteLevel
                ? window.application.renderScreen('renderScreenFieldShirtUp')
                : '3' === window.application.selecteLevel &&
                  (location.href = '/screen2.html');
        });
})();
