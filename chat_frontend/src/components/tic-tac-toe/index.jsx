import {useState, useEffect} from 'react';
import './styles.css';

function Square({value, onClick}){
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [status, setStatus] = useState('X turn');
    const [stopCondition, setStopCondition] = useState(false);




    function handleClick(index){
        if (!stopCondition){
        const newBoard = [...board];
        if (newBoard[index] ) return;
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        handleStatus(newBoard);}
        else return;
    }

    function checkWinner(board) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setStopCondition(true);
                return board[a];
            }
        }
        return null;
    }
    
    function restartGame(){
        setBoard(Array(9).fill(null))
        setCurrentPlayer('X');
        setStatus('X turn');
        setStopCondition(false);
    }

    function handleStatus(board){
        let winner = checkWinner(board);
        console.log(winner);
        if (winner){
            setStatus(`Winner is ${winner}`);
            return;
        } else if (!board.includes(null)){
            setStatus('It is a draw. Play again');
            return;
        } else {
            setStatus(`${currentPlayer} turn`);
        }
    }

    useEffect(() => {
        handleStatus(board);
    }, [board]);

    return (
        <div className='board'>
            <h1>Tic Tac Toe</h1>
            <div className='topRow'>
                <Square value={board[0]} onClick={() => handleClick(0)} />
                <Square value={board[1]} onClick={() => handleClick(1)} />
                <Square value={board[2]} onClick={() => handleClick(2)} />
            </div>
            <div className='middleRow'>
                <Square value={board[3]} onClick={() => handleClick(3)} />
                <Square value={board[4]} onClick={() => handleClick(4)} />
                <Square value={board[5]} onClick={() => handleClick(5)} />
            </div>
            <div className='bottomRow'>
                <Square value={board[6]} onClick={() => handleClick(6)} />
                <Square value={board[7]} onClick={() => handleClick(7)} />
                <Square value={board[8]} onClick={() => handleClick(8)} />
            </div>
            <div>
                <h2>{status}</h2>
            </div>
            <button onClick={()=>restartGame()} className='restartButton' />
        </div>
    )
}