import { Route, Link } from "react-router-dom"

import styled from "styled-components"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`

const Title = styled.h2`
  font-size: 5em;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  margin-right: 1em;
  font-size: 5em;
  border: 1px solid grey;
  background: #fff;
  border-radius: 5%;
  padding: 10px;
  cursor: pointer
`

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Dev-Duel</Title>
      <ButtonContainer>
        <Link to="/duel">
          <Button>Duel</Button>
        </Link>
        <Link to="/inspect">
          <Button>Inspect</Button>
        </Link>
      </ButtonContainer>
    </HomeContainer>
  )
}

export default Home
