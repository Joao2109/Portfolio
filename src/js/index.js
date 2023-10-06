$(function () {
    const profile = document.querySelector('#profile-pic');
    const background = document.querySelector('#profile-pic-fixed');
    const image = document.querySelector('#profile-pic-fixed img');
    const content = document.querySelectorAll('.content')
    profile.addEventListener('click', () => {
        $('#profile-pic-fixed').fadeIn(200);
        $('#profile-pic-fixed img').animate({width: '90vh'},200);
    })
    background.addEventListener('click', () => {
        $('#profile-pic-fixed').fadeOut(200);
        $('#profile-pic-fixed img').animate({width: '0'},200);
    })
    image.addEventListener('click', (e) => {
        e.stopPropagation();
    })
    content.forEach((anim, index)=>{
        anim.addEventListener('mouseover',()=>{
            $('.content:eq('+index+')').animate({maxWidth: '1200px'},200);
        })
        anim.addEventListener('mouseleave',()=>{
            $('.content:eq('+index+')').animate({maxWidth: '1000px'},200);
        })
    })
})
