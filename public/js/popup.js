// Change vue of popup
const changeBackGround = document.querySelector('#jajaja-change-bg');
const changeMusic = document.querySelector('#jajaja-change-music');
const changeMenu = document.querySelector('#jajaja-change-howto');
const popupContent = document.querySelector('.jajaja-popup-content');
const popupBackground = document.querySelector('.popup-background');
const modalBgWrapperCloser = document.querySelector('#modal-bg-close');
const changeClock = document.querySelector('#jajaja-change-clock');
const popupClock = document.querySelector('.popup-clock');
const modalHourWrapperCloser = document.querySelector('#modal-popup-close');


changeBackGround.addEventListener('click', () =>{
    popupBackground.style.display = 'block'
    popupClock.style.display = 'none'
})

modalBgWrapperCloser.addEventListener('click',() =>{
    popupBackground.style.display = 'none'
})



changeClock.addEventListener('click', () =>{
    popupClock.style.display = 'block';
    popupBackground.style.display = 'none'
})

modalHourWrapperCloser.addEventListener('click',() =>{
    popupClock.style.display = 'none'
})


// CHANGE BACKGROUND 

const bg1 = document.querySelector('#jajaja-bg-1');
const bg2 = document.querySelector('#jajaja-bg-2');
const bg3 = document.querySelector('#jajaja-bg-3');
const bg4 = document.querySelector('#jajaja-bg-4');
const bg5 = document.querySelector('#jajaja-bg-5');
const bg6 = document.querySelector('#jajaja-bg-6');
const bg7 = document.querySelector('#jajaja-bg-7');
const jajajaSection = document.querySelector('.jajaja-section-1')

bg1.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-1');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-5','bg-6','bg-7');
});

bg2.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-2');
    jajajaSection.classList.remove('bg-1','bg-3','bg-4','bg-5','bg-6','bg-7');
});

bg3.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-3');
    jajajaSection.classList.remove('bg-2','bg-1','bg-4','bg-5','bg-6','bg-7');
});

bg4.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-4');
    jajajaSection.classList.remove('bg-2','bg-3','bg-1','bg-5','bg-6','bg-7');
});

bg5.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-5');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-1','bg-6','bg-7');
});

bg6.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-6');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-5','bg-1','bg-7');
});

bg7.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-7');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-5','bg-6','bg-1');
});






