

function ageInDays(){

var birthYear = prompt("what year wre you born... Good friend?");
var ageInDayss = (2018-birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode("You are "+ ageInDayss +" days old");
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);


}

function reset(){
    document.getElementById("ageInDays").remove();

}

function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById('flex-cat-gen');
    image.src = 'cat.jpg'
    div.appendChild(image);

}

//challange 3; Rock, Paper , Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    
     var humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice =  numberToChoice(randToRpsInt());
    console.log('Computer Choice:',botChoice);

    results = decideWinner(humanChoice , botChoice);
    console.log(results);

    message = finalMessage(results)
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5,'paper':0},
        'paper': {'rock':1,'paper':0.5, 'scissors':0},
        'scissors': {'paper':1,'scissors':0.5,'rock':0},
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore == 0){
        return{ 'message': 'You Lost!','color': 'red'};
    } else if (yourScore == 0.5){
        return{ 'message': 'You Tied!', 'color': 'yellow'};
    } else{
        return {'message': 'You Won!', 'color': 'green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById("rock").remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();
   
     var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
     var messageDiv = document.createElement('div');

     humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
     botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
     messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>"+ finalMessage['message']+"</h1>"

     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
     document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
// Challange 4: Change the color of All buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}


function buttonColorChange(buttonThingy){
if(buttonThingy.value=='red'){
    buttonRed();
} else if (buttonThingy.value =='green'){
    buttonGreen();
}else if (buttonThingy.value=='reset'){
    buttonColorReset();
}else if(buttonThingy.value=='random'){
    randomColors();
}
}

function buttonRed(){
    for(let i=0;i<all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0;i<all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset(){
    for(let i=0;i<all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors (){
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning'];

    for (let i=0; i<all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }

}
    
// challange 5: blackjack

document.querySelector("#blackjack-hit-button").addEventListener('click', blackjackHit);

function blackjackHit(){
    alert("ouch you click me");
}
