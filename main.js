const modalContainer = document.getElementById("modalContainer");
const openModal = document.getElementById("openModal");
const youtuberIframe = document.getElementById("youtubeIframe");

openModal.addEventListener("click", function(){
  modalContainer.style.display = 'block';
})

window.addEventListener("click", function (e){
  if (e.target == modalContainer) {
    modalContainer.style.display = 'none'
    youtuberIframe.src = youtuberIframe.src;
  }
})

function PlayAudio() {
  let music = document.getElementById("music");
  speakerHigh.style.display = 'none';
  speakerSlash.style.display = 'block';
  music.play()
}

function StopAudio() {
  let music = document.getElementById("music");
  speakerSlash.style.display = 'none';
  speakerHigh.style.display = 'block';
  music.pause()
}