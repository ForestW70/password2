import { lcChars, ucChars, numChars, symChars, allChars, numonix } from "./legalChars.js";

const charCount = document.getElementById("charCount");
const fancyBool = document.getElementById("fancy")
const submitBtn = document.getElementById("gener8");

const pwDump = document.getElementById("newPass");
const soundOut = document.getElementById("howDoUSay");
const passHistory = document.getElementById("pastPass");




submitBtn.addEventListener("click", (eee) => {
    eee.preventDefault();
    const chars = charCount.value;
    generatePassword(chars);

});

const generatePassword = (len) => {
    const newPassword = `${reqString()}${getRest(len)}`;
    pwDump.innerText = newPassword;
    dumpHistory(newPassword);
    dispNmnx(newPassword)

}

// special chars
const reqString = () => {
    const reqString =
        lcChars[Math.floor(Math.random() * lcChars.length)] +
        ucChars[Math.floor(Math.random() * ucChars.length)] +
        numChars[Math.floor(Math.random() * numChars.length)] +
        symChars[Math.floor(Math.random() * symChars.length)];
    return reqString;
}

// the rest to fill space
const getRest = (x) => {
    let theRest = "";
    for (let i = 4; i < x; i++) {
        theRest += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return theRest;
}

const dispNmnx = (str) => {
    soundOut.innerText = ""
    const passArr = str.split("");
    const validate = /[A-Za-z]/;

    passArr.forEach(char => {
        const newP = document.createElement("p");
        if (char.match(validate)) {
            newP.innerText = `${char} -- as in ${getNu(char)}`;
        } else {
            newP.innerText = char;
        }

        soundOut.appendChild(newP);
    })
}

const getNu = (x) => {
    const san = x.toLowerCase();
    const monix = numonix[san][0];
    return monix;
}

const dumpHistory = (pass) => {
    const logHistPass = document.createElement("span");
    logHistPass.classList.add("pass-hist")
    logHistPass.innerText = pass;

    const logHistTs = document.createElement("span");
    logHistTs.classList.add("pass-ts")
    const rightNow = new Date();
    const time = rightNow.getHours() + ":" + rightNow.getMinutes() + ":" + rightNow.getSeconds();
    logHistTs.innerText = time;

    const historyRow = document.createElement("div");
    historyRow.appendChild(logHistPass);
    historyRow.appendChild(logHistTs);

    passHistory.prepend(historyRow);
}

const modalDisp = document.getElementById("modal");
const modalClose = document.getElementById("close");
const oBtn = document.getElementById("infoModal");

oBtn.addEventListener("click", e => {
    e.preventDefault();
    modalDisp.style.display = "block";
})

modalClose.addEventListener("click", e => {
    e.preventDefault();
    modalDisp.style.display = "none";
})
