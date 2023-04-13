import { Container, ContainerTitle, StartButton } from "./styles"

function Start({handleClick}) {
  return (
    <Container>
      <ContainerTitle>
          <img src="/images/the-office-logo.png" alt="The Office Logo" />
          <h1>Jogo da Memória</h1>
      </ContainerTitle>
      <StartButton onClick={handleClick} >Iniciar</StartButton>
    </Container>
  )
}

export default Start