const shutters = [...document.querySelectorAll('.shutter div')];
const body = document.querySelector('body');
const openBtn = document.querySelector('.open-btn');
const container = document.querySelector('.container');
const road = document.querySelector('.road');

let left_cor = [`-100%`, `-20%`, `60%`, `100%`];

const openShutter = () => {
    body.style.background = '#fff';
    shutters.forEach((item, i) => {
        let top_cor = `-100%`;
        if (i >= 4){
            top_cor = `140%`;
            i = i - 4;
        }

        item.style.top = top_cor;
        item.style.left = left_cor[i];
    })
}

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    setTimeout(() => {
        openShutter();
    }, 500);
    setTimeout(() => {
        shutters[0].parentNode.style.display = 'none';
        container.style.display = 'flex';
    }, 2500);

    setTimeout(() => {
        road.style.animation = `slide-out 1s forwards 1`;
    }, 7000);
})