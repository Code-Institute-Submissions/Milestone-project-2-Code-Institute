# Rock Paper Scissors Lizard Spock

## Milestone Project 2 Interactive Front-End Development
Rock Paper Scissors Lizard Spock is game develop as project for Code Institute.

## Strategy

This is two person game build for desktop or laptops with doc station.The game is an expansion on the game Rock, Paper, Scissors. 
Each player picks a variable and reveals it at the same time. So to play this game, player one will use left side of keyboard and
player 2 will use right side of keyboard(numeric). Before players play their choices, they will cover commands with other hand,
so opponent can not see their choice.

## Scope

Rock Paper Scissors Lizard Spock originaly game rules was established from Sam Kass and Karen Bryla, but game 
become globally famous with Big Bang Theory show. So this project is like tribute to that show.
After button start is pressed game will start and players will enter their names and proceed with game.
After player 1 press his choice than player 2 also needs to press his choice and we will see results.
Game does not have end, player can play it indefinitely.

## Structure

Game is made from main html page. Main color on page eye resting cornsilk, with green button and
black ubuntu font. On bottom of page there is icon that opens new window with youtube link.
 Visible elements on  [page](https://github.com/mariodragun/Milestone-project-2-Code-Institute/blob/master/assets/images/game.PNG): 
* game title
* start button
* main image ( which is also graphical representation of game rules) 
* list with player one controls
* list with player two controls
* bottom button which opens you tube video where Sheldon Cooper explains game rules

## Skeleton

Wireframe skelton was build with softwere balsamiq and uploaded in wireframes folder
1. [wireframe of  main page](https://github.com/mariodragun/Milestone-project-2-Code-Institute/blob/master/wireframes/wireframe%20main%20page.PNG)

## Technologies used

1. HTML
2. CSS
3. Google Fonts
4. Font Awesome
5. Java Script
6. JSON (JavaScript Object Notation) 

## Features
This game was developed  primay for full keyboard desktop computers and laptops on dock station.

## Testing 
Final version of this projects was tested on several browsers: Chrome, Firefox, Safari.
Game was long time tested through playing. All of the elements are working properly.
 CSS, Html and Java script codes are tested successfully with validators.
1. [CSS validator](https://github.com/mariodragun/Milestone-project-2-Code-Institute/blob/master/assets/images/CSS%20validator.PNG)
2. [HTML  validator](https://github.com/mariodragun/Milestone-project-2-Code-Institute/blob/master/assets/images/html%20validator.PNG)
3. [Java Script validator](https://github.com/mariodragun/Milestone-project-2-Code-Institute/blob/master/assets/images/JS%20validator.PNG)

Test on  https://jshint.com/ is showing no errors but is getting messages that there is 4 unused variables:
score1, score2, winner and start.
For the first three, the "problem" seems to be is that they are called only as properties (inside alerts) and not as plain variables.
For the fourth, the problem is that it is called from the HTML, not from inside the JS file.
There is no error but this messages only can be removed if the code is complitly changed from beginning.

## Deployment
This project was developed using the Git pod edditor and committed to GitHub. As
[Milestone-project-2-Code-Institute](https://mariodragun.github.io/Milestone-project-2-Code-Institute/)

## Development
Project was developed using git pod and uploaded to git hub.
The greatest chalenge was to make game controls runnig with keyboard. Second chalenge was to repair typos that was
causing that functions was not running as they spouse to.

## Further development
There is possibility for further development of this game in way to add another mode so that can be indefinitely
and games up to 5 and upm to 10. Other of choice is to add button day mode/ night mode.

## Credits
Font Ubuntu used for projects are imported from google fonts and youtube icon has been imported from
Font Awsome. Main image was downloaded from page teepublic.com [image](https://www.teepublic.com/magnet/675956-rock-paper-scissors-lizard-spock).
Video with game rules was used from [youtube](https://www.youtube.com/watch?v=_PUEoDYpUyQ)

## Conclusion
 Game Rock Paper Lizard Spock was developed only for educational use and will not be in commercial use.
