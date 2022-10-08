let displayResult = '';
function addChar(e) {
    let btn = e.target;

    displayResult += btn.innerText;
    document.getElementById('res').innerHTML = displayResult;
}

function clearStr() {
    displayResult = '';
    document.getElementById('res').innerHTML = displayResult;
}

function executeStr() {
    let str = document.getElementById('res').innerText;
    let reGetBinary = /[01]+(?![01])/;

    let binaryNum = str.split(/[^01]/);
    let operators = str.split(reGetBinary);
    operators.shift();

    let decimalNum = [];
    for (i of binaryNum) {
        decimalNum.push(parseInt(i, 2));
    }

    let newStr = '';
    for (i in decimalNum) {
        newStr += decimalNum[i] + operators[i];
    }

    displayResult = eval(newStr).toString(2);
    
    document.getElementById('res').innerHTML = displayResult;
}

document.getElementById('btn0').onclick = addChar;
document.getElementById('btn1').onclick = addChar;
document.getElementById('btnSum').onclick = addChar;
document.getElementById('btnSub').onclick = addChar;
document.getElementById('btnMul').onclick = addChar;
document.getElementById('btnDiv').onclick = addChar;

document.getElementById('btnClr').onclick = clearStr;

document.getElementById('btnEql').onclick = executeStr;