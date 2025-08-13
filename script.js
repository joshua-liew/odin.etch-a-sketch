function createRows(numRows) {
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

function clearErrors() {
    const errorDiv = document.querySelector(".error");
    if (errorDiv !== null)  errorDiv.outerHTML = "";
}

// takes in error object { message: string, }
function showError(error) {
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    const cls = ["error",];
    div.classList.add(...cls);

    const p = document.createElement("p");
    const string = `Error: ${error.message}`;
    p.textContent = string;
    div.appendChild(p);

    body.insertBefore(div, container);
    console.error(string);
}

// takes in list of errors and displays them
function handleErrors(errors) {
    errors.map(showError);
}

// https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(string) {
    return !isNaN(+string) && !(string === '');
}

function isWithinRange(num, min, max) {
    const MIN = min;
    const MAX = max;
    return MIN <= num && num <= MAX;
}

// returns a LIST of error objects
function validateFormData(numRows, numCols) {
    const errors = [];
    // TODO: add data validation
    if (!isNumeric(numRows) && errors.length === 0) {
        const error = {
            message: `Number of rows must be a valid integer`,
        };
        errors.push(error);
    }
    if (!isNumeric(numCols) && errors.length === 0) {
        const error = {
            message: `Number of columns must be a valid integer`,
        };
        errors.push(error);
    }

    const MIN_ROWS_COLS = 1;
    const MAX_ROWS_COLS = 100;
    if (
        !isWithinRange(numRows, MIN_ROWS_COLS, MAX_ROWS_COLS)
        && errors.length === 0
    ) {
        const error = {
            message: `Number of rows must be between ${MIN_ROWS_COLS} and ${MAX_ROWS_COLS}`,
        };
        errors.push(error);
    }
    if (
        !isWithinRange(numCols, MIN_ROWS_COLS, MAX_ROWS_COLS)
        && errors.length === 0
    ) {
        const error = {
            message: `Number of columns must be between ${MIN_ROWS_COLS} and ${MAX_ROWS_COLS}`,
        };
        errors.push(error);
    }
    
    return errors;
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

    clearErrors();
    const errors = validateFormData(numRows, numCols);
    if (errors.length === 0) {
        clearGrid();
        createRows(+numRows);
        createCols(+numCols);       
        loadGrid();
    } else {
        handleErrors(errors);
    }
});