var audioPlayer = document.querySelector('.audio-player');

var toggle = document.querySelector('.toggle');

var body = document.querySelector('body');

var purple = document.querySelector('.purple');

body.onclick = function(){
  purple.classList.add("active");
}
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
    if(img.src.match("img/muted.png"))
    {
      console.log('black');
      img.src = "img/unmuted.png";
    }
    else
    {
      console.log('blank');
      img.src = "img/muted.png";
    }
  }


  // var purple = document.querySelector('.purple');
  //
  // var eye = document.querySelector('.eye');
  //
  // eye.onclick = function(){
  //   fadeToggle();
  // }
  //
  // function fadeToggle(){
  //   console.log('fading');
  //   purple.classList.toggle('active');
  // }
