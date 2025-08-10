const container = document.querySelector(".container");

const NUM_OF_ROWS = 16;
for (let i = 0; i < NUM_OF_ROWS; i++) {
    const div = document.createElement("div");
    const cls = ["row", `row-${i}`,];
    div.classList.add(...cls);
    div.style["border"] = "0.25rem solid red";
    div.style["height"] = "25px";
    container.appendChild(div);
}