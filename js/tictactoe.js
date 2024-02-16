BEGIN
    Score = 0
    SET GRID = [[0,0,0]
                [0,0,0]
                [0,0,0]]
    SET player_turn = 0 
    IF mouse click
        IF player_turn
            INPUT mouse_click_coordinates
            SET ROW = determine_row(mouse_click_coordinates.y)
            SET COLUMN = determine_column(mouse_click_coordates.x)
            IF player_turn == 0
                CHANGE the cell of the GRID = X
            ELSE
                CHANGE the row of the GRID = Y
            END IF
            next players turn
        END IF
        check_for_winner()
        draw_grid()
    END IF
END

BEGIN FUNCTION draw_grid()
    FOR row in GRID
        FOR column in row
            draw_square()
            IF column == X
                draw_cross()
            ELSE IF column == Y
                draw_circle()
            END IF
        END FOR
    END FOR
END FUNCTION

BEGIN FUNCTION check_for_winner()
    FOR row in GRID
        IF row == [X,X,X]
            RETURN winner = 0
        ELSE IF row == [Y,Y,Y]
            RETURN winner = 1
        END IF
    END FOR

    IF (GRID[0][0] == GRID[1][1] == GRID[2][2]) OR (GRID[0][2] == GRID[1][1] == GRID[2][0])
        IF GRID[1][1] == X
            RETURN winner = 0
        ELSE IF GRID[1][1] == Y
            RETURN winner = 1
        END IF
    END IF

    FOR i in Range(LENGTH(GRID))
        IF (GRID[i][0] == GRID[i][1] == GRID[i][2])
            IF GRID[i][0] == X
                RETURN winner = 0
            ELSE
                RETURN winner = 1
        END IF
    END FOR

END FUNCTION





