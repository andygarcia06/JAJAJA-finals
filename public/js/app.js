
// FULL SCREEN API

let fullScreenElement = document.querySelector('.fullscreen-btn');
    var removeFullScreenElement = document.querySelector('.exit-fullscreen-btn');


function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function fullScreenEvent() {
    document.documentElement.requestFullscreen();
    fullScreenElement.innerHTML = 'exit full screen';
    fullScreenElement.classList.remove('fullscreen-btn');
    fullScreenElement.classList.add('exit-fullscreen-btn');
    var removeFullScreenElement = document.querySelector('.exit-fullscreen-btn');

    function closeFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          removeFullScreenElement.innerHTML = 'Fullscreen';
          fullScreenElement.classList.remove('exit-fullscreen-btn');
          fullScreenElement.classList.add('fullscreen-btn');
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }

      }

      console.log(removeFullScreenElement)

      removeFullScreenElement.addEventListener('click', closeFullscreen)
}


fullScreenElement.addEventListener('click',fullScreenEvent);

// NAVIGATION

const arrowToNext = document.querySelectorAll('.to-next-section[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : 'smooth'
        });
    });
});

const section1 = document.querySelector('.jajaja-section-1');

window.onResize = function() {
  if (window.innerWidth <= 1000) section1.classList.add('container');
  else section1.classList.remove('container');
};

// RIGHT CLICK

const rightClickCloseBtn = document.querySelector("#right-click-close-btn")
const el = (sel, par) => (par||document).querySelector(sel);

const elPopup = el("#popup");

function rightClick(evt) {
    evt.preventDefault();
  const elBtn = evt.currentTarget;
  
  Object.assign(elPopup.style, {
    left: `${evt.pageX + elBtn.scrollLeft - elBtn.offsetLeft}px`,
    top:  `${evt.pageY + elBtn.scrollTop - elBtn.offsetTop}px`,
    display: `block`,
    zIndex:800000000000,
  });
};

section1.addEventListener("contextmenu", rightClick,false);
section1.addEventListener("click",()=>{
    elPopup.style.display = 'none';
});
rightClickCloseBtn.addEventListener('click',()=>{
    elPopup.style.display = 'none';
})

















