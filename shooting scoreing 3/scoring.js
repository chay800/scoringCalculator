const scoresheet = document.getElementById("Scoresheet")
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

const scorecard = document.getElementById("Scorecard")
const slowfire = document.getElementById("slowfire")
const timed = document.getElementById("timedfire")
const rapid = document.getElementById("rapidfire")
const enter = document.getElementById("enter")

const xTotal = document.getElementById("xTotal")
const previousNum = document.getElementById("previousNum");
const totalNum = document.getElementById("totalNum");
const display = document.getElementById("display");
let count = 0;
let total = 0;
let xCount = 0;
let num = [];

previousNum.textContent = ("Previous Numbers: " + num.toString());
totalNum.textContent = ("Amount of Numbers Entered: " + count.toString());
xTotal.textContent = ("Amount of X's: " + xCount.toString());
scoresheet.hidden = false
scorecard.hidden = true

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

let firstScore = 0
let secondScore = 0
let thirdScore = 0
let scores = []
let total2 = 0

const totalScore = document.getElementById("totalScore")

function calculate(){
    if(scores.length > 2){
        total2 = (firstScore + secondScore + thirdScore)
        totalScore.textContent = ("Total: " + total2.toString())
    }
}

enter.onclick = function(){
    scores.push(total)
    firstScore = scores [0]
    secondScore = scores [1]
    thirdScore = scores [2]
    scorecard.hidden = false
    scoresheet.hidden = true
    slowfire.textContent = ("Slow Fire: " + firstScore.toString())
    timed.textContent = ("Timed Fire: " + secondScore.toString())
    rapid.textContent = ("Rapid Fire: " + thirdScore.toString())
    calculate()
}

scoreBtn.onclick = function(){
    scorecard.hidden = true
    scoresheet.hidden = false
    calculate()
}

seeScoreBtn.onclick = function(){
    scorecard.hidden = false
    scoresheet.hidden = true
}

resetBtn.onclick = function(){
    scores = []
    slowfire.textContent = ("Slow Fire: ")
    timed.textContent = ("Timed Fire: ")
    rapid.textContent = ("Rapid Fire: ")
    calculate()
}

calcBtn.onclick = function(){
    calculate()
}