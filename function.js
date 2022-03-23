/*
    main.js
    fonction.js

    Autant de branches que de fonctions

    1) calcul du volme d'un cône 
    2) nombre paire ou non 
    3) suite de fibonnacci en itératif et récursif 
    4) trouver avec deux nombre de PPCM et le PGCD. 
    5) retrouver les éléments communs d'une listed
    6) string palindrôme
    7) validité d'une adresse IP en paramètre
    8) bruteforce un chiffrement de César

*/

const alphabetFr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const listeReponsesPossible = [];

function bruteForceCesar(cesarString) {
    cesarString.toLowerCase();
    splitString = cesarString.split(' ');
    splitString.forEach(word => {
        splitWord = word.split('');
        splitWord.forEach(letter => {
            actualLetterIndex = alphabetFr.indexOf(letter);
            if (actualLetterIndex !== -1) {
                for (var i = 0; i < alphabetFr.length; i++) {
                    actualLetterIndex++;
                    if (actualLetterIndex >= alphabetFr.length) {
                        actualLetterIndex = 0;
                    }
                    if (!listeReponsesPossible[i]) {
                        listeReponsesPossible[i] = alphabetFr[actualLetterIndex];
                    } else {
                        listeReponsesPossible[i] += alphabetFr[actualLetterIndex];
                    }
                }
            }
        });
    });

    // Rajout des espaces des mots 

    console.log(listeReponsesPossible.toString());
}

function calculVolumeCone(base, hauteur) {
    console.log(1 / 3 * base * hauteur);
}