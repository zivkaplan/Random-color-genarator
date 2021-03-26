const header = document.querySelector("h1");
const mainButton = document.querySelector("#mainButton");
const saveButton = document.querySelector("#saveButton");
const colorList = document.querySelector("#colorList");
const savedColors = document.querySelector("#savedColors");
const body = document.body;
const saving = document.querySelector("#saving");
let bgColor = [];
const allColors = []
let arrowToggle = false;

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
function randomColor() { //generates array with three numbers for RGB
    return [randomNumber(255), randomNumber(255), randomNumber(255)];
}
function isDarkColor(bgColor) {
    isDark = bgColor.filter(value => value <= 140);
    return (isDark.length >= 2);
}

function saveColor(bgColor) {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "text-nowrap", "d-flex", "row", "justify-content-between");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div1.classList.add("d-inline", "col-6", "hovering", "mx-0", "text-center");
    if (isDarkColor(bgColor)) {
        div1.classList.remove("border-dark")
        div1.classList.add("border-light")
    }
    div2.classList.add("d-inline", "d-flex", "col-6", "align-items-center", "justify-content-center", "hovering");
    div1.id = "div1";
    div2.id = "div2";
    const copySymbol = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
  </svg>`;
    //     const copied = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
    //   <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    //   <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    //   <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    // </svg>`;
    div1.addEventListener("mouseover", () => div1.innerText = "Set as Background");
    div1.addEventListener("mouseout", () => div1.innerText = `(${bgColor})`);
    div1.setAttribute("title", `${bgColor}`)
    div1.addEventListener('mousedown', () => div1.innerText = "Background Set!");
    div2.innerHTML = copySymbol;
    div2.addEventListener("mouseover", () => div2.innerHTML = "Click to Copy");

    div2.addEventListener('mousedown', () => div2.innerHTML = "&check;");
    // div2.addEventListener('mousedown', () => div2.innerHTML = copied);

    div2.addEventListener("mouseout", () => div2.innerHTML = copySymbol);
    li.style.backgroundColor = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`;
    div1.innerText = `(${bgColor})`;
    li.appendChild(div1);
    li.appendChild(div2);
    colorList.appendChild(li);
    if (isDarkColor(bgColor)) {
        li.style.color = 'rgb(255,255,255)';
    }
}

mainButton.addEventListener("click", function () {
    mainButton.classList.add("btn-outline-dark");
    saveButton.classList.add("btn-outline-dark");
    savedColors.classList.add("btn-outline-dark");
    saveButton.classList.remove("disabled")
    saveButton.innerText = 'Save Color'
    saving.classList.remove("d-none");
    header.style.color = 'rgb(0,0,0)';
    mainButton.innerText = "Generate Again"
    bgColor = randomColor();
    body.style.backgroundColor = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`;
    header.innerText = `RGB(${bgColor})`;
    if (isDarkColor(bgColor)) {
        header.style.color = 'rgb(255,255,255)';
        mainButton.classList.remove("btn-outline-dark");
        mainButton.classList.add("btn-outline-light");
        saveButton.classList.remove("btn-outline-dark");
        saveButton.classList.add("btn-outline-light");
        savedColors.classList.remove("btn-outline-dark");
        savedColors.classList.add("btn-outline-light");
    }
});

function doesInclude(allColors, bgColor) {
    let includes = false;
    for (i = 0; i < allColors.length; i++) {
        if (allColors[i][0] === bgColor[0] && allColors[i][1] === bgColor[1] && allColors[i][2] === bgColor[2]) {
            includes = true;
        }
    }
    return includes;
}


saveButton.addEventListener("click", function () {
    if (bgColor.length == 3) {
        saveButton.classList.add("disabled")
        saveButton.innerText = 'Color Saved!'
        allColors.push(bgColor);
        saveColor(bgColor);
        savedColors.classList.remove("d-none");
    }
});

savedColors.addEventListener("click", function () {
    colorList.classList.toggle("hide");
    if (arrowToggle === false) {
        document.querySelector("#savedColors span").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg>`;
        arrowToggle = true;
    }
    else if (arrowToggle === true) {
        document.querySelector("#savedColors span").innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" /></svg>`;
        arrowToggle = false;
    }
});

function copyToClip(colorToCopy) {
    const el = document.createElement('textarea');
    el.value = colorToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    document.execCommand('copy');
}

colorList.addEventListener('click', function (e) {
    if (e.target.id === 'div1') {
        const backToColor = e.target.title;
        mainButton.classList.add("btn-outline-dark");
        saveButton.classList.add("btn-outline-dark");
        savedColors.classList.add("btn-outline-dark");
        saveButton.classList.remove("disabled")
        saveButton.innerText = 'Save Color'
        saving.classList.remove("d-none");
        header.style.color = 'rgb(0,0,0)';
        mainButton.innerText = "Generate Again"
        bgColor = backToColor.split(',');
        for (let i = 0; i < 3; i++) {
            bgColor[i] = parseInt(bgColor[i]);
        }
        body.style.backgroundColor = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`;
        header.innerText = `RGB(${bgColor})`;
        if (isDarkColor(bgColor)) {
            header.style.color = 'rgb(255,255,255)';
            mainButton.classList.remove("btn-outline-dark");
            mainButton.classList.add("btn-outline-light");
            saveButton.classList.remove("btn-outline-dark");
            saveButton.classList.add("btn-outline-light");
            savedColors.classList.remove("btn-outline-dark");
            savedColors.classList.add("btn-outline-light");
        }
        if (doesInclude(allColors, bgColor)) {
            saveButton.classList.add("disabled")
            saveButton.innerText = 'Color Saved!'
        }
    }
    else if (e.target.id === 'div2') {
        const colorToCopy = e.target.previousSibling.innerText;
        copyToClip(colorToCopy);
    }
});