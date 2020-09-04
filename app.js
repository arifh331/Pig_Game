/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gameplaying;

//Call the init function which was defined below which intializes the game

init();





document.querySelector('.btn-roll').addEventListener('click', function() {
    //This is the anonymous function when the button is clicked 
    
    //We want this to be executed only if the game is still playing!
    if (gameplaying) {
        
    //First the random number for when the dice is rolled!
    dice= Math.floor(Math.random()*6)+1;
    
    //Now lets display the result! Setting the display Property to 'block'
    var diceDom = document.querySelector('.dice');
    diceDom.style.display= 'block';
    diceDom.src= 'dice-'+dice+'.png';
    
        
   
    //Update the round the score only if the score is not 1 otherwise its the next players turn
     if (dice !== 1 ) {
        //Add the score to the round score for the player
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        
        
        
    }
    else {
        //If its one then its the next player
       nextplayer();
        
    }
        
        
    }
    

    
    
    
});

//Adding an eventlistner in the case the Hold button is clicked!
document.querySelector('.btn-hold').addEventListener('click',function() {
    
    //The button only works if the game is still playing
    if (gameplaying) {
        
        
        //Add the current/round score to the global score of the player 
    scores[activePlayer] += roundScore;
    
    //Update user-interface as in the display to make sure the appearance makes sense
    
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
    
    //Check if player has won the game!
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-'+ activePlayer).textContent='Winner!';
        
        //If you win the game, the dice should not be visible anymore!
        document.querySelector('.dice').style.display= 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
        //If the game has been won, then gameplaying is set to false because the game is finished 
        
        gameplaying=false;
    }
    //If he doesn't win the game, switch to the next player 
    else {
          //Switch to the next player
    
    nextplayer();
    }
        
    }
    
    

    
  
});



//New event listener in the case that the New button is clicked 
//It makes use of the init function whic is passed in as a parameter 
document.querySelector('.btn-new').addEventListener('click', init);


//This function initializes the game or starts it off!
function init () {
   
    //Array contains the scores of the 2 players
    scores= [0,0]
    //Only one variable needed for round score
    roundScore= 0;
    //Which player is active at the moment
    activePlayer=0;

    //Of course if the game is being intializedd the gameplaying is set to true
    gameplaying=true;


   



    document.querySelector('.dice').style.display= 'none';

    //Setting Total Score of Both Players to Zero for the beginning
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';

    //Round score of both players is 0 in the beginning
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    //Taking out the winner class away from each player because in the begginning there is no winner 
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 

    //Now we remove active class from both players because no class is active in new game 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active'); 

    //But we still have to set player 0 to active class afterwards because 
    //the game starts with player 0 as active 
    //The reason we needed to remove it first is because later on we might 
    // need to remove the active class such as when we switch turns 
    // but if there is 2 active classes on player 0, even if we remove 1 of them, there will still be another 1 left

    document.querySelector('.player-0-panel').classList.add('active'); 



}


//This is a function for changing players so we avoid writing the code over and over! 
function nextplayer () {
    //Use Turnary Operator to change players 
        activePlayer === 0 ? activePlayer = 1 : activePlayer=0;
        roundScore=0;
        
   
        
        //Resetting the round score to 0 for the HTML
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        
        //Changing if the player class is active or not which means 
        //if it has the grayed out background and red dot or not 
        //We are toggling between active states 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //I want to allow the dice to not be visible between players
        document.querySelector('.dice').style.display= 'none';
}


function myFunction() {
  winv = document.getElementById("myText").value;
}





