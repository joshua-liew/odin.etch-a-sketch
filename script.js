const container = document.querySelector(".container");
container.style["display"] = "flex";
container.style["flexDirection"] = "column";

const NUM_OF_ROWS = 16;
for (let i = 0; i < NUM_OF_ROWS; i++) {
    const div = document.createElement("div");
    const cls = ["row", `row-${i}`,];
    div.classList.add(...cls);
    div.style["border"] = "0.25rem solid red";
    div.style["height"] = "25px";
    div.style["display"] = "flex";
    div.style["flexDirection"] = "row";
    div.style["justifyContent"] = "space-between";
    container.appendChild(div);
}

const NUM_OF_COLS = 16;
const rowList = document.querySelectorAll(".row");
rowList.forEach((row) => {
    for (let i = 0; i < NUM_OF_COLS; i++) {
        const div = document.createElement("div");
        const cls = ["col", `col-${i}`, "grid-item"];
        div.classList.add(...cls);
        div.style["border"] = "0.25rem solid blue";
        div.style["width"] = "100%";
        row.appendChild(div);
    }
});

const gridItemList = document.querySelectorAll(".grid-item");
gridItemList.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", function (e) {
        e.target.style["background-color"] = "yellow";
    }, {once: true});
});