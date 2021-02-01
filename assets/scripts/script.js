var pressed = [];
var score1 = 0
var score2 = 0
var player1 = 0
var player2 = 0

function start() {
  
  alert("The game has started");
  
   var player1 = window.prompt("Player 1, please enter your name: ");
   alert("Thanks " + player1);                                           /*  player one variable  */
     
    var player2 = window.prompt("Now, Player 2, please enter your name: ");
    alert("Thanks " + player2);                                            /*  player two variable  */
  
    alert("Press OK and Play!");
    var pressed = [];                            /*  variable pressed it will be run after player1 and player2 add their names */              
  
 window.addEventListener('keyup', (e) => {
  //console.log(e.key);
   pressed.push(e.key);
    //console.log(pressed.length);
   
   if(pressed.length == 2) {
         alert("Let´s see who win!")                         /*  alert after both player played their choices  */

         function winner(pressed){
             if(
               JSON.stringify(pressed) == JSON.stringify(["q", "8"]) ||
               JSON.stringify(pressed) == JSON.stringify(["w", "9"]) ||
               JSON.stringify(pressed) == JSON.stringify(["a", "5"]) ||
               JSON.stringify(pressed) == JSON.stringify(["s", "6"]) ||
               JSON.stringify(pressed) == JSON.stringify(["z", "3"])
                ) { alert("DRAW! Refressh the page and try again!")} 
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
                ) 
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
                {  alert(this.player2 + " WIN with " + this.player2choice)
        this.score2++
        alert(this.player1 + ": " + this.score1 + " X " + this.player2 + ": " + this.score2)
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
      keepGoing();
                  }
              }
            }
                          winner(pressed);
    }  
  
    
    //console.log(pressed); 
   
  )}