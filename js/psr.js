alert("PAPER SCISSORS ROCK");

paper.onclick = () => logic('paper');
rock.onclick = () => logic('rock');
scissors.onclick = () => logic('scissors');

function getRandomMove() {
    let moves = ['paper', 'scissors', 'rock'];
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex]; 
}

function logic(move)
{
    let computermove = getRandomMove()
    alert(move);
    alert(computermove);
    if (move == computermove)
    {
        alert("Draw");
    } 
    else if ((move == 'paper' && computermove == 'scissors') ||
               (move == 'scissors' && computermove == 'rock') ||
               (move == 'rock' && computermove == 'paper')) 
    {
        alert('Computer wins');
    } 
    else {
        alert('Player wins');
    }
}