import Player from "./components/Player";


import GameBoard  from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player  initialName="Player1" symbol="X" />
          <Player  initialName="Player2" symbol="O"></Player>
        </ol>
        <GameBoard></GameBoard>
      </div>
      log
    </main>
  );
}

export default App;
