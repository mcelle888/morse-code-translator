import { textToMorse } from "./translation-function"
import { morseToText } from "./translation-function"

describe("Should return correct text to morse code translation", () => {
    it("should return correct translation for one letter" ,() => {
        expect(textToMorse("M")).toBe("--")
    })
    it("should return correct translation for one word" ,() => {
        expect(textToMorse("HELLO")).toBe(".... . .-.. .-.. ---")
    })
    it("should return correct translation for lower case letters" ,() => {
        expect(textToMorse("hello")).toBe(".... . .-.. .-.. ---")
    })
    it("should return correct translation for multiple words with spaces" ,() => {
        expect(textToMorse("good morning")).toBe("--. --- --- -.. / -- --- .-. -. .. -. --.")
    })
    it("should return correct translation for numbers" ,() => {
        expect(textToMorse("123")).toBe(".---- ..--- ...--")
    })
    it("should return correct translation for valid punctuation symbols" ,() => {
        expect(textToMorse("Good Morning!")).toBe("--. --- --- -.. / -- --- .-. -. .. -. --. -.-.--")
    })
    
})

describe("Should throw an error for invalid characters", () => {
    it("should throw error an if an unrecognised symbol is passed" ,() => {
        expect(() => textToMorse("^")).toThrow("Sorry! Untranslatable characters found: [^]. Please remove and try again")
    })
    it("should throw error an if an unrecognised symbol is passed inside a word" ,() => {
        expect(() => textToMorse("ap$ple")).toThrow("Sorry! Untranslatable characters found: [$]. Please remove and try again")
    })
    it("should throw error if an unrecognised symbol is passed inside a word" ,() => {
        expect(() => textToMorse("apple & orange")).toThrow("Sorry! Untranslatable characters found: [&]. Please remove and try again")
    })
})
