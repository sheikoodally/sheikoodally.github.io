var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("usrScore");
const computerScore_span = document.getElementById("compScore");
const scorePoints_sec = document.querySelector(".scorePoints");
const result_h1 = document.querySelector(".result > h1");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}

function nameChange(letter){
	if (letter == "r") 
	{
		return "Rock";
	}
	if(letter == "p")
	{
		return "Paper";		
	}
	if(letter == "s")
	{
		return "Scissors";		
	}
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_h1.innerHTML = nameChange(userChoice) + " Beats " + nameChange(computerChoice) + " You Win!";
	document.getElementById(userChoice).classList.add('greenWin');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('greenWin')}, 500);
}

function lose(userChoice, computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_h1.innerHTML = nameChange(computerChoice) + " Beats " + nameChange(userChoice) + " You Lose!";
	document.getElementById(userChoice).classList.add('redLose');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('redLose')}, 500);
}

function draw(userChoice){
	result_h1.innerHTML = "Round Draw";
	document.getElementById(userChoice).classList.add('yellowDraw');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('yellowDraw')},500);
}



function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(userChoice,computerChoice);
			break;
	}
}

game();


function main(){

rock_div.addEventListener('click',function(){
	game("r");
})
	
paper_div.addEventListener('click',function(){
	game("p");
})
	
scissor_div.addEventListener('click',function(){
	game("s");
})
}

main();