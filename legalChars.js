const lowerCaseChars = charArrayGeneration(97, 122);
const upperCaseChars = charArrayGeneration(65, 90);
const numbersChars = charArrayGeneration(48, 57);
const symbolsChars = charArrayGeneration(34, 47).concat(charArrayGeneration(58, 64)).concat(charArrayGeneration(91, 96));

function charArrayGeneration(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }

    return array;
}

