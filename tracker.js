function playMusic(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './oispaes.mod');
  xhr.responseType = 'arraybuffer';
  xhr.onload = function(e){
    if (this.status == 200){
      player = window.neoart.FileLoader.load(this.response);
      player.loopSong = 1
      player.play();
    }
  };
  xhr.send();
};
