import styled, { keyframes } from "styled-components";

const entrance = keyframes`
  0% {
    opacity: 0;
  }

	100% {
		opacity: 1;
	}
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    font-size: 22px;
    font-weight: 500;
  }
`

export const ContainerCards = styled.div`
  /* background: red; */
  max-width: 950px;
  width: 100%;
  height: 90%;  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
  perspective: 1000px;
`

export const CardContainer = styled.div`
  border: 3px solid black;
  width: calc(25% - 5px);
  height: calc(25% - 5px);
  cursor: pointer;
  position: relative;
  transform: translate(1);
  transform-style: preserve-3d;
  transition: transform .5s;

  &.flip {
    transform: rotateY(180deg);
    pointer-events: none
  }

  &.disabled {
    pointer-events: none
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: absolute;
    backface-visibility: hidden;
  }

  .card-front {
    transform: rotateY(180deg);
  }
  
  .card-back {
    object-position: center;
  }
`

export const ContainerVitoria = styled.div`
  background: #000;
  color: #fff;
  border: 3px solid #fff;
  max-width: 650px;
  width: 95%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px;
  text-align: center;
  animation: ${entrance} 1s ease 0s 1 normal forwards;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 450px) {
    h1 {
      font-size: 20px;
    }

    span {
      font-size: 16px;
    }
  }

  img {
    width: 100%;
  }

  button {
    border: none;
    font-size: 28px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px 20px;
    background: #000;
    color: #fff;
    border: 3px solid #fff;
    transition: all .2s;
    cursor: pointer;
    

    &:hover {
      color: #000;
      background: #fff;
    }

    @media (max-width: 450px) {
      font-size: 18px;
      color: #000;
      background: #fff;
    }
  }
`
