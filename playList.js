const songs = document.querySelectorAll('.song-item');
const spans = document.querySelectorAll('.song-name');
const audios = document.querySelectorAll('audio');
songs.forEach((song,index)=>{
song.addEventListener("click", ()=>{
songs.forEach(item => {item.classList.remove('playing')});
song.classList.add('playing');

audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
});
audios[index].play()
});
});
window.addEventListener("click",function(e){
    console.log(e.target)
})