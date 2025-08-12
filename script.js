function createRows(numRows) {
    if (!isWithinRange(numRows)) {
        // TODO: call display error
        return;
    }

    const NUM_OF_ROWS = numRows;
    for (let i = 0; i < NUM_OF_ROWS; i++) {
        const container = document.querySelector(".container");
        const div = document.createElement("div");
        const cls = ["row", `row-${i}`,];
        div.classList.add(...cls);
        container.appendChild(div);
    }
}

function createCols(numCols) {
    if (!isWithinRange(numCols)) {
        // TODO: call display error
        return;
    }
    
    const NUM_OF_COLS = numCols;
    const rowList = document.querySelectorAll(".row");
    rowList.forEach((row) => {
        for (let i = 0; i < NUM_OF_COLS; i++) {
            const div = document.createElement("div");
            const cls = ["col", `col-${i}`, "grid-item"];
            div.classList.add(...cls);
            row.appendChild(div);
        }
    });
}

function clearGrid() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
}

// https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(string) {
    return !isNaN(+string) && !(string === '');
}

function isWithinRange(num) {
    const MIN = 1;
    const MAX = 100;
    return MIN <= num && num <= MAX;
}

function loadGrid() {
    const gridItemList = document.querySelectorAll(".grid-item");
    gridItemList.forEach((gridItem) => {
        gridItem.addEventListener("mouseenter", function (e) {
            e.target.style["background-color"] = "yellow";
        }, {once: true});
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // TODO: add form logic
    const formData = new FormData(form);
    const numRows = formData.get("num-rows");
    const numCols = formData.get("num-cols");
    // TODO: add data validation
    if (isNumeric(numRows) && isNumeric(numCols)) {
        // TODO: clear the existing grid
        clearGrid();
        createRows(+numRows);
        createCols(+numCols);       
        loadGrid();
    }
});