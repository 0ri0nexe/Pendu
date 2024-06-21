import words from "../words.json";

const word = words[Math.floor(Math.random() * words.length)].toUpperCase().trim();
let already_tested_letters:string[] = [];
let found_letters: number[] = []; 
let coffee_level = 0;
let letters: HTMLElement | null;

const formated_word = word.replace('é', 'e')
    .replace('è', 'e')
    .replace('ê', 'e')
    .replace('à', 'a');

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body')!.className = "fadeout";
    let arrow = document.getElementById("back")!;
    letters = document.getElementById("letters")!;
    arrow.onclick = () => {
        window.location.href = "../../index.html" ;
    };
    for (const _ of word) {
        let currentLetter = document.createElement("div");
        currentLetter.textContent = "_";
        currentLetter.className = "to_guess";
        letters.appendChild(currentLetter);
    }
});

window.addEventListener("keypress", (event) => {
    let pressed_key = event.key.toUpperCase();
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(pressed_key) ) {
        already_tested_letters.push(pressed_key)
    }
    if (formated_word.includes(pressed_key)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === pressed_key) {
                found_letters.push(i)
            }
        }
    }
});