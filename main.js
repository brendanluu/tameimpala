var audioPlayer = document.querySelector('.audio-player');

var toggle = document.querySelector('.toggle');


// audioPlayer.autoplay = true;
toggle.onclick = function(){
  audioToggle();
}

function audioToggle(){
  console.log('toggle');

  if (audioPlayer.paused){
    audioPlayer.play();
    toggle.classList.add('active');
  } else {
    audioPlayer.pause();
    toggle.classList.remove('active');
  }
}

function diffImage(img)
  {
    if(img.src.match(/blank/))
    {
      console.log('black');
      img.src = "http://www.tutorialsscripts.com/free-icons/alphabet-characters/upper-case-letter/B-icon/black-upper-case-letter-character-B-icon-32-x-32.jpg";
    }
    else
    {
      console.log('blank');
      img.src = "http://www.vaddio.com/images/doc_icon_blank.jpg";
    }
  }
