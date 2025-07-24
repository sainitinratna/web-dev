let div = document.querySelector(".box").children;
console.log(div);


function getrandomcolor(){
    let val1 = parseInt(0 +Math.random()*255)
    let val2 = parseInt(0 +Math.random()*255)
    let val3 = parseInt(0 +Math.random()*255)

    return `rgb(${val1},${val2},${val3})`
}
Array.from(div).forEach(element => {
    element.style.backgroundColor = getrandomcolor()
    element.style.color = getrandomcolor()
});