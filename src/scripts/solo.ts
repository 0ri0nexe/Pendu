import words from "../words.json";

let word = words[Math.floor(Math.random() * words.length)].toUpperCase();
let already_tested_letters: string[] = [];
let wrong_letters: string[] = []
let found_letters: number[] = [];
let coffeeLevel = 0;
let letters: HTMLElement | null;
let max_tries = 15;

const formatedWord = word.replaceAll('é'.toUpperCase(), 'E')
    .replaceAll('è'.toUpperCase(), 'E')
    .replaceAll('ê'.toUpperCase(), 'E')
    .replaceAll('à'.toUpperCase(), 'A');

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body')!.className = "fadeout";
    let arrow = document.getElementById("back")!;
    letters = document.getElementById("letters")!;
    arrow.onclick = () => {
        window.location.href = "../../index.html";
    };
    for (const _ of word) {
        let currentLetter = document.createElement("div");
        currentLetter.textContent = "_";
        currentLetter.className = "to_guess";
        letters.appendChild(currentLetter);
    }

    let input = document.getElementById("guess")! as HTMLInputElement;
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (input.value?.toUpperCase() === word) {
                fillLetters(letters!);
                end("win");
            } else {
                addCoffee();
            }
        }
    });
    document.getElementById("coffee_in_cup")!.style.height = '0';
});

window.addEventListener("keypress", (event) => {
    if (document.activeElement === document.getElementById("guess")!) return

    let pressed_key = event.key.toUpperCase();
    if (("A" <= pressed_key && pressed_key <= "Z")) {
        if (already_tested_letters.includes(pressed_key)) {
            addCoffee();
            return
        } else {
            already_tested_letters.push(pressed_key);
        }
    } else {
        return
    }

    if (formatedWord.includes(pressed_key)) {
        for (let i = 0; i < word.length; i++) {
            if (formatedWord[i] === pressed_key) {
                found_letters.push(i);
                letters!.children[i].textContent = word[i];
            }
        }
        if (found_letters.length === word.length) {
            end("win");
        }
    } else {
        wrong_letters.push(pressed_key);
        wrong_letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        fillLettersWithText(document.getElementById("wrong_letters")!, wrong_letters);
        addCoffee();
    }
});

function fillLetters(element: HTMLElement, list: number[] | null = null) {
    let element_letters = element.children;
    for (let i = 0; i < element_letters.length; i++) {
        if ((list !== null && list.includes(i)) || list === null) {
            element_letters[i].textContent = word[i]
        }
    }
}

function fillLettersWithText(element: HTMLElement, text: string[]) {
    while (element.hasChildNodes()) {
        element.firstChild?.remove();
    }
    for (let i = 0; i < text.length; i++) {
        let currentLetter = document.createElement("div");
        currentLetter.textContent = text[i];
        currentLetter.className = "letter";
        element.appendChild(currentLetter);
    }
}

function addCoffee() {
    if (coffeeLevel >= max_tries) {
        end("loose");
    }
    coffeeLevel += 1;
    let coffee_pot = document.getElementById("coffee_pot")!
    let trail = document.getElementById("coffee_trail")!;
    coffee_pot.className = "pour";
    setTimeout(() => {
        trail.style.height = "250px";
    }, 900);
    
    setTimeout(() => {
        addCoffeeLayer();
    }, 1400);
    setTimeout(() => {
        trail.style.height = "0"; trail.style.top = "264px";
        coffee_pot.className = "pour_reversed";
    }, 2000)
    setTimeout(() => {coffee_pot.className = ""; trail.style.top = "20px"}, 2990)
}

function addCoffeeLayer() {
    let coffee = document.getElementById("coffee_in_cup")!;
    let height = ((162 / max_tries) * coffeeLevel);
    
    coffee.style.top = (264 - height).toString() + 'px';
    coffee.style.height = height.toString() + "px";
}

function end(ending:string) {
    let body = document.querySelector('body')!;
    body.className += " fade"
	word = words[Math.floor(Math.random() * words.length)].toUpperCase();
    wrong_letters = found_letters = [];
    setTimeout(() => {
        window.location.href = `/src/html/${ending}.html`;
        body.className.replace(" fade", "");
    }, 2000)
}