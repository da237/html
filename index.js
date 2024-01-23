const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function(){
    alert('Sabia que querias picarona')
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover',function(){
    const randomx = parseInt(Math.random()*100);
    const randomy = parseInt(Math.random()*100);

    nobtn.style.setProperty('top',randomy+'%');
    nobtn.style.setProperty('left',randomx+'%');

    nobtn.style.setProperty('transform',`traslate(-${randomx}%,-${randomy}%)`);
})