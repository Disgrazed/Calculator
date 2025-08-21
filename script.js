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

    if (y == 0) {
        return "Error";
    }
    else { return x / y; }
}

console.log(multiply("\n \n \n 4", .7));

let arr = [];
let span;

let operator;


let flag = false;
let flagOp = false;
let flagDec = false;
let flagEq = false;
let flagZero = false;
let limbo;




const showKeyNum = document.querySelectorAll(".show.num");
const showKeyOp = document.querySelectorAll(".show.operator");

const equals = document.querySelector(".eq")

const display = document.querySelector("#display")

const allClear = document.querySelector("#allClear");

allClear.addEventListener("click", () => {
    flag = false;
    flagOp = false;
    flagDec = false;
    flagEq = false;
    display.textContent = null;
    arr.length = 0;
    console.log("ram");
})

showKeyNum.forEach((item) => {

    if (item.textContent == ".") {
        item.addEventListener("click", () => {
            if (flagEq == true) {
                allClear.click();
            }

            flagDec = !(flagDec);
            if (flagDec == true) {
                if (flag == true) {
                    display.textContent = null;
                    flag = false;
                }

                if (flagOp == true) {
                    display.textContent = null;
                    flagOp = false;
                }


                display.textContent = `${display.textContent}${item.textContent}`
                limbo = display.textContent;
                ;
            }

            else {
                alert("Can't use more than 1 decimals")
                flagDec = true;
            }
        }
        )
    }

    else {
        item.addEventListener("click", () => {
            if (flagEq == true) {
                allClear.click();
            }
            if (flag == true) {

                display.textContent = null;
                flag = false;
            }

            if (flagOp == true) {

                display.textContent = null;
                flagOp = false;
            }

        

            display.textContent = `${display.textContent}${item.textContent}`
            limbo = display.textContent;



        })
    }


})


showKeyOp.forEach((item) => {
    item.addEventListener("click", () => {

        
        flagOp = true;
        flagDec = false;
        if (!(limbo === "")) { arr.push(limbo); limbo = ""; };

        if (flagEq == true) {
            flagEq = false;
        }
        


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

            if (result == "Error") {
                alert("Can't divide by zero. Bye.");
                allClear.click();
                flagZero = true;
            }
            else {
                arr.push(result);
                display.textContent = result.toFixed(2);
                flag = true;

            }

            

        }

        if (flagZero == false)
            {operator = item.textContent;
            arr[1] = operator;}
            else{
                flagZero = false;
            }



    })
})


equals.addEventListener("click", () => {



    if (!(limbo === "")) { arr.push(limbo); limbo = ""; flagDec = true; };

    if (arr.length == 3) {
        flagEq = true;
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


        if (result == "Error") {
                alert("Can't divide by zero. Bye.");
                allClear.click();
                
            }
            else {
                arr.push(result);
                display.textContent = result.toFixed(2);
                flag = true;

                
            }

    }

    else {

        alert("Invalid Action");
        

    }
})





