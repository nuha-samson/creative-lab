/////////TIME///////////
const time = document.getElementById('time');
function setTime(){
const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();
if (hour < 10 && min < 10){
    time.textContent = `0${hour}:0${min}`;
}
else if (hour > 10 && min < 10){
time.textContent = `${hour}:0${min}`;
}
else if (hour < 10 && min >10){
   time.textContent = `0${hour}:${min}`; 
}
}
setInterval(setTime,1000);
////////////////////////////MOOD//////////////////////////
const moods = document.querySelectorAll("#mood li");
let selectedMood = null;
moods.forEach(mood => {
    mood.addEventListener("click", () => {

        moods.forEach(m => m.style.background = "");

        mood.style.background = "lightblue";

        selectedMood = mood.dataset.mood;
        console.log(selectedMood)
});
});
//////////////////////////JOURNAL////////////////////////////
const journal = document.getElementById('journal');
const btn = document.querySelector('.doodle-btn');

btn.addEventListener("click", function () {

    if (journal.value.trim() === "" || !selectedMood) {
        alert("HEY! U forgot to reflect fully.");
        return;
    }
////////////////////MY HISTORY/////////////////////////////////////
const history = document.getElementById('saved');
const date = document.querySelector('li span .date');
const mood = document.getElementsByClassName('mood');
const time = document.getElementsByClassName('name');

const now = new Date()
const day = now.getDate()
const month = now.getMonth();
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
time.textContent = setTime();
date.textContent = `${day}/${month}/${year}`;
mood.textContent = selectedMood;

    alert("Saved!");
});
