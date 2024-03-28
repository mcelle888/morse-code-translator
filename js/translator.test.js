import { textToMorse } from "./translation-function"
import { morseToText } from "./translation-function"


// Text to Morse Translator 

describe("textToMorse() function should return correct morse code for text inputs", () => {
    it("should return correct translation for letters of the alphabet" ,() => {
        expect(textToMorse("M")).toBe("--")
        expect(textToMorse("S")).toBe("...")
        expect(textToMorse("Z")).toBe("--..")
    })
    it("should return correct translation for a word" ,() => {
        expect(textToMorse("HELLO")).toBe(".... . .-.. .-.. ---")
        expect(textToMorse("AUTUMN")).toBe(".- ..- - ..- -- -.")
        expect(textToMorse("SPRING")).toBe("... .--. .-. .. -. --.")
    })
    it("should return correct translation for lower case letters" ,() => {
        expect(textToMorse("hello")).toBe(".... . .-.. .-.. ---")
        expect(textToMorse("summer")).toBe("... ..- -- -- . .-.")
        expect(textToMorse("winter")).toBe(".-- .. -. - . .-.")
        
    })
    it("should return correct translation for senteces (handle multiple words with spaces)" ,() => {
        expect(textToMorse("good morning")).toBe("--. --- --- -.. / -- --- .-. -. .. -. --.")
        expect(textToMorse("cat in the hat")).toBe("-.-. .- - / .. -. / - .... . / .... .- -")
        expect(textToMorse("one fish two fish")).toBe("--- -. . / ..-. .. ... .... / - .-- --- / ..-. .. ... ....")
        
    })
    it("should return correct translation for numbers" ,() => {
        expect(textToMorse("7")).toBe("--...")
        expect(textToMorse("010")).toBe("----- .---- -----")
        expect(textToMorse("it's the 28th of March")).toBe(".. - .----. ... / - .... . / ..--- ---.. - .... / --- ..-. / -- .- .-. -.-. ....")
    })
    it("should return correct translation for valid punctuation symbols" ,() => {
        expect(textToMorse(".!'")).toBe(".-.-.- -.-.-- .----.")
        expect(textToMorse("Good Morning!")).toBe("--. --- --- -.. / -- --- .-. -. .. -. --. -.-.--")
        expect(textToMorse("How's the weather today?")).toBe(".... --- .-- .----. ... / - .... . / .-- . .- - .... . .-. / - --- -.. .- -.-- ..--..")
    })
    
})

// textToMorse() Error handling:

describe("textToMorse() function should throw an error for invalid inputs", () => {
    it("should throw an error if an unrecognised symbol is passed" ,() => {
        expect(() => textToMorse("^")).toThrow("Sorry! Untranslatable characters found: [^]. Please remove and try again")
        expect(() => textToMorse("Δ")).toThrow("Sorry! Untranslatable characters found: [Δ]. Please remove and try again")
        expect(() => textToMorse("幸")).toThrow("Sorry! Untranslatable characters found: [幸]. Please remove and try again")
    })
    it("should throw an error if an unrecognised symbol is passed inside a word" ,() => {
        expect(() => textToMorse("ap$ple")).toThrow("Sorry! Untranslatable characters found: [$]. Please remove and try again")
        expect(() => textToMorse("4^7")).toThrow("Sorry! Untranslatable characters found: [^]. Please remove and try again")
        expect(() => textToMorse("4*7")).toThrow("Sorry! Untranslatable characters found: [*]. Please remove and try again")
    })
    it("should throw an error if an unrecognised symbol is passed inside a sentence" ,() => {
        expect(() => textToMorse("apple & orange")).toThrow("Sorry! Untranslatable characters found: [&]. Please remove and try again")
        expect(() => textToMorse("number 1 % number 2")).toThrow("Sorry! Untranslatable characters found: [%]. Please remove and try again")
        expect(() => textToMorse("A small latte costs $4.00")).toThrow("Sorry! Untranslatable characters found: [$]. Please remove and try again")
    })
    it("should throw an error for MULTIPLE invalid characters and return all invalid characters in error message" ,() => {
        expect(() => textToMorse("milk & bread juice costs $5.00")).toThrow("Sorry! Untranslatable characters found: [&, $]. Please remove and try again")
        expect(() => textToMorse("The √ 9 is 3 because 3 * 2 is 9")).toThrow("Sorry! Untranslatable characters found: [√, *]. Please remove and try again")
        expect(() => textToMorse("abc#$% def*&|hij")).toThrow("Sorry! Untranslatable characters found: [#, $, %, *, &, |]. Please remove and try again")
    })
})

// Morse to Text Translator

