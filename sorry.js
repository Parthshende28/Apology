const img = document.querySelector('.img')
const text = document.querySelector('.text');
const btnRed = document.querySelector('.btn-red');
const btnGreen = document.querySelector('.btn-green');

const saySorry = function () {
    text.classList.remove('hidden');
}

const accepted = function () {
    text.classList.add('hidden');
    alert("Thank you so much Mia Cara ❤️")
}
const sorryAgain = function () {
    text.classList.remove('hidden');
    alert("Please call on 9145402183, atleast we can talk about it 🥺")
}

img.addEventListener('click', saySorry);

btnRed.addEventListener('click', sorryAgain);

btnGreen.addEventListener('click', accepted);
