const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrStr = expr.match(/.{1,10}/g)
    let outStr = '';
    arrStr.forEach(element => {
        if (element[0] === '*') {
            outStr += ' ';
        } else {
            let letter = '';
            element.replace(/(10)|(11)/g, (match, p1, p2) => {
                if (p1) letter += '.';
                if (p2) letter += '-';
            });
            outStr += MORSE_TABLE[letter];
        }
    });
    return (outStr);
}

module.exports = {
    decode
}
