function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomBox() {
    const boxes = ["one", "two", "three"];
    const randomIndex = Math.floor(Math.random() * boxes.length);
    return boxes[randomIndex];
}

const code = document.getElementById("code");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const color = getRandomColor();
code.innerText = color;

let oneValue;
let twoValue;
let threeValue;

const oneColor = getRandomColor();
while(oneColor === color) {
    oneColor = getRandomColor();
}
one.style.backgroundColor = oneColor;
oneValue = oneColor;
// one.innerText = oneColor;

const twoColor = getRandomColor();
while(twoColor === color || twoColor === oneColor) {
    twoColor = getRandomColor();
}
two.style.backgroundColor = twoColor;
twoValue = twoColor;
// two.innerText = twoColor;

const threeColor = getRandomColor();
while(threeColor === color || threeColor === oneColor || threeColor === twoColor) {
    threeColor = getRandomColor();
}
three.style.backgroundColor = threeColor;
threeValue = threeColor;
// three.innerText = threeColor;

const box = getRandomBox();

if(box == "one") {
    one.style.backgroundColor = color;
    oneValue = color;
    // one.innerText = color;
} else if(box == "two") {
    two.style.backgroundColor = color;
    twoValue = color;
    // two.innerText = color;
} else {
    three.style.backgroundColor = color;
    threeValue = color;
    // three.innerText = color;
}

one.addEventListener("click", () => {
    if(oneValue === code.innerText) {
        alert("You Win!");
    } else {
        alert("Try Again!");
    }
    window.location.reload();
});

two.addEventListener("click", () => {
    if(twoValue === code.innerText) {
        alert("You Win!");
    } else {
        alert("Try Again!");
    }
    window.location.reload();
});

three.addEventListener("click", () => {
    if(threeValue === code.innerText) {
        alert("You Win!");
    } else {
        alert("Try Again!");
    }
    window.location.reload();
});

