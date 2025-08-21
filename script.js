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





let arr = [];






const showKeyNum = document.querySelectorAll(".show.num");
const showKeyOp = document.querySelectorAll(".show.operator");
const equals = document.querySelector(".displayer")

const display = document.querySelector("#display")

const allClear = document.querySelector("#allClear");

allClear.addEventListener("click", () => {
    display.textContent = null;
    arr.length = 0;
})

showKeyNum.forEach((item) => {
    item.addEventListener("click", () => {
        
        if(arr[0] === "Clear Me") {
            console.log("k");
            display.textContent = null;
            arr.length = 0;
        }``

        if (arr[1] == "+" || arr[1] == "-" || arr[1] == "/" || arr[1] == "*") {
            
            display.textContent = null;
        }


        display.textContent = `${display.textContent}${item.textContent}`;
    })
})
showKeyOp.forEach((item) => {
    item.addEventListener("click", () => {


        arr.push(display.textContent);
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
            display.textContent = arr[0];
        }
        arr.push(item.textContent);

    })
})


equals.addEventListener("click", () => {



    arr.push(display.textContent);
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
        arr[0] = "Clear Me";

        display.textContent = result;

    }
})




