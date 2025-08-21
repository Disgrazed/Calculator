function sum(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

console.log(multiply("\n \n \n 4", .7));

let arr = [];
let span;

let operator;


let flag = false;




const showKeyNum = document.querySelectorAll(".show.num");
const showKeyOp = document.querySelectorAll(".show.operator");

const equals = document.querySelector(".eq")

const display = document.querySelector("#display")

const allClear = document.querySelector("#allClear");

allClear.addEventListener("click", () => {
    display.textContent = null;
    arr.length = 0;
})

showKeyNum.forEach((item) => {


    item.addEventListener("click", () => {
        if (flag == true) {
            display.textContent = null;
            flag = false;
        }

        if (operator == "/" && item.textContent == "0" && display.textContent == "") {
            alert("Can't divide with zero")
        }
        else { display.textContent = `${display.textContent}${item.textContent}` };


    })


})


showKeyOp.forEach((item) => {
    item.addEventListener("click", () => {

        if (flag == true) {
            display.textContent = null;
            flag = false;
        }

        if (!(display.textContent === "")) { arr.push(display.textContent) };

        display.textContent = null;


        if (arr.length == 3) {
            arr = arr.map((item) => {
                if (item == "+" || item == "-" || item == "/" || item == "*") { return item }
                else { return Number(item) };
            })
            let result;
            switch (arr[1]) {
                case "+":
                    result = sum(arr[0], arr[2]);
                    break;
                case "-":
                    result = subtract(arr[0], arr[2]);
                    break;
                case "*":
                    result = multiply(arr[0], arr[2]);
                    break;
                case "/":
                    result = divide(arr[0], arr[2]);
                    break;
            }

            arr.length = 0;


            arr.push(result);
            display.textContent = result.toFixed(2);
            flag = true;

        }

        operator = item.textContent;
        arr[1] = operator;

    })
})


equals.addEventListener("click", () => {
    if (flag == true) {
        display.textContent = null;
        flag = false;
    }

    if (!(display.textContent === "")) { arr.push(display.textContent) };

    display.textContent = null;

    if (arr.length == 3) {
        arr = arr.map((item) => {
            if (item == "+" || item == "-" || item == "/" || item == "*") { return item }
            else { return Number(item) };
        })
        let result;
        switch (arr[1]) {
            case "+":
                result = sum(arr[0], arr[2]);
                break;
            case "-":
                result = subtract(arr[0], arr[2]);
                break;
            case "*":
                result = multiply(arr[0], arr[2]);
                break;
            case "/":
                result = divide(arr[0], arr[2]);
                break;
        }

        arr.length = 0;


        arr.push(result);
        display.textContent = result.toFixed(2);
        flag = true;

    }

    else {
        alert("Invalid Action");
    }
})





