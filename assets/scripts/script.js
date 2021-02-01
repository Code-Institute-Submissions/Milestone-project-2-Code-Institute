var pressed = [];                                      /*assign array to variable with user input*/
var score1 = 0;
var score2 = 0;
var player1 = 0;
var player2 = 0;
var player1choice = pressed[0];
var player2choice = pressed[1];

function greetings() {
    alert("The game has started");                                                 /*player 1 and player2 variables are added to function greeting*/
     this.player1 = window.prompt("Player 1, please enter your name: ");
     alert("Thanks" + player1);    
     this.player2 = window.prompt("Now, Player 2, please enter your name: ");
     alert("Thanks" + player2);
}

 window.addEventListener('keyup', (e) => {                                    /*window global scope*/
          //console.log(e.key);
           pressed.push(e.key);
          //console.log(pressed.length);
           //console.log(pressed);
   
            if(pressed.length == 2) {
              player1choice = pressed[0];
              player2choice = pressed[1];
              //console.log(player1choice, player2choice)
                 alert("Let´s see who win!"); 
              this.winner(pressed); 
            }
          });

function play() {
  alert("Please press OK and Play!");                                        /*function play*/
}

function winner(pressed){
      if(
        JSON.stringify(pressed) == JSON.stringify(["q", "8"]) ||
        JSON.stringify(pressed) == JSON.stringify(["w", "9"]) ||
        JSON.stringify(pressed) == JSON.stringify(["a", "5"]) ||
        JSON.stringify(pressed) == JSON.stringify(["s", "6"]) ||
        JSON.stringify(pressed) == JSON.stringify(["z", "3"])
      ) { alert("DRAW! Press start to play again!");} 
      else if (
        JSON.stringify(pressed) == JSON.stringify(["q", "3"]) ||
        JSON.stringify(pressed) == JSON.stringify(["q", "5"]) ||
        JSON.stringify(pressed) == JSON.stringify(["w", "8"]) ||
        JSON.stringify(pressed) == JSON.stringify(["w", "6"]) ||
        JSON.stringify(pressed) == JSON.stringify(["a", "9"]) ||
        JSON.stringify(pressed) == JSON.stringify(["a", "3"]) ||
        JSON.stringify(pressed) == JSON.stringify(["s", "5"]) ||
        JSON.stringify(pressed) == JSON.stringify(["s", "8"]) ||
        JSON.stringify(pressed) == JSON.stringify(["z", "6"]) ||
        JSON.stringify(pressed) == JSON.stringify(["z", "9"])
      ) { 
        switch(player1choice){
          case "q":
            player1choice = "ROCK!";
            break;
          case "w":
            player1choice = "PAPER!";
            break;
          case "a":
            player1choice = "SCISSORS!";
            break;
          case "s":
            player1choice = "SPOCK!";
            break;
          case "z":
            player1choice = "LIZARD!";
            break;
        }

                                                                           
        alert(this.player1 + " WIN with " + this.player1choice);
        this.score1++;
        alert(this.player1 + ": " + this.score1 + " X " + this.player2 + ": " + this.score2);

      } 
      else {
        switch(this.player2choice){
          case "8":
            this.player2choice = "ROCK!";
            break;
          case "9":
            this.player2choice = "PAPER!";
            break;
          case "5":
            this.player2choice = "SCISSORS!";
            break;
          case "6":
            this.player2choice = "SPOCK!";
            break;
          case "3":
            this.player2choice = "LIZARD!";
            break;
        }
        alert(this.player2 + " WIN with " + this.player2choice);
        this.score2++;
        alert(this.player1 + ": " + this.score1 + " X " + this.player2 + ": " + this.score2);
      }
      keepGoing();

}      
    
    //console.log(pressed);
   
  


function keepGoing() {                                                     
   if(confirm('Do you want to continue?')) { 
     this.pressed = [];
     play();
   } else {alert("Game Over!");}
}

function start() {                                                      /* function start calls function greetings and function play to begin game*/
     greetings();
      play();
}