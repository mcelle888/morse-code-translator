// Morse data
const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "/",
    "1": ".----", 
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    ":": "---...",
    "?": "..--..",
    "'": ".----.",
    "-": "-....-",
    "!": "-.-.--",
    "\"": ".-..-.",
    "=": "-...-",
    ";": "-.-.-.",
    "_": "..--.-",
    "+": ".-.-.",
    "@": ".--.-."
}

// translate text to morse function


function textToMorse(text) {
    // removes line breaks
    text = text.replace(/\n/g, '')
    // convert to uppercase 
    text = text.toUpperCase();
    // filter invalid characters and throw error if found
    const invalidChars = text.split('').filter(i => !(i in morseCode));
    if (invalidChars.length > 0) {
        throw new Error(`Sorry! untranslatable characters found: [${invalidChars.join(', ')}]. Please remove and try again`);
    }
    
    // split each letter into an array
    return text
        .split('')
        // map to convert each letter 'i' to the translated code OR return i
        .map(i => morseCode[i] || i)
        // join new array to morse using space to put spaces between each letter
        .join(' ');
}

// morse-text-code function

function morseToText(morse) {
    // remove line breaks
    morse = morse.replace(/\n/g, '')
    // split each word using the / and then for each word split each letter
    return morse.split('/').map(word => {
        // each letter is mapped to convert to text by looping through the keys i in morseCode
        return word.split(' ').map(code => {
            for (let i in morseCode) {
                // return key if there is a match or if not, return i
                if (morseCode[i] === code) return i
            }
            return code
            // join the letters to make a word and then join the word with a space to make the sentences
        }).join('')
    }).join(' ')
}



const textMorseButton = document.querySelector("#textButton")
const morseButton = document.querySelector("#morseButton")
const textInput = document.querySelector(".textInput")
const morseInput = document.querySelector(".morseInput")
const textTranslatedBox = document.querySelector(".text-translated-box")
const morseTranslatedBox = document.querySelector(".morse-translated-box")
// create error container block
let errorBlock = ''

textMorseButton.addEventListener('click', () => {
    textTranslatedBox.innerHTML = '';
    try {
        const translatedMorse = textToMorse(textInput.value);
        textTranslatedBox.innerHTML = translatedMorse;
        
        // remove existing error block
        if (errorBlock) {
            errorBlock.remove();
        }
    } catch (error) {
        if (errorBlock) {
            errorBlock.remove();
        } 
        // create error block with error message
        errorBlock = document.createElement('div');
        errorBlock.classList.add('error-container');

        const errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = error.message;

        errorBlock.appendChild(errorMessageElement);
        // append the error block to the .text-to-morse container
        document.querySelector('.text-to-morse').appendChild(errorBlock);
    }
});



morseButton.addEventListener('click', () => {
    morseTranslatedBox.innerHTML = ''
        // trim any white space
    if (morseInput.value.trim() !== '') {
        morseTranslatedBox.innerHTML = morseToText(morseInput.value)
    }
})
