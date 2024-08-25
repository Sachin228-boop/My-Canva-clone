function addText() {
    const designArea = document.getElementById('designArea');
    const text = prompt('Enter your text:');
    const newText = document.createElement('div');
    newText.className = 'design-text';
    newText.textContent = text;
    designArea.appendChild(newText);
}

function changeColor() {
    const colorPicker = document.getElementById('colorPicker');
    const designTexts = document.querySelectorAll('.design-text');
    designTexts.forEach(text => {
        text.style.color = colorPicker.value;
    });
}
