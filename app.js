const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector(".error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function validatebillandcashamount() {
    message.style.display = "none"
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else {
            message.style.display = "block";
            message.innerText = "cash amount should be greater than bill"
        }
    } else {
        message.style.display = "block";
        message.innerText = "please enter amount greater than zero";
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < notes.length; i++) {
        const returnAmount = Math.trunc(amountToBeReturned / notes[i]);

        amountToBeReturned = amountToBeReturned % notes[i];
        noOfNotes[i].innerText = returnAmount;
    }

};