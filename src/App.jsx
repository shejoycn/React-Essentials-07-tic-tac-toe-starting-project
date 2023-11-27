import Header from "./components/Header/Header"
import Player from "./components/Player/Player"

function App() {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>
        GAME  BOARD
      </div>
      LOG
    </main>
  )
}

export default App
