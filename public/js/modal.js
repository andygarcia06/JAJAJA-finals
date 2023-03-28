// window.onload = function(){
//     alert('the script is running')
// };

const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");
function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", ()=>{
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});


// MODAL

let closeModalBtn = document.querySelector('.close-btn');
let closeModalBtn2 = document.querySelector('.close-btn-2');
let openModalBtn = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.wrapper');

function openModal() {
    modal.style.display = 'block';
    modal.style.zIndex = 100000000;
};

function closeModal() {
    modal.style.display = 'none';
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click',closeModal);
closeModalBtn2.addEventListener('click',closeModal);


wrapper.addEventListener('click', ()=>{
    wrapper.style.zIndex = 1000;
    wrapper.style.position = 'absolute';
    modalRecipeWrapper.style.zIndex = 'auto';
    modalSocialWrapper.style.zIndex = 'auto';
    modalAllRecipeWrapper.style.zIndex = 'auto';
    modalMusicWrapper.style.zIndex = 'auto';
});





// MODAL ALLRECIPE

const openModalAllRecipeBtn = document.querySelector('#open-modal-all-recipe')
const closeModalAllRecipeBtn = document.querySelector('.modal-all-recipe-close-btn')
const modalAllRecipeWrapper = document.querySelector(".modal-all-recipe-wrapper"),
ModalAllRecipeHeader = modalAllRecipeWrapper.querySelector(".modal-all-recipe-header");
function onDrag4({movementX, movementY}){
  let getModalAllRecipeStyle = window.getComputedStyle(modalAllRecipeWrapper);
  let leftModalAllRecipeVal = parseInt(getModalAllRecipeStyle.left);
  let topModalAllRecipeVal = parseInt(getModalAllRecipeStyle.top);
  modalAllRecipeWrapper.style.left = `${leftModalAllRecipeVal + movementX}px`;
  modalAllRecipeWrapper.style.top = `${topModalAllRecipeVal + movementY}px`;
}
ModalAllRecipeHeader.addEventListener("mousedown", ()=>{
    ModalAllRecipeHeader.classList.add("active");
    ModalAllRecipeHeader.addEventListener("mousemove", onDrag4);
});
document.addEventListener("mouseup", ()=>{
    ModalAllRecipeHeader.classList.remove("active");
    ModalAllRecipeHeader.removeEventListener("mousemove", onDrag4);
});

function openAllRecipeModal() {
    modalAllRecipeWrapper.style.zIndex = 1000000000;
    modalAllRecipeWrapper.style.display = 'block';
};

function closeAllRecipeModal() {
    modalAllRecipeWrapper.style.display = 'none';
};

openModalAllRecipeBtn.addEventListener('click', openAllRecipeModal);
closeModalAllRecipeBtn.addEventListener('click',closeAllRecipeModal);

modalAllRecipeWrapper.addEventListener('click', ()=>{
    modalAllRecipeWrapper.style.zIndex = 1000000000;
    modalAllRecipeWrapper.style.position = 'absolute';
    wrapper.style.zIndex = 'auto';
    modalRecipeWrapper.style.zIndex = 'auto';
    modalSocialWrapper.style.zIndex = 'auto';
    modalMusicWrapper.style.zIndex = 'auto';
});

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
const jajajaSection = document.querySelector('.jajaja-section-1')

bg1.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-1');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-5','bg-6');
    wrapper.classList.remove('wrapper-grabbed');
    wrapper.classList.remove('wrapper-cover');


});

bg2.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-2');
    jajajaSection.classList.remove('bg-1','bg-3','bg-4','bg-5','bg-6');
    wrapper.classList.remove('wrapper-grabbed');
    wrapper.classList.remove('wrapper-cover');


});

bg3.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-3');
    jajajaSection.classList.remove('bg-2','bg-1','bg-4','bg-5','bg-6');
    wrapper.classList.remove('wrapper-grabbed');
    wrapper.classList.remove('wrapper-cover');

});

