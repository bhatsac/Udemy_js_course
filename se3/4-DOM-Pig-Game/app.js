/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore,activePlayer,dice,gamePlaying;
var current0,current1,score0, score1,diceDOM;
init();

//dice = Math.floor(Math.random()*6)+1
//console.log(dice);

//setter
//document.querySelector('#current-'+ activePlayer).textContent=dice;
//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+dice+'</em>';

//getter
///var x= document.querySelector('#current-'+ activePlayer).textContent;
//console.log(x);

//document.querySelector('.dice').style.display=none;
/*function btn(){
    
}*/

/*
document.querySelector('.btn-roll').addEventListener('click',btn); //btn without the braces since it needs to be called by event listner and not by us, evet listner triggers it treating it as a fucntion 
*/



diceDOM.textContent='0';
score0.textContent='0';
score1.textContent='0';
current0.textContent='0';
current1.textContent='0';

document.querySelector('.btn-roll').addEventListener('click', function(){
                                                  // do something here 
if(gamePlaying){
      //1. Random Number
    var dice = Math.floor(Math.random()*6)+1                                                     
    //2. Display Result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    //3. Update the round score if the rolled number was NOT1 
        if(dice!==1){
            //add score
            roundScore+=dice;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
        } else {
            //Next Player
            nextPlayer();
        }  
    }

    
});  //anonymous function.


document.querySelector('.btn-hold').addEventListener('click',function(){
    
    //Add Current Score to Global Score
    scores[activePlayer] +=roundScore;
    
    //Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
    //Check if the player won the game
    
    if(scores[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    //Next Player
    nextPlayer();
    
    
});


function nextPlayer(){
    
    //Next Player
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        
        current0.textContent=0;
        current1.textContent=1;
       /* document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');*/
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        diceDOM.style.display='none';
}



document.querySelector('.btn-new').addEventListener('click',init);


function init(){
scores =[0,0];
roundScore =0;
activePlayer =0;
gamePlaying=true;
    
current0=document.getElementById('current-0');
current1=document.getElementById('current-0');
score0=document.getElementById('score-0');
score1=document.getElementById('score-1');
diceDOM=document.querySelector('.dice');

diceDOM.textContent='0';
score0.textContent='0';
score1.textContent='0';
current0.textContent='0';
current1.textContent='0';
    
 document.querySelector('#name-0').textContent='Player 1';
 document.querySelector('#name-1').textContent='Player 2';
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.add('active');
}












