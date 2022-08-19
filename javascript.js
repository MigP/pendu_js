// Damande quel exercise on vérifie
let exo = parseInt(prompt("Quel exercise ?"))
switch(exo) {
    case 1: {
        exo1()
        break
    }
    case 2: {
        exo2()
        break
    }
    case 3: {
        exo3()
        break
    }
    case 4: {
        exo4()
        break
    }
    case 5: {
        exo5()
        break
    }
    case 6: {
        exo6()
        break
    }
    case 7: {
        exo7()
        break
    }
    case 8: {
        exo8()
        break
    }
    case 9: {
        exo9()
        break
    }
    case 10: {
        exo10()
        break
    }
    case 11: {
        exo11()
        break
    }
    case 12: {
        exo12()
        break
    }
    case 13: {
        exo13()
        break
    }
    case 14: {
        exo14()
        break
    }
    case 15: {
        exo15()
        break
    }
    default:
        break
}

function exo1() {
    // Exo 1.
    let year = parseInt(prompt("Gimme a year"))

    alert(isLeapYear(year))

    function isLeapYear(year) {
        if ((year%4 === 0 && year%100 !== 0) || year%400 == 0) {
            return "Leap year"
        } else {
            return "Non leap year"
        }
    }
}

function exo2() {
    // Exo 2.
    let nr1 = parseInt(prompt("Gimme a nr"))
    let operator = prompt("Gimme an operator")
    let nr2 = parseInt(prompt("Gimme another nr"))

    alert(calculate(nr1, operator, nr2))

    function calculate(nr1, operator, nr2) {
        switch(operator) {
            case "+":
                return nr1 + nr2
            case "-":
                return nr1 - nr2
            case "/":
                return nr1 / nr2
            case "*":
                return nr1 * nr2
            default:
                return "invalid operator"
        }
    }
}

function exo3() {
    // Exo.3
    let word = prompt("Gimme a word")
    alert(inverse(word))

    function inverse(word){
        let inversedWord = ""
        for (i = word.length - 1; i >= 0; i--) {
            inversedWord += word[i]
        }
        return inversedWord
    }
}

function exo4() {
    // Exo.4
    let nrPersonnes = parseInt(prompt("How many ppl?"))
    let names = []
    for(i = 1; i <= nrPersonnes; i++) {
        names.push(prompt("Person #" + i + "'s name?"))
    }
    alert(names[Math.floor(Math.random()*nrPersonnes)])
}

function exo5() {
    // Exo.5
    let guests = ["William", "Sarah", "Pierre"]
    let nameToSearch = prompt("Enter a person's name")
    alert (findGuest(nameToSearch))

    function findGuest(name) {
        if (guests.indexOf(name) === -1) {
            return "Guest not available"
        } else {
            return "Guest at position " + guests.indexOf(name) + 1
        }
    }
}

function exo6() {
    // Exo.6
    let prices = {pommes: 10, poires: 12, cerises: 1}
    let nrPommes = parseInt(prompt("How many apples"))
    let nrPears = parseInt(prompt("How many pears"))
    let nrCerises = parseInt(prompt("How many cherries"))

    alert ("Price: " + calculatePrice(nrPommes, nrPears, nrCerises))

    function calculatePrice(nrPommes, nrPears, nrCerises) {
        if (nrPommes > 0 && nrPears > 0 && nrCerises > 0) {
            return (nrPommes * prices.pommes + nrPears * prices.poires + nrCerises * prices.cerises) * 1.1
        } else {
            return nrPommes * prices.pommes + nrPears * prices.poires + nrCerises * prices.cerises
        }
        
    }
}

