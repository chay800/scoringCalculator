const missBtn = document.getElementById("missBtn");
const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");
const tenBtn = document.getElementById("tenBtn");
const xBtn = document.getElementById("xBtn");
const delBtn = document.getElementById("delBtn")
const delXBtn = document.getElementById("delXBtn")
const clear = document.getElementById("clear")

const xTotal = document.getElementById("xTotal")
const previousNum = document.getElementById("previousNum");
const totalNum = document.getElementById("totalNum");
const display = document.getElementById("display");
let count = 0;
let total = 0;
let xCount = 0;
let num = []

previousNum.textContent = ("Previous Numbers: " + num.toString())
totalNum.textContent = ("Amount of Numbers Entered: " + count.toString())
xTotal.textContent = ("Amount of X's: " + xCount.toString())



function updateScreen(){
    if(count == 0){
    previousNum.textContent = ("Previous Numbers: " + "(No Scores Entered)")
    }
}

updateScreen()

function clickButton(input){
    if(count < 10){

        num.push(input)
        total += input;
        display.textContent = total;
        count ++
        previousNum.textContent = ("Previous Numbers: " + num.toString())
        totalNum.textContent = ("Amount of Numbers Entered: " + count.toString())
    }
    updateScreen()
}

missBtn.onclick = function(){
clickButton(0)
}

fourBtn.onclick = function(){
clickButton(4)
}

fiveBtn.onclick = function(){
clickButton(5)
}

sixBtn.onclick = function(){
clickButton(6)
}

sevenBtn.onclick = function(){
clickButton(7)
}

eightBtn.onclick = function(){
clickButton(8)
}

nineBtn.onclick = function(){
clickButton(9)
}

tenBtn.onclick = function(){
clickButton(10)
}

xBtn.onclick = function(){
    if(count < 10){
      
        num.push(10)
        total += 10;
        display.textContent = total;
        count ++
        xCount ++
        previousNum.textContent = ("Previous Numbers: " + num.toString())
        totalNum.textContent = ("Amount of Numbers Entered: " + count.toString())
        xTotal.textContent = ("Amount of X's: " + xCount.toString())
    }
    updateScreen()
}

delBtn.onclick = function(){
   if(count > 0){ 
    let lastNum = num[num.length - 1];
    num.pop();
    total = total - lastNum;
    display.textContent = total;
    count = count - 1;
    previousNum.textContent = ("Previous Numbers: " + num.toString());
    totalNum.textContent = ("Amount of Numbers Entered: " + count.toString());
   }
   updateScreen()
}

delXBtn.onclick = function(){
    if(count > 0){
    let lastNum = num[num.length - 1];
    num.pop();
    total = total - lastNum;
    display.textContent = total;
    count = count - 1;
    if(xCount > 0){
    xCount = xCount - 1;
    }
    previousNum.textContent = ("Previous Numbers: " + num.toString());
    totalNum.textContent = ("Amount of Numbers Entered: " + count.toString());
    xTotal.textContent = ("Amount of X's: " + xCount.toString())
    }
    updateScreen()
}

clear.onclick = function(){
    num = [];
    total = 0;
    count = 0;
    xCount = 0;
    display.textContent = total;
    previousNum.textContent = ("Previous Numbers: " + num.toString());
    totalNum.textContent = ("Amount of Numbers Entered: " + count.toString());
    xTotal.textContent = ("Amount of X's: " + xCount.toString());
    updateScreen()
}