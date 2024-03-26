import { populateErrorBlock } from "./dom-utils.js"
import { morseToText, textToMorse } from "./translation-function.js"
 
const textMorseButton = document.querySelector("#textButton")
const morseButton = document.querySelector("#morseButton")
const textInput = document.querySelector(".textInput")
const morseInput = document.querySelector(".morseInput")
const textTranslatedBox = document.querySelector(".text-translated-box")
const morseTranslatedBox = document.querySelector(".morse-translated-box")



// text to morse button
textMorseButton.addEventListener('click', () => {
    textTranslatedBox.innerHTML = ''

    //remove exisiting error messages 
    const errorContainer = document.querySelector('.text-error-container')
    if (errorContainer) {
        errorContainer.innerHTML = ''
    }
    // add translated text 
    try {
        const translatedMorse = textToMorse(textInput.value)
        textTranslatedBox.innerHTML = translatedMorse
    } catch (error) {
        // else if error, create error block
        const errorBlock = populateErrorBlock(error.message, '.text-error-container')
        document.querySelector('.text-to-morse').appendChild(errorBlock)
    }
})


// morse to text button
morseButton.addEventListener('click', () => {
    morseTranslatedBox.innerHTML = ''

    // remove exisiting error messages 
    const errorContainer = document.querySelector('.morse-error-container')
    if (errorContainer) {
        errorContainer.innerHTML = ''
    }
    // add translated text
    try {
        const translatedText = morseToText(morseInput.value)
        morseTranslatedBox.innerHTML = translatedText
    } catch (error) {
        // else if error, create error block
        const errorBlock = populateErrorBlock(error.message, '.morse-error-container')
        document.querySelector('.morse-to-text').appendChild(errorBlock)
    }
})