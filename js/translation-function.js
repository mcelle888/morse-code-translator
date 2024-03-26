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

export function textToMorse(text) {
    // removes line breaks
    text = text.replace(/\n/g, '')
    // convert to uppercase 
    text = text.toUpperCase()
    // filter invalid characters and throw error if found
    const invalidChars = text.split('').filter(i => !(i in morseCode))
    if (invalidChars.length > 0) {
        throw new Error(`Sorry! Untranslatable characters found: [${invalidChars.join(', ')}]. Please remove and try again`)
    }
    
    // split each letter into an array
    return text
        .split('')
        // map to convert each letter 'i' to the translated code OR return i
        .map(i => morseCode[i] || i)
        // join new array to morse using space to put spaces between each letter
        .join(' ')
}


// translate morse to text function

export function morseToText(morse) {
    // remove line breaks first
    morse = morse.replace(/\n/g, '')

    // check for invalid characters
    const invalidChars = morse.split('').filter(char => !/[.\-\/ ]/.test(char))
    if (invalidChars.length > 0) {
        throw new Error(`Invalid Morse code characters found: [${invalidChars.join(', ')}]. Please use only "." and "-" with "/" for spaces`)
    }

    // split morse code by spaces to get individual codes
    const morseCodes = morse.split(' ')

    // translate each Morse code to text
    const translatedText = morseCodes.map(code => {
        // check morse is in the morseCode to translate
        const text = Object.entries(morseCode).find(([key, value]) => value === code)
        // return the letter or empty string if not found
        return text ? text[0] : '' 
    }).join('')

    return translatedText
}

