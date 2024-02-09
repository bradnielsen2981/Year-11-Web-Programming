alert("PAPER SCISSORS ROCK");

paper.onclick = () => logic('paper');
rock.onclick = () => logic('scissors');
scissors.onclick = () => logic('paper');

function logic(move)
{
    alert(move);
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