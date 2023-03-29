// POPUP MUSIC

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

// SCROLL TO NEXT SECTION 
let currentSection = 1;

document.addEventListener('wheel', event => {
  event.preventDefault();

  const delta = event.deltaY;
  const sections = document.querySelectorAll('section');
  const numSections = sections.length;

  if (delta < 0 && currentSection > 1) {
    currentSection--;
  } else if (delta > 0 && currentSection < numSections) {
    currentSection++;
  }

  sections[currentSection - 1].scrollIntoView({behavior: 'smooth'});
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













