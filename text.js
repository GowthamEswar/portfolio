const text = ['Stack Developer', 'Web Designer', 'And Smart'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function typing() {
    if (count === text.length) {
        count = 0
    }
    currentText = text[count]
    letter = currentText.slice(0, ++index)

    document.querySelector('.type').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(typing, 700)

}

function aftterload() {
    setTimeout(typing, 9000);
}

aftterload();