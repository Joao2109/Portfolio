var pic = {
    display: document.getElementById('profile-pic'),
    bg: document.getElementById('profile-pic-fixed'),
    img: document.querySelector('#profile-pic-fixed img'),
};
pic.display.addEventListener('click', () => {
    pic.bg.classList.add('show');
})
pic.bg.addEventListener('click', () => {
    pic.bg.classList.remove('show');
})
pic.img.addEventListener('click', (e) => {
    e.stopPropagation();
})
setInterval(() => {

}, 1000 / 60);