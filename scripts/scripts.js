window.addEventListener("load", attachEvents());

function attachEvents() {
  // logo animation
  document.querySelector('#logo img').setAttribute('class', 'logoShow');
  document.querySelector('#logo audio').play();
  window.addEventListener('scroll', function () {
    // videos start/stop on viewport
    let videos = document.getElementsByTagName('video');
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].getBoundingClientRect().top >= 0 &&
        videos[i].getBoundingClientRect().bottom < window.innerHeight) {
        videos[i].play();
        videos[i].style.opacity = '1';
      } else {
        videos[i].pause();
        videos[i].style.opacity = '0.5';
      }
    }
    // animations of words under the video
    let blueWord = document.querySelector('#yellowPageContainer div .blueWord');
    let greenWord = document.querySelector('#yellowPageContainer div .greenWord');
    let whiteWord = document.querySelector('#yellowPageContainer div .whiteWord');
    if (blueWord.getBoundingClientRect().top >= 0 &&
      blueWord.getBoundingClientRect().bottom < window.innerHeight) {
      blueWord.classList.add('trackingInBlue');
      blueWord.style.display = 'inline';
    }
    if (greenWord.getBoundingClientRect().top >= 0 &&
      greenWord.getBoundingClientRect().bottom < window.innerHeight) {
      greenWord.classList.add('trackingInGreen');
      greenWord.style.display = 'inline';
    }
    if (whiteWord.getBoundingClientRect().top >= 0 &&
      whiteWord.getBoundingClientRect().bottom < window.innerHeight) {
      whiteWord.classList.add('trackingInWhite');
      whiteWord.style.display = 'inline';
    }
    // animation of the images under the main video
    let firstTwoImages = document.querySelectorAll('#bluePageContainer img');
    for (let i = 0; i < firstTwoImages.length; i++) {
      if (firstTwoImages[i].getBoundingClientRect().top >= 0 &&
        firstTwoImages[i].getBoundingClientRect().bottom < window.innerHeight) {
        firstTwoImages[i].style.opacity = '1';
      } else {
        firstTwoImages[i].style.opacity = '0.5';
      }
    }
    // animations of quotes
    let quote1 = document.getElementsByClassName('quote1');
    let quote2 = document.getElementsByClassName('quote2');
    let quote3 = document.getElementsByClassName('quote3');
    let quote4 = document.getElementsByClassName('quote4');
    let quote5 = document.getElementsByClassName('quote5');
    let quote6 = document.getElementsByClassName('quote6');
    if (quote1[0].getBoundingClientRect().top >= 0 &&
      quote1[0].getBoundingClientRect().bottom < window.innerHeight) {
      quote1[0].classList.add('rotateQ1');
    }
    if (quote2[0].getBoundingClientRect().top >= 0 &&
      quote2[0].getBoundingClientRect().bottom < window.innerHeight) {
      quote2[0].classList.add('rotateQ2');
    }
    if (quote3[0].getBoundingClientRect().top >= 0 &&
      quote3[0].getBoundingClientRect().bottom < window.innerHeight) {
      quote3[0].classList.add('rotateQ3');
    }
    if (quote4[0].getBoundingClientRect().top >= 0 &&
      quote4[0].getBoundingClientRect().bottom < window.innerHeight) {
      quote4[0].classList.add('rotateQ4');
    }
    if (quote5[0].getBoundingClientRect().top >= 0 &&
      quote5[0].getBoundingClientRect().bottom < window.innerHeight) {
      quote5[0].classList.add('rotateQ5');
    }
    if (quote6[0].getBoundingClientRect().top >= 0 &&
      quote6[0].getBoundingClientRect().bottom < window.innerHeight) {
      quote6[0].classList.add('rotateQ6');
    }

    // animation of the pictures in the gallery
    let pictures = document.querySelectorAll('#blueGallery .blueGalleryRow img');
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].getBoundingClientRect().top >= 0 &&
        pictures[i].getBoundingClientRect().bottom < window.innerHeight) {
        if (pictures[i].className == 'animated') {
          pictures[i].classList.add('heartbeat');
        }
      } else {
        pictures[i].classList.remove('heartbeat')
      }
    }
    // animation of the last sentence in the website
    let paragraph = document.getElementsByClassName('greenFooterParagraph2')
    if (paragraph[0].getBoundingClientRect().top >= 0 &&
      paragraph[0].getBoundingClientRect().bottom < window.innerHeight) {
      paragraph[0].classList.add('showingFromTop');
    }
  })
  // moving clouds in the gallery
  let mostTop = document.getElementById('blueGallery').offsetTop + 600;
  let divHeight = document.getElementById('blueGallery').offsetHeight;
  let mostBottom = mostTop + divHeight - 400;
  let clouds = document.querySelectorAll('#clouds img');
  for (let i = 0; i < clouds.length; i++) {
    let randomPos = Math.floor(Math.random() * (mostBottom - mostTop + 1)) + mostTop;
    clouds[i].style.top = randomPos - mostTop + 270 + 'px';
    clouds[i].addEventListener('animationiteration', function () {
      randomPos = Math.floor(Math.random() * (mostBottom - mostTop + 1)) + mostTop;
      clouds[i].style.top = randomPos - mostTop + 270 + 'px';
    })
  }
}