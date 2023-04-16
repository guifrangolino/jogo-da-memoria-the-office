import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  
  img {
    width: 250px;
  }

  h1 {
    color: #000;
    font-family: American Typewriter;
    padding: 5px 10px;
    text-shadow: 1px 1px #FFFFFF, -1px -1px #FFFFFF, -1px 1px #FFFFFF, 1px -1px #FFFFFF;
  }

  @media (max-width: 450px) {
    img {
      width: 200px;
    }

    h1 {
      font-size: 24px;
    }
  }
`

export const StartButton = styled.button`
  border: none;
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 20px 30px;
  background: transparent;
  color: #000;
  border: 3px solid #000;
  transition: all .07s;
  cursor: pointer;

  @media (max-width: 450px) {
    background: #000;
    color: #fff;
    font-size: 22px;
    padding: 10px 20px;
  }
  
  &:hover {
    background: #000;
    color: #fff;
  }
  
  &:active {
    letter-spacing: 3px;
  }
`