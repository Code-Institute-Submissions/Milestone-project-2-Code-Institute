function start() {                  /*  main start function  */

 alert("The game has started");     /*  game started warning  */

 var player1 = window.prompt("Player 1, please enter your name: ");
 alert("Thanks " + player1);                                            /*  player one variable  */

var player2 = window.prompt("Now, Player 2, please enter your name: ");
alert("Thanks " + player2);                                             /*  player two variable  */

 alert("Press OK and Play!");
 var pressed = [];                       /*  variable pressed it will be run after player1 and player2 add their names */

window.addEventListener('keyup', (e) => {
  //console.log(e.key);
   pressed.push(e.key);
    //console.log(pressed.length);

 if(pressed.length == 2) {
      alert("Let´s see who win!")                       /*  alert after both player played their choices  */


}