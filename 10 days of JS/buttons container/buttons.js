let divElement = document.createElement("Div");
divElement.id = "btns";
divElement.className = "buttonContainer";

let btn1 = document.createElement("Button");
btn1.id = "btn1";
btn1.className = "button";
btn1.innerHTML = "1";
divElement.appendChild(btn1);

let btn2 = document.createElement("Button");
btn2.id = "btn2";
btn2.className = "button";
btn2.innerHTML = "2";
divElement.appendChild(btn2);

let btn3 = document.createElement("Button");
btn3.id = "btn3";
btn3.className = "button";
btn3.innerHTML = "3";
divElement.appendChild(btn3);

let btn4 = document.createElement("Button");
btn4.id = "btn4";
btn4.className = "button";
btn4.innerHTML = "4";
divElement.appendChild(btn4);

let btn5 = document.createElement("Button");
btn5.id = "btn5";
btn5.className = "button";
btn5.innerHTML = "5";
btn5.onclick = function () {
    let saveBtn1Str = btn1.innerHTML;
    btn1.innerHTML = btn4.innerHTML;
    btn4.innerHTML = btn7.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn2.innerHTML = saveBtn1Str;
};
divElement.appendChild(btn5);

let btn6 = document.createElement("Button");
btn6.id = "btn6";
btn6.className = "button";
btn6.innerHTML = "6";
divElement.appendChild(btn6);

let btn7 = document.createElement("Button");
btn7.id = "btn7";
btn7.className = "button";
btn7.innerHTML = "7";
divElement.appendChild(btn7);

let btn8 = document.createElement("Button");
btn8.id = "btn8";
btn8.className = "button";
btn8.innerHTML = "8";
divElement.appendChild(btn8);

let btn9 = document.createElement("Button");
btn9.id = "btn9";
btn9.className = "button";
btn9.innerHTML = "9";
divElement.appendChild(btn9);


document.body.appendChild(divElement);