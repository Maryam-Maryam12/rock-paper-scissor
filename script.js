let userScore=0;
let compScore=0;
const boxes = document.querySelectorAll('.box');
const msg= document.querySelector('#msg');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
	const options = ["rock", "paper", "scissors"];
	//formula to choose rendom number
	const ranIdx = Math.floor(Math.random()*3);
	return options[ranIdx];
}

const drawGame= ()=>{
	msg.innerText= "game was draw. Play again";
	msg.style.backgroundColor= "blue";
}

const showWinner = (userWin, boxId, compChoice)=>{
	if (userWin) {
		userScore++;
		userScorePara.innerText= userScore;
		msg.innerText= `You Win! ${boxId} beats ${compChoice} `;
		msg.style.backgroundColor= "green";

	}else{
		compScore++;
		compScorePara.innerText=compScore;
		msg.innerText=`You Lose!  ${compChoice} beats ${boxId} `;
		msg.style.backgroundColor= "red";
	}
}

const playGame = (boxId)=>{
	console.log("user choice = ", boxId);
	const compChoice = genCompChoice();
	console.log("computer choice", compChoice);
	if(boxId === compChoice){
		drawGame();
	}else{
		let userWin = true;
		if (boxId === "rock") {
		    userWin = compChoice==="paper" ?false : true; 
		}else if(boxId === "paper"){
			userWin = compChoice === "scissors" ? false:true;
		}else{
			userWin = compChoice === "rock" ? false:true;
		}
		showWinner(userWin, boxId, compChoice);
	}
}

boxes.forEach((box)=>{
	box.addEventListener("click",()=>{
		const boxId=box.getAttribute("id");
		 playGame(boxId);
	});
});