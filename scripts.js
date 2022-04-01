const formDetails = document.getElementById("modForm");
const submitBtn= document.getElementById("genPassBtn");
const newPass = document.getElementsByClassName("new-pass");

formDetails.addEventListener("submit", e => {
    e.preventDefault();
    newPass.innerText = ""

    const optObj = {
        upperOn: document.getElementById("upper").checked,
        numsOn: document.getElementById("nums").checked,
        symsOn: document.getElementById("syms").checked,
        chars: document.getElementById("long").checked
    }

    newPass.innerText = generator(optObj)
});