bg4.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-4');
    jajajaSection.classList.remove('bg-2','bg-3','bg-1','bg-5','bg-6');
    wrapper.classList.remove('wrapper-grabbed');
    wrapper.classList.remove('wrapper-cover');

});

bg5.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-5');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-1','bg-6');
    wrapper.classList.remove('wrapper-grabbed');
    wrapper.classList.add('wrapper-cover');


});

bg6.addEventListener('click',()=>{
    jajajaSection.classList.add('bg-6');
    jajajaSection.classList.remove('bg-2','bg-3','bg-4','bg-5','bg-1');
    wrapper.classList.add('wrapper-grabbed');
    wrapper.classList.remove('wrapper-cover');

});

// MODAL DATE

// const modalDateWrapper = document.querySelector('.modal-date-wrapper');
// const openModalDateWrapper = document.querySelector('.jajaja-modal-date-opener');
// const closeModalDateWrapper = document.querySelector('.close-date-btn');

// openModalDateWrapper.addEventListener("click", () => {
//     modalDateWrapper.style.display = 'block';
//     alert('Hello')
// });

// closeModalDateWrapper.addEventListener('click',() =>{
//     modalDateWrapper.style.display = 'none';
// })

// MODAL SOCIAL

// const openModalSocialBtn = document.querySelector('#open-modal-social')
// const closeModalSocialBtn = document.querySelector('.modal-social-close-btn')
// const modalSocialWrapper = document.querySelector(".modal-social-wrapper"),
// ModalSocialHeader = modalSocialWrapper.querySelector(".modal-social-header");
// function onDrag3({movementX, movementY}){
//   let getModalSocialStyle = window.getComputedStyle(modalSocialWrapper);
//   let leftModalSocialVal = parseInt(getModalSocialStyle.left);
//   let topModalSocialVal = parseInt(getModalSocialStyle.top);
//   modalSocialWrapper.style.left = `${leftModalSocialVal + movementX}px`;
//   modalSocialWrapper.style.top = `${topModalSocialVal + movementY}px`;
// }
// ModalSocialHeader.addEventListener("mousedown", ()=>{
//     ModalSocialHeader.classList.add("active");
//     ModalSocialHeader.addEventListener("mousemove", onDrag3);
// });
// document.addEventListener("mouseup", ()=>{
//     ModalSocialHeader.classList.remove("active");
//     ModalSocialHeader.removeEventListener("mousemove", onDrag3);
// });

// function openSocialModal() {
//     modalSocialWrapper.style.zIndex = 1000000001;
//     modalSocialWrapper.style.display = 'block';
// };

// function closeSocialModal() {
//     modalSocialWrapper.style.display = 'none';
// };

// openModalSocialBtn.addEventListener('click', openSocialModal);
// closeModalSocialBtn.addEventListener('click',closeSocialModal);

// modalSocialWrapper.addEventListener('click', ()=>{
//     modalSocialWrapper.style.zIndex = 1000000001;
//     modalSocialWrapper.style.position = 'absolute';
//     wrapper.style.zIndex = 'auto';
//     modalRecipeWrapper.style.zIndex = 'auto';
//     modalAllRecipeWrapper.style.zIndex = 'auto';
//     modalMusicWrapper.style.zIndex = 'auto';
// });

// MODAL PACMAN



const openModalPacmanBtn = document.querySelector('#open-modal-pacman')
const closeModalPacmanBtn = document.querySelector('#pacman-close-btn')
const modalPacmanWrapper = document.querySelector(".popup-pacman-wrapper"),
modalPacmanHeader = modalPacmanWrapper.querySelector(".modal-pacman-header");
function onDragPacman({movementX, movementY}){
  let getModalPacmanStyle = window.getComputedStyle(modalPacmanWrapper);
  let leftModalPacmanVal = parseInt(getModalPacmanStyle.left);
  let topModalPacmanVal = parseInt(getModalPacmanStyle.top);
  modalPacmanWrapper.style.left = `${leftModalPacmanVal + movementX}px`;
  modalPacmanWrapper.style.top = `${topModalPacmanVal + movementY}px`;
}
modalPacmanHeader.addEventListener("mousedown", ()=>{
    modalPacmanHeader.classList.add("active");
    modalPacmanHeader.addEventListener("mousemove", onDragPacman);
});
document.addEventListener("mouseup", ()=>{
    modalPacmanHeader.classList.remove("active");
    modalPacmanHeader.removeEventListener("mousemove", onDragPacman);
});

