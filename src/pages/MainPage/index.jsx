import { ThemeProvider } from "styled-components"
import { Container } from "./styles"
import { useState } from "react"
import Game from "../Game"
import Start from "../Start"

function MainPage() {

  const [inGame, setInGame] = useState(false)

  function handleClickStart() {
    setInGame(true)
  }

  return (
    <Container>
      {inGame === false ? <Start handleClick={handleClickStart}/> : <Game startClick = {true}/>}
      <footer><a href="https://github.com/guifrangolino/jogo-da-memoria-the-office" target="_blank">Guilherme Souza</a>&copy; 2023</footer>
    </Container>
  )
}

export default MainPage