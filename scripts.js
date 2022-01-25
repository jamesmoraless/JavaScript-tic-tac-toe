
let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializer = document.createElement('button');
initializer.innerText = 'Click me to start'
document.getElementById('game-over-lbl').appendChild(initializer);
initializer.addEventListener('click', (initializer)=>{initialEvent.target.hidden = true;});


// use the value stored in the nextPlayer variable to indicate who the next player is
let playerA = document.querySelector('b');
let playerB = 'Next Player: ';
playerA.innerText = playerB;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++)
    {
        let cellID = 'c' + (i+1);
        var newBtn = document.createElement('button');
        document.getElementById(cellID).appendChild(newBtn);
    }    
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
        event.target.innerText = nextPlayer;
        if (nextPlayer === 'X') {
            nextPlayer = 'O';
        }
        else{
            if (nextPlayer === 'O') {
                nextPlayer = 'X';
            }
        }
    
        let playerB = 'Next Player: ' + nextPlayer;
        playerA.innerText = playerB;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    event.target.disabled = 'disabled';
    
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        
        let label = document.getElementById('game-over-lbl')
        var newHeader = document.createElement('h1');
        newHeader.innerText = 'Game Over';
        label.appendChild(newHeader);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let clickedBtn = true;
    for (let i = 0; i < btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            clickedBtn = false;
        }
    }
    return clickedBtn;
}