function exo7() {
    // Exo 7.
    let noms = [
        {giver: "William", receiver: false},
        {giver: "Miguel", receiver: false},
        {giver: "Fabio", receiver: false},
        {giver: "Pierre", receiver: false},
        {giver: "Ahmad", receiver: false},
        {giver: "Romain", receiver: false},
        {giver: "Tan", receiver: false},
        {giver: "Aiélée", receiver: false},
        {giver: "Cyrille", receiver: false},
        {giver: "Ricardo", receiver: false},
        {giver: "Patrick", receiver: false}
    ]

    console.log(shuffle(noms))

    function shuffle(array) {
        for (i = array.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = array[i]
            array[i] = array[j]
            array[j] = k
        }

        for (j = 0; j < array.length - 1; j++) {
            array[j].receiver = array[j + 1].giver
        }
        array[array.length - 1].receiver = array[0].giver
        return array
    }
}

function exo8() {
    // Exo 8.
    let index = parseInt(prompt("Gimme a positive integer"))
    alert (returnFibonnaci(index))
        
    function returnFibonnaci(index) {
        let a = 0, b = 1, c = index

        for (let i = 2; i <= index; i++) {
            c = a + b
            a = b
            b = c
        }

        return c
    }
}

function exo9() {
    // Exo 9.
    let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (i = tableau.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = tableau[i]
        tableau[i] = tableau[j]
        tableau[j] = k
    }
    console.log(tableau)
}

function exo10() {
    // Exo 10.
    let word = prompt("Gimme a word")
    alert(hideWord(word))

    function hideWord(word) {
        let hiddenWord = ""
        for (i = 0; i < word.length; i++) {
            hiddenWord += "*"
        }

        return hiddenWord
    }
}

function exo11() {
    // Exo 11.
    let word = prompt("Gimme a word")
    let letter = prompt("Gimme a letter")

    alert(isLetterInWord(word, letter))

    function isLetterInWord(word, letter) {
        return word.indexOf(letter) >= 0
    }
}

function exo12() {
    // Exo 12.
    let word = prompt("Gimme a word")
    console.log(createHiddenWord(word))
    let letter = prompt("Gimme a letter")
    console.log("Guessed letter: " + letter)
    
    console.log(generateHiddenWord(createHiddenWord(word), word, letter))
    
    
    function createHiddenWord(word) {
        let hiddenWord = ""
        for (i = 0; i < word.length; i++) {
            hiddenWord += "*"
        }
    
        return hiddenWord
    }
    
    function checkIfInWord(letter, word) {
        return word.indexOf(letter) >= 0
    }
    
    function generateHiddenWord(hiddenWord, word, letter) {
        if (checkIfInWord(letter, word)) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    hiddenWord = hiddenWord.substring(0, i) + letter + hiddenWord.substring(i + 1)
                } 
            }
            return hiddenWord
        } else {
            return hiddenWord
        }
    }
}

function exo13() {
    // Exo 13.

}

function exo14() {
    // Exo 14.

    (async () => {
        let randomWord = await generateWord()

        document.getElementById("hidden_word").innerText = createHiddenWord(randomWord[0])

        document.getElementById("guessBtn").onclick = function(e) {
            e.stopPropagation()
            document.getElementById("guessBtn").addEventListener("click", guess(document.getElementById("hidden_word").innerText, randomWord[0], document.getElementById("userInput").value))
            return false; //handled click
        }

        
        


        console.log(randomWord[0])
    })()

    async function generateWord() {
        let url = 'https://random-word-api.herokuapp.com/word'
        let obj = await (await fetch(url)).json()
        return obj
    }

    function createHiddenWord(word) {
        let hiddenWord = ""
        for (i = 0; i < word.length; i++) {
            hiddenWord += "*"
        }
    
        return hiddenWord
    }

    function checkIfInWord(letter, word) {
        return word.indexOf(letter) >= 0
    }

    function generateHiddenWord(hiddenWord, word, letter) {
        if (checkIfInWord(letter, word)) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    hiddenWord = hiddenWord.substring(0, i) + letter + hiddenWord.substring(i + 1)
                } 
            }
            return hiddenWord
        } else {
            return hiddenWord
        }
    }

    function guess(hiddenWord, word, letter) {
        document.getElementById("hidden_word").innerText = generateHiddenWord(hiddenWord, word, letter)
        document.getElementById("userInput").value = ""
    }


}



function exo15() {
    // Exo 15.

}