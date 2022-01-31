'use strict';

let score = 20;

let randomNumber = Math.floor(Math.random() * 20) + 1;



document.querySelector(".btn").addEventListener("click", function(){
	let guess = Number(document.querySelector(".guess").value);
	
	if(!guess){
		document.querySelector(".comment").textContent = "No number";
	}
	else if(guess > randomNumber){
		if(score > 0){
			document.querySelector(".comment").textContent = "Too high 😉";
		document.querySelector(".score").textContent = score;
		score--;
		}
		else{
			document.querySelector(".comment").textContent = "You lost";
			document.querySelector(".score").textContent = 0;
		}
		
	}
	else if(guess < randomNumber){
		if(score > 0){
		document.querySelector(".comment").textContent = "Too low 😉";
		document.querySelector(".score").textContent = score;
		score--;
		}
		else{
			document.querySelector(".comment").textContent = "You lost";
			document.querySelector(".score").textContent = 0;
		}
		
	}
	else if(guess === randomNumber){
		document.querySelector(".comment").textContent = "You won 🏆";
		document.querySelector("body").style.backgroundColor = "#46F507";
		document.querySelector(".guess").style.background = "#46F507";
		document.querySelector(".btn").style.background = "#46F507";
	}
})
