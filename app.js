var userScore=0;
var aiScore=0;
const userScore_span=document.getElementById("userScore");
const aiScore_span=document.getElementById("aiScore");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const blaster_div=document.getElementById("blaster");
const saber_div=document.getElementById("saber");
const force_div=document.getElementById("force");
const result_p=document.getElementById("battle-result")

main();

function main(){
    blaster_div.addEventListener('click', function(){ 
        battle("blaster");
    });
    saber_div.addEventListener('click', function(){
        battle("saber");
    });
    force_div.addEventListener('click', function(){
        battle("force");
    });
}

function battle(moveChoice){
    const aiChoice=getAiMoveChoice();
    switch(moveChoice + aiChoice){
        case "blastersaber":
        case "saberforce":
        case "forceblaster":
            lose(moveChoice, aiChoice);
            break;
        case "blasterforce":
        case "saberblaster":
        case "forcesaber":
            win(moveChoice, aiChoice);
            break;
        case "blasterblaster":
        case "forceforce":
        case "sabersaber":
            tie(moveChoice, aiChoice);
            break;
    }
}

function getAiMoveChoice(){
    const choices = ['blaster','saber','force'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];

}

function win(userChoice, aiChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "You chose " + userChoice + " against AI's " + aiChoice + " and won!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1000)

}
function lose(userChoice, aiChoice){
    aiScore++;
    aiScore_span.innerHTML = aiScore;

    result_p.innerHTML = "You chose " + userChoice + " against AI's " + aiChoice + " and lost!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 1000)
}
function tie(userChoice, aiChoice){
    result_p.innerHTML = "You both chose " + userChoice + " and tied...";
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('yellow-glow')
    }, 1000)
}
