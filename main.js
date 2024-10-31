const text = "Hey, I'm Foxtrot";
const textElement = document.getElementById("text1");
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 125);
    } else {
        addCursor();
    }
}

function addCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.innerHTML = "_";
    textElement.appendChild(cursor);
    cursor.style.left = `${textElement.offsetWidth}px`;
}

typeText();
