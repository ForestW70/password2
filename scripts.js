import { lcChars, ucChars, numChars, symChars, allChars, numonix, mumbers, symbolicDevices } from "./legalChars.js";

// body targets
const passBox = document.getElementById("currPass");
const pwDump = document.getElementById("newPass");
const soundOut = document.getElementById("howDoUSay");
const passHistory = document.getElementById("lastPassHint");
let lastPasswordUsed = "";

// button bar func
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("gener8");
const copyBtn = document.getElementById("copy");
const showLastBtn = document.getElementById("lastPass");
const resetBtn = document.getElementById("resetEverything")

// util buttons
resetBtn.addEventListener("click", () => document.location.reload());

copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!pwDump.innerText) {
        console.log("not enough history!");
        return;
    } else {
        const thisPass = pwDump.innerText;
        navigator.clipboard.writeText(thisPass);
    }
});

showLastBtn.addEventListener("click", e => {
    e.preventDefault();
    passHistory.classList.contains("hide") ? passHistory.classList.remove("hide") : passHistory.classList.add("hide");
});

// generate password button
submitBtn.addEventListener("click", (eee) => {
    eee.preventDefault();
    passHistory.classList.add("hide");
    const chars = charCount.value;
    generatePassword(chars);
    passBox.classList.add("your-password-sir")

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

// password sound out
const dispNmnx = (str) => {
    soundOut.innerText = ""
    const passArr = str.split("");
    const lValidate = /[A-Za-z]/;
    const nValidate = /[0-9]/;

    passArr.forEach(char => {
        const newP = document.createElement("div");
        const charItem = document.createElement("span");
        charItem.innerText = char;
        
        const charDivider = document.createElement("span");
        charDivider.innerText = "~~~";

        const charSound = document.createElement("span");
        if (char.match(lValidate)) {
            charSound.innerText = getLet(char);
        } else if (char.match(nValidate)){
            charSound.innerText = getNum(char);
        } else {
            charSound.innerText = getSym(char);
        } 
        newP.appendChild(charItem);
        newP.appendChild(charDivider);
        newP.appendChild(charSound);

        soundOut.appendChild(newP);
    })
}

// data-checked sound out
const getLet = (x) => {
    const san = x.toLowerCase();
    const monix = numonix[san][0];
    
    if (x === san) {
        return "lower case, " + monix
    }
    return "UPPER case, " + monix
}

const getNum = (x) => {
    const luckyNum = mumbers[x];
    return luckyNum;
}

const getSym = (x) => {
    const simba = symbolicDevices[x][0];
    return simba;
}

const dumpHistory = (pass) => {
    passHistory.value = lastPasswordUsed;
    lastPasswordUsed = pass;
}

// info modal
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




