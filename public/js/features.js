// SCROLL TO NEXT SECTION 

const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;

window.addEventListener("wheel", (event) => {
  event.preventDefault();

  const currentPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    if (currentPosition >= sectionTop && currentPosition < sectionTop + windowHeight) {
      if (index !== sections.length - 1) {
        const nextSectionTop = sections[index + 1].offsetTop;
        window.scrollTo({
          top: nextSectionTop,
          behavior: "smooth"
        });
      }
    }
  });
});








const popupToolsClock = document.querySelector('#popup-clock');
const triggerPopupToolsClock = document.getElementById('jajaja-trigger-popup-tools-clock');
const popupToolsBackground = document.querySelector('.popup-background');
const triggerPopupToolsBg = document.getElementById('jajaja-trigger-popup-tools-bg');

// POPUP CLOCK

function openPopupToolsClock(){
    popupToolsClock.style.display = 'block';
    popupToolsBackground.style.display ='none';
};

function closePopupToolsClock(){
    popupToolsClock.style.display = 'none';
};

triggerPopupToolsClock.addEventListener('click',openPopupToolsClock)

//POPUP BACKGROUND



function openPopupToolsBg(){
    popupToolsBackground.style.display = 'block';
    popupToolsClock.style.display ='none';
};

function closePopupToolsBg(){
    popupToolsBackground.style.display = 'none';
};

triggerPopupToolsBg.addEventListener('click',openPopupToolsBg)




// POPUP MUSIC

const { ClickAwayListener } = require("@material-ui/core");

const musicWrapper = document.querySelector(".popup-music-wrapper"),
headerModalMusic = musicWrapper.querySelector(".modal-music-header");
function dragMusicModal({movementX, movementY}){
  let getStyle = window.getComputedStyle(musicWrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  musicWrapper.style.left = `${leftVal + movementX}px`;
  musicWrapper.style.top = `${topVal + movementY}px`;
}
headerModalMusic.addEventListener("mousedown", ()=>{
    headerModalMusic.classList.add("active");
    headerModalMusic.addEventListener("mousemove", dragMusicModal);
});
headerModalMusic.addEventListener("mouseup", ()=>{
    headerModalMusic.classList.remove("active");
    headerModalMusic.removeEventListener("mousemove", dragMusicModal);
});








