var audio = document.getElementById("hz");

$(function(){
  $('.playpause').on('click', function(e){
    e = e || window.event;
    var btn = e.target;
    if (!audio.paused) {
      //일시정지
      audio.pause();
      isPlaying = false;
    } else {
      //재생
      audio.play();
      isPlaying = true;
    }
  });
});

function unmute() {
const player = document.getElementById("hz");
player.muted = false;
}

function mute() {
const player = document.getElementById("hz");
player.muted = true;
}