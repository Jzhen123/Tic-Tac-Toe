# **Tic Tac Toe Pseudo Code**

## Objective:

Two users play the game Tic Tac Toe and until the game results in a winner or a draw

## Steps:

    Start:

    1. User presses start on the Tic Tac Toe game
    2. The first player (X) is prompted to select a tile to place their X on
    3. Then the second player (O) is prompted to place their O on but can not be on a tile with an X or O already on it
    4. The two players keep taking turns until there are three of the same symbol in a row/across. 
    5. If there are no tiles left and no player has three in a row/across, the game results in a draw
    6. When the game ends there should be a restart game option along with who won or if there was a draw
    7. If the user restarts the game, the board should be reset, not reload the entire page

    END.

## Events:

    
    

## Notes from Lecture:

### 1. What goes in the view:

    container
        row
            header  
        row
            both players
                show their wins and losses
                show whose turn it is
                who won / tie (ending win condition first placement)
        row
            the actual grid
                    1 row
                        9 cols - size 4
                    OR
                    3 rows
                        3 cols - size 4 each row
                            tile 
                                X or O or blank
        row
            restart button
        modal
            (show the winner or the tie) (ending win condition second placement)

### 2. What goes in the model:

    whos turn it is:
        "x" || "o" as a string
        count (0, 1, 2... -> n)
            dual purpose: keep track of game moves
        boolean: true / false === true, but o is false
    
    we need to know who won
        number (based on the sum of all rows, cols, diags)
            // use a controller method that would set the state of this number

        stores some number in an array
            (o for no click, 1 for x, -1 for O)
            ("" for no click, "X" for x, "O" for o)

            what the array structure looks like 
                [ [], [], [] ] - idea 1 (stores 3 each)
                [], [], [] - idea 2 (stores 3 each)
                [
                    0, 1, 2, 3, 4, 5, 6, 7, 8
                ] - idea 3 (stores 9)

            Tite: ("" for no click, "X" for x, "O" for o)
                {
                    "" || "x" || "o"
                    clicked? - can be abstracted
                    where it is? - can be abstracted
                    where it is? - can be abrstracted
                    bgColor: "" || "x" || "o" can be abstracted??? maybe
                }


            // too verbose, but it is an option (for chess)
            [{
                turn 1
                    tileType:"knight"
                    player:"x",
                    location: [0,2]
                },
                turn 2 
            ]

    tile could have states
        boolean: true / false to dictate the tile clickability
         on any in game , lock specific tile
         on the finish of the game, lock the tiles

### 3. What goes in the controller

    initialize
    // pseudocode this
    
    helper function for dynamic rendering
        // generateElement  
    render method
    select x or o (stretch goal)

    tile click event listener
        (moves>5) ? condition
        win condition
        // check to see if there is a winner or tie?
        set tile clickability
        switch current player
    
    win condition
        did we have a winner
        set tile clickability for all tiles
        display final game state 
        restart click even listener     

    restart button
        forfeit / autowin (stretch goal)
    lose button (stretch goal)
    game history (stretch goal)



