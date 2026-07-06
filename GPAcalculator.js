//btn--warning
//btn--success
//btn--danger
//calculateBtn


// the control input

const subjects = document.querySelector(".subject-list");

subjects.addEventListener("click", function (e) {
    const row = e.target.closest(".subject-row"); 
    /////////////////////////////////REMOVE/////////////////////////////////////////////////////////////////   
    if (e.target.classList.contains("btn-remove")) {
        const rows = document.querySelectorAll(".subject-row");
        if (rows.length > 1) {
            row.remove();
        } else {
            alert("Nope, you can't!");
        }
    }
    /////////////////////////////////UPDATE/////////////////////////////////////////////////////////////////

    if (e.target.classList.contains("btn-update")) {

        const credit = row.querySelector(".input-credits");
        const grade = row.querySelector(".input-grade");

        credit.value = 1;
        grade.value = 0;
    }
/////////////////////////////////ADD/////////////////////////////////////////////////////////////////

    if (e.target.classList.contains("btn-add")) {

        subjects.insertAdjacentHTML(
            "beforeend",
            `
            <div class="subject-row">
                <div class="subject-row__field">
                    <label>Credits</label>
                    <input type="number" class="input-credits" value="3" min="1" max="4">
                </div>

                <div class="subject-row__field">
                    <label>Grade</label>
                    <input type="number" class="input-grade" value="4.0" min="0" max="4" step="0.1">
                </div>

                <button class="btn btn--warning btn--icon btn-update">⟳</button>
                <button class="btn btn--success btn--icon btn-add">＋</button>
                <button class="btn btn--danger btn--icon btn-remove">✕</button>
            </div>
            `
        );
    }

});



// ================================OUTPUT: RESULT===========================================//
const res = document.querySelector('#calculateBtn');

res.addEventListener("click", function () {

    const subjects = document.querySelectorAll('.subject-row');
    const credits = document.querySelectorAll('.input-credits');
    const grades = document.querySelectorAll('.input-grade');

    let hour = 0;
    let prod = 0;

    for (let i = 0; i < subjects.length; i++) {
        hour += Number(credits[i].value);
        prod += Number(grades[i].value) * Number(credits[i].value)
    }

    let res1 = prod/hour;
    const gpaDisplay = document.querySelector('#gpaDisplay');
    gpaDisplay.textContent = `${res1}`;

    const totalCreditsDisplay = document.querySelector('#totalCreditsDisplay');
    totalCreditsDisplay.textContent = `${hour}`;

    const subjectCountDisplay = document.querySelector('#subjectCountDisplay');
    subjectCountDisplay.textContent = `${subjects.length}`;


});