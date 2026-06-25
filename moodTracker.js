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
        
});
});
//////////////////////////JOURNAL////////////////////////////
const journal = document.getElementById('journal');
const btn = document.querySelector('.doodle-btn');
btn.addEventListener("click", function(){

    if(journal.value.trim() === "" || !selectedMood){
        alert("HEY! U forgot to reflect fully.");
        return;
    }

////////////////////MY HISTORY/////////////////////////////////////
const historyList = document.querySelector("#saved ul");
function padZero(number){
    return number < 10 ? `0${number}` : number;
}
const now = new Date();

const day = padZero(now.getDate());
const month = padZero(now.getMonth()+1);
const year = now.getFullYear();

const hour = padZero(now.getHours());
const min = padZero(now.getMinutes());
const sec = padZero(now.getSeconds());


    // create new li
    const entry = document.createElement("li");


    entry.innerHTML = `
        <span class="date">
            ${day}/${month}/${year}
        </span>

        <span class="mood">
            ${selectedMood}
        </span>

        <span class="time">
            ${hour}:${min}:${sec}
        </span>
    `;

// save journal inside the li
entry.dataset.journal = journal.value;

console.log(entry.dataset.journal)
    historyList.prepend(entry);

historyList.addEventListener("click", function(e){

    if(e.target.classList.contains("mood")){


        const parent = e.target.parentElement;


        const writtenJournal = parent.dataset.journal;


        const date = parent.querySelector(".date").textContent;

        const mood = parent.querySelector(".mood").textContent;


        document.getElementById("modalMood").textContent = mood;

        document.getElementById("modalDate").textContent = date;

        document.getElementById("modalText").textContent = writtenJournal;



        document
        .getElementById("journalModal")
        .classList.remove("hidden");

    }

});
alert("Saved!");
/////////////////close button//////////////////////////
const closeBtn = document.querySelector("#closeModal");
const modal = document.querySelector("#journalModal");


closeBtn.onclick = function(){

    modal.classList.add("hidden");

};
});