function openPacmanModal() {
    modalPacmanWrapper.style.zIndex = 1000000001;
    modalPacmanWrapper.style.display = 'block';
};

function closePacmanModal() {
    modalPacmanWrapper.style.display = 'none';
};

openModalPacmanBtn.addEventListener('click', openSocialModal);
closeModalPacmanBtn.addEventListener('click',closeSocialModal);

// modalPacmanWrapper.addEventListener('click', ()=>{
//     modalSocialWrapper.style.zIndex = 1000000001;
//     modalSocialWrapper.style.position = 'absolute';
//     wrapper.style.zIndex = 'auto';
//     modalRecipeWrapper.style.zIndex = 'auto';
//     modalAllRecipeWrapper.style.zIndex = 'auto';
//     modalMusicWrapper.style.zIndex = 'auto';
// });





// MODAL MUSIC

// const openModalMusicBtn = document.querySelector('#open-modal-music')
// const closeModalMusic = document.querySelector('.modal-music-close-btn')
// const modalMusicWrapper = document.querySelector(".modal-music-wrapper"),
// ModalMusicHeader = modalMusicWrapper.querySelector(".modal-music-header");
// function onDrag5({movementX, movementY}){
//   let getModalMusicStyle = window.getComputedStyle(modalMusicWrapper);
//   let leftModalMusicVal = parseInt(getModalMusicStyle.left);
//   let topModalMusicVal = parseInt(getModalMusicStyle.top);
//   modalMusicWrapper.style.left = `${leftModalMusicVal + movementX}px`;
//   modalMusicWrapper.style.top = `${topModalMusicVal + movementY}px`;
// }
// ModalMusicHeader.addEventListener("mousedown", ()=>{
//     ModalMusicHeader.classList.add("active");
//     ModalMusicHeader.addEventListener("mousemove", onDrag5);
// });
// document.addEventListener("mouseup", ()=>{
//     ModalMusicHeader.classList.remove("active");
//     ModalMusicHeader.removeEventListener("mousemove", onDrag5);
// });

// function openMusicModal() {
//     modalMusicWrapper.style.display = 'block';
// };

// function closeMusicModal() {
//     modalMusicWrapper.style.display = 'none';
// };

// openModalMusicBtn.addEventListener('click', openMusicModal);
// closeModalMusic.addEventListener('click',closeMusicModal);

// modalMusicWrapper.addEventListener('click', ()=>{
//     modalMusicWrapper.style.zIndex = 1000;
//     modalMusicWrapper.style.position = 'absolute';
//     wrapper.style.zIndex = 'auto';
//     modalRecipeWrapper.style.zIndex = 'auto';
//     modalAllRecipeWrapper.style.zIndex = 'auto';
//     modalSocialWrapper.style.zIndex = 'auto';
// });



// MODAL HOW IT WORKS 

const hIWModal = document.querySelector('.modal-recipe-howto-wrapper');
const openHIWModal = document.querySelector('.question-mark-icon');
const closeHIWModal = document.querySelector('.modal-recipe-howto-closer');

// function clickHIWModal(evt) {
//   const elBtn = evt.currentTarget;
  
//   Object.assign(elPopup.style, {
//     left: `${evt.pageX + elBtn.scrollLeft - elBtn.offsetLeft}px`,
//     top:  `${evt.pageY + elBtn.scrollTop - elBtn.offsetTop}px`,
//     display: `block`,
//     zIndex:900000000000,
//   });
// };

openHIWModal.addEventListener("click", () => {
    hIWModal.style.display = 'block';
    console.log('hello')
});

closeHIWModal.addEventListener('click',() =>{
    hIWModal.style.display = 'none';
})



















