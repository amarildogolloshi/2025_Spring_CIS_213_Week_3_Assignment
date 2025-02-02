import React, { useEffect, useState } from 'react';
import Square from "./Square";
import './Board.css'


const Board = (props) => {
    
    
    const [squares, setSquares] = useState(Array(9).fill(null));

    const winnerCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Handel the restart game;
    useEffect(  () => {
        if(props.restart){
            //console.log("Board: restart");
            setSquares(Array(9).fill(null));
            props.setRestart(false);    
            props.setWinner(false);
            props.setStatus("Next");
        }
    },[props.restart])


    const nextTurn = (winner) => {
        if (!winner){   
            props.setTurn(props.turn === "X" ? "O" : "X" );
        }
    }

    const getCurrentCombinations = () => {
        return squares
        .map((item, index) => (item && item.includes(props.turn) ? index : -1))
        .filter(index => index !== -1);
    }

    const checkIsWinner = (currentCombinations) => {
        let isWinner = false;
        if(currentCombinations.length >= 3){

            for(let j = 0; j < winnerCombinations.length; j++ ){
                let countSquares = 0;
                //console.log("winnerCombinations:"+ winnerCombinations[j])
                
                for(let k = 0; k < currentCombinations.length; k++ ){
                    if( winnerCombinations[j].includes(currentCombinations[k])){
                        countSquares++;
                    }
                }

                //console.log(countSquares)
                if (countSquares >= 3){
                    isWinner = true;
                    //console.log(("the winner is:" + props.turn))
                    props.setWinner(true);
                    props.setStatus("Winner");
                    break;   
                }
            }
        }
        return isWinner;
    }
    
    let handleClick = (i) => { 
        
        // the cell is taken do not change the value
        if( squares[i] || props.isWinnerFound ){
            return;
        }

        // set value of the cel
        squares[i] = props.turn;

        //update the value af the cell
        setSquares[squares[i]]

        // define current combination
        let currentCombinations = getCurrentCombinations();

        // check for the winner
        let isWinner = checkIsWinner(currentCombinations);
        
        // Set next turn
        nextTurn(isWinner);
    }   
    
    return (
        <div className="board">
            <Square value={squares[0]} onSquareClick={ () => handleClick(0) } />
            <Square value={squares[1]} onSquareClick={ () => handleClick(1) } />
            <Square value={squares[2]} onSquareClick={ () => handleClick(2) }/>
            <Square value={squares[3]} onSquareClick={ () => handleClick(3) }/>
            <Square value={squares[4]} onSquareClick={ () => handleClick(4) }/>
            <Square value={squares[5]} onSquareClick={ () => handleClick(5) }/>
            <Square value={squares[6]} onSquareClick={ () => handleClick(6) }/>
            <Square value={squares[7]} onSquareClick={ () => handleClick(7) }/>
            <Square value={squares[8]} onSquareClick={ () => handleClick(8) }/>
        </div>
    );
};

export default Board;