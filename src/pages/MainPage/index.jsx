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
    </Container>
  )
}

export default MainPage