alert("PAPER SCISSORS ROCK");

paper.onclick = () => logic('paper');
rock.onclick = () => logic('scissors');
scissors.onclick = () => logic('paper');

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
}

/*
BEGIN FUNCTION logic(move)
    IF move == computer THEN
        RETURN draw
    IF (move == paper AND computer == scissors) 
    OR
    (move == scissor AND computer == rock)
    OR
    (move == rock AND computer == paper)
        RETURN computer wins
    ELSE
        RETURN player wins
    END IF
END FUNCTION
*/