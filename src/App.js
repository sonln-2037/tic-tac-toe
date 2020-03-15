import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      game: [
        [...Array(5)].map(item => null),
        [...Array(5)].map(item => null),
        [...Array(5)].map(item => null),
        [...Array(5)].map(item => null),
        [...Array(5)].map(item => null)
      ],
      currentTurn: false,
      currentIndex: null,
      turnNumber: 0
    };
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn(rowIndex, colIndex) {
    if (this.state.game[rowIndex][colIndex] === null) {
      const game = [...this.state.game];
      game[rowIndex][colIndex] = this.state.currentTurn;
      const currentTurn = !this.state.currentTurn;
      const currentIndex = [rowIndex, colIndex];
      const turnNumber = ++this.state.turnNumber;
      this.setState({
        game: game,
        currentTurn: currentTurn,
        currentIndex: currentIndex,
        turnNumber: turnNumber
      });
    }
  }

  componentDidUpdate() {
    const currentIndex = this.state.currentIndex;
    if (currentIndex !== null) {
      window.setTimeout(() => this.checkWin(), 100);
    }
  }

  checkWin() {
    const game = [...this.state.game];
    const [rowIndex, colIndex] = this.state.currentIndex;
    let winner;
    if (this.state.currentTurn === true) {
      winner = 'x';
    } else if (this.state.currentTurn === false) {
      winner = 'o';
    }
    if (game[rowIndex][colIndex] === game[rowIndex][colIndex-1]
      && game[rowIndex][colIndex] === game[rowIndex][colIndex-2]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === game[rowIndex][colIndex-1]
      && game[rowIndex][colIndex] === game[rowIndex][colIndex+1]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === game[rowIndex][colIndex+1]
      && game[rowIndex][colIndex] === game[rowIndex][colIndex+2]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex-1] ?? [])[colIndex]
      && game[rowIndex][colIndex] === (game[rowIndex-2] ?? [])[colIndex]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex-1] ?? [])[colIndex]
      && game[rowIndex][colIndex] === (game[rowIndex+1] ?? [])[colIndex]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex+1] ?? [])[colIndex]
      && game[rowIndex][colIndex] === (game[rowIndex+2] ?? [])[colIndex]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex-1] ?? [])[colIndex-1]
      && game[rowIndex][colIndex] === (game[rowIndex-2] ?? [])[colIndex-2]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex-1] ?? [])[colIndex-1]
      && game[rowIndex][colIndex] === (game[rowIndex+1] ?? [])[colIndex+1]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex+1] ?? [])[colIndex+1]
      && game[rowIndex][colIndex] === (game[rowIndex+2] ?? [])[colIndex+2]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex-1] ?? [])[colIndex+1]
      && game[rowIndex][colIndex] === (game[rowIndex-2] ?? [])[colIndex+2]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex-1] ?? [])[colIndex+1]
      && game[rowIndex][colIndex] === (game[rowIndex+1] ?? [])[colIndex-1]
    ) {
      this.displayWinner(winner);
    } else if (game[rowIndex][colIndex] === (game[rowIndex+1] ?? [])[colIndex-1]
      && game[rowIndex][colIndex] === (game[rowIndex+2] ?? [])[colIndex-2]
    ) {
      this.displayWinner(winner);
    }

    if (this.state.turnNumber === 25) {
      alert('Tie!');
      this.resetGame();
    }
  }

  displayWinner(winner) {
    alert(`Winner is ${winner}`);
    this.resetGame();
  }

  resetGame() {
    const game = [
      [...Array(5)].map(item => null),
      [...Array(5)].map(item => null),
      [...Array(5)].map(item => null),
      [...Array(5)].map(item => null),
      [...Array(5)].map(item => null)
    ];
    const currentTurn = false;
    const currentIndex = null;
    const turnNumber = 0;
    this.setState({
      game: game,
      currentTurn: currentTurn,
      currentIndex: currentIndex,
      turnNumber: turnNumber
    });
  }

  render() {
    return (
      <div className="board">
          {
            this.state.game.map((row, rowIndex) => {
              return row.map((item, colIndex) => {
                return <Button click={() => this.clickBtn(rowIndex, colIndex)} key={rowIndex+colIndex} value={item}/>;
              })
            })
          }
      </div>
    );
  }
}

export default App;
