import { lcChars, ucChars, numChars, symChars, allChars, numonix } from "./legalChars.js";

const charCount = document.getElementById("charCount");
const fancyBool = document.getElementById("fancy")
const submitBtn = document.getElementById("gener8");

const pwDump = document.getElementById("newPass");
const soundOut = document.getElementById("howDoUSay");




submitBtn.addEventListener("click", (eee) => {
    eee.preventDefault();
    const chars = charCount.value;
    generatePassword(chars);
    
});

const generatePassword = (len) => {
    const newPassword = `${reqString()}${getRest(len)}`;
    pwDump.innerText = newPassword;
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
    for (let i = 3; i < x; i++) {
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
    const monx = numonix[san];
    return monx;
}