let popup = document.querySelector('#popup');
let submitBtn = document.querySelector('.btn');
let okBtn = popup.querySelector('button');

submitBtn.addEventListener("click", () => {
    popup.classList.add('open-popup');
});

okBtn.addEventListener("click", () => {
    popup.classList.remove('open-popup');
});
