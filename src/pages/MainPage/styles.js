import styled from "styled-components";

export const Container = styled.div`
  background-image: url('/images/start-background-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  width: 100%;
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    background-image: url('/images/start-background-mobile.jpg');
    background-position: center;
  }

  footer {
    color: #fff;
    
    a {
      color: #fff;
    }
  }
`
