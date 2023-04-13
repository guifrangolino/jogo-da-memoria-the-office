import { useState } from "react"
import { CardContainer, Container, ContainerCards, ContainerVitoria } from "./styles"
import { useEffect } from "react"

const imagensCard = [
  {src: '/images/andy.webp'},
  {src: '/images/angela.webp'},
  {src: '/images/darryl.webp'},
  {src: '/images/creed.webp'},
  {src: '/images/dwight.webp'},
  {src: '/images/jim.webp'},
  {src: '/images/kelly.webp'},
  {src: '/images/kevin.webp'},
  {src: '/images/meredith.webp',},
  {src: '/images/michael.webp'},
  {src: '/images/oscar.webp'},
  {src: '/images/pam.webp'},
  {src: '/images/phyllis.webp'},
  {src: '/images/ryan.webp'},
  {src: '/images/stanley.webp'},
  {src: '/images/toby.webp'},
]

function Game({startClick = false}) {

  const [jogadas, setJogadas] = useState(0)
  const [cards, setCards] = useState([])
  const [viradaUm, setViradaUm] = useState(null)
  const [viradaDois, setViradaDois] = useState(null)
  const [cardPositions, setCardPositions] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [gameVitoria, setGameVitoria] = useState(false)

  function startGame() {
    setGameVitoria(false)
    imagensCard.sort(() => Math.random() - 0.5)
    const cardContainerImagens = imagensCard.slice(0, 8)
    setJogadas(0)
    setCards([...cardContainerImagens, ...cardContainerImagens].sort(() => Math.random() - 0.5))

    setCardPositions([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

    setTimeout(() => {
      setCardPositions([])
    }, 2000)
  }

  useEffect(() => {
    startGame()
    
  }, [startClick])

  function flip(e, index) {
    e.currentTarget.classList.add('flip')

    if (viradaUm === null) {
      setViradaUm(e.currentTarget.lastChild.src)
      setCardPositions([...cardPositions, index])
    } else {
      setViradaDois(e.currentTarget.lastChild.src)
      setCardPositions([...cardPositions, index])
    }
  }

  useEffect(() => {
    if (viradaUm !== viradaDois && viradaDois !== null) {
      setDisabled(true)
      setViradaUm(null)
      setViradaDois(null)
      setTimeout(() => {
        setCardPositions(current => current.slice(0, -2))
        setDisabled(false)
      }, 1000)
      setJogadas(current => current + 1)
      console.log('ERROU')
    }

    if (viradaUm === viradaDois && viradaDois !== null) {
      setViradaUm(null)
      setViradaDois(null)
      setJogadas(current => current + 1)
      console.log('ACERTOU')
    }

    if (cardPositions.length === 16) {
      setGameVitoria(true)
      setTimeout(() => {
        setCardPositions([])
      }, 1000)
    }

  }, [viradaUm, viradaDois])
  

  return (
    <Container>
      <span>Jogadas: {jogadas}</span>
      <ContainerCards>
        {cards.map((card, index) => {
          return (
            <CardContainer key={index} onClick={(e) => flip(e, index)} className={`${cardPositions.includes(index) && 'flip'} ${disabled === true && 'disabled'} ${gameVitoria === true && 'disabled'}`}>
              <img className="card-back" src='/images/dunder-mifflin-logo.jpg' alt="Dunder Mifflin Logo" />
              <img className="card-front" src={card.src} alt="The Office Character" />
            </CardContainer>
          )
        })}
      </ContainerCards>
      <ContainerVitoria style={{display: `${gameVitoria === true ? 'flex' : 'none'}`}}>
        <img src="/images/michael-vitoria.jpg" alt="" />
        <h1>It's Britney, bitch! Você venceu.</h1>
        <span>Você venceu com {jogadas} jogadas.</span>
        <button onClick={startGame}>Jogar Novamente</button>
      </ContainerVitoria>
    </Container>
  )
}

export default Game
