function small() {
    header.classList.remove("middle1", "bigger1");
    header.classList.add("small1");
    console.log(small);
}
function middle() {
    header.classList.remove("small1", "bigger1");
    header.classList.add("middle1");
    console.log(middle);
}
function big() {
    header.classList.remove("small1", "middle1");
    header.classList.add("bigger1");
    console.log(big);
}