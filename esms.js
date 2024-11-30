const div1 = document.getElementById("d-1-c");
const div2 = document.getElementById("d-2-c");
const title1 = document.getElementById("day-1");
const title2 = document.getElementById("day-2");

function click1() {
    div1.style.display = "flex";
    div2.style.display = "none";
    title2.style.color = "#484848";
    title1.style.background = "#444";
    title1.style.color = "#ffffff";
    title2.style.background = "#44444453"
}

function click2() {
    div2.style.display = "flex";
    div1.style.display = "none";
    title1.style.color = "#484848";
    title2.style.background = "#444";
    title2.style.color = "#ffffff";
    title1.style.background = "#44444453"
}