describe("morseToText() function should return correct text translation for morse code inputs", () => {
    it("should return correct translation for letters of the alphabet" ,() => {
        expect(morseToText("-.-.")).toBe("C")
        expect(morseToText(".-..")).toBe("L")
        expect(morseToText("---")).toBe("O")
    })
    it("should return correct translation for a word" ,() => {
        expect(morseToText(".-.. .- - - .")).toBe("LATTE")
        expect(morseToText("-.-. .- .--. .--. ..- -.-. -.-. .. -. ---")).toBe("CAPPUCCINO")
        expect(morseToText(".- -- . .-. .. -.-. .- -. ---")).toBe("AMERICANO")
    })
        
    it("should return correct translation for senteces (handle multiple words with spaces)" ,() => {
        expect(morseToText("-.. .. -. -. . .-. / -- . -. ..-")).toBe("DINNER MENU")
        expect(morseToText("- --- -- .- - --- / .--. . -. -. . / .--. .- ... - .-")).toBe("TOMATO PENNE PASTA")
        expect(morseToText(".-. --- .- ... - / -.-. .... .. -.-. -.- . -. / .- -. -.. / ...- . --. --. .. . ...")).toBe("ROAST CHICKEN AND VEGGIES")
        
    })

    it("should return correct translation for numbers" ,() => {
        expect(morseToText("..---")).toBe("2")
        expect(morseToText("...-- ---.. ----.")).toBe("389")
        expect(morseToText(".. - .----. ... / - .... . / .---- ..... - .... / --- ..-. / -- .- .-. -.-. ....")).toBe("IT'S THE 15TH OF MARCH")
    })

    it("should return correct translation for valid punctuation symbols" ,() => {  
        expect(morseToText("-.--. -.--.-")).toBe("()")
        expect(morseToText(".. - ... / ... --- / .... --- - / - --- -.. .- -.-- -.-.--")).toBe("ITS SO HOT TODAY!")
        expect(morseToText(".-- .... . -. / .-- .. .-.. .-.. / .. - / .-. .- .. -. ..--..")).toBe("WHEN WILL IT RAIN?")
    })
    
})

// morseToText(): Error handling

describe("morseToText() function should throw an error for invalid inputs", () => {
    it("should throw an error if an unrecognised character (not '.' or '/' or '-') is passed" ,() => {
        expect(() => morseToText("a")).toThrow("Invalid Morse code characters found: [a]. Please use only \".\" and \"-\" with \"/\" for spaces")
        expect(() => morseToText("4")).toThrow("Invalid Morse code characters found: [4]. Please use only \".\" and \"-\" with \"/\" for spaces")
        expect(() => morseToText("!")).toThrow("Invalid Morse code characters found: [!]. Please use only \".\" and \"-\" with \"/\" for spaces")
    })

    it("should throw an error if an unrecognised character (not '.' or '/' or '-') is passed with valid morse input" ,() => {
        expect(() => morseToText("--i.. -.-. .... . .-.. .-.. .")).toThrow("Invalid Morse code characters found: [i]. Please use only \".\" and \"-\" with \"/\" for spaces")
        expect(() => morseToText("..---$-----")).toThrow("Invalid Morse code characters found: [$]. Please use only \".\" and \"-\" with \"/\" for spaces")
        expect(() => morseToText(".-- .... . -. / .. ... / -.-. .... .-. .. ... - -- .- ... / -... .-. . .- -.- /?")).toThrow("Invalid Morse code characters found: [?]. Please use only \".\" and \"-\" with \"/\" for spaces")
    })

    it("should throw an error for MULTIPLE invalid characters and return all invalid characters in error message" ,() => {
        expect(() => morseToText("--- -. . / -.-. .... s--- -.-. --- .-.. .- - . / -- .. .-.. -.- /! .--. .-.. . .- ... .")).toThrow("Invalid Morse code characters found: [s, !]. Please use only \".\" and \"-\" with \"/\" for spaces")
        expect(() => morseToText(".. / .--. .-. . ..-. . .-. /1 --- .-. .- -. --. . />")).toThrow("Invalid Morse code characters found: [1, >]. Please use only \".\" and \"-\" with \"/\" for spaces")
        expect(() => morseToText("@.... .!- .--. p.--. -.-m-")).toThrow("Invalid Morse code characters found: [@, !, p, m]. Please use only \".\" and \"-\" with \"/\" for spaces")
    })

    it("should throw an error if invalid morse pattern is passed" ,() => {
        expect(() => morseToText("---.--")).toThrow("Sorry! Unrecognised code patterns found: [---.--]. Please remove and try again")
        expect(() => morseToText("........")).toThrow("Sorry! Unrecognised code patterns found: [........]. Please remove and try again")
        expect(() => morseToText("..../.---./-...-...----/...--")).toThrow("Sorry! Unrecognised code patterns found: [..../.---./-...-...----/...--]. Please remove and try again")
    })

})