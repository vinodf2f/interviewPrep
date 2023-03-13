import { useState } from "react";
import "./styles.css";

const intialValues = Array(9).fill("");

const Box = ({ num, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ width: 100, height: 100, border: "1px solid black" }}
    >
      {num}
    </div>
  );
};
const players = {
  X: "X",
  O: "O"
};

const winningComditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 5, 6]
];

const checkWinner = (values) => {
  let winner = null;
  winningComditions.forEach((item) => {
    if (values[item[0]] === "") {
      return;
    }
    if (
      values[item[0]] === values[item[1]] &&
      values[item[1]] === values[item[2]]
    ) {
      winner = values[item[0]];
    }
  });
  return winner;
};

export default function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState(players.X);
  const [values, setValues] = useState(intialValues);
  const [winner, setWinner] = useState("");

  const onSelect = (index) => {
    if (values[index] || !!winner) {
      return;
    }

    const newValues = [...values];
    newValues[index] = currentPlayer;
    setValues(newValues);
    const _winner = checkWinner(newValues);
    if (_winner) {
      console.log("winner is ", _winner);
      setWinner(_winner);
    }

    if (currentPlayer === players.X) {
      setCurrentPlayer(players.O);
    } else {
      setCurrentPlayer(players.X);
    }
  };

  const resetGame = () => {
    setValues(intialValues);
    setCurrentPlayer(players.X);
  };

  return (
    <div className="App">
      {!!winner ? (
        <p>Winner is {winner}</p>
      ) : (
        <p>Current Player - {currentPlayer}</p>
      )}
      <button onClick={resetGame}>Reset Game</button>
      <br />
      <br />

      <div className="container">
        {values.map((item, index) => (
          <Box num={item} onClick={() => onSelect(index)} />
        ))}
      </div>
    </div>
  );
}
