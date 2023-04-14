import React from "react"
import { Link } from "react-router-dom"
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
  width: 75vw;
  text-align: center;
`

const ButtonAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5em;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  flex-start;
`

const Button = styled.button`
  margin-right: 1em;
  font-size: 5em;
  border: 1px solid grey;
  background: #fff;
  border-radius: 5%;
  padding: 20px;
  cursor: pointer;
  width: 4em;
`

const Text = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 2em;

`

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Dev-Duel</Title>
      <ButtonAndTextContainer>
        <ButtonContainer>
          <Link to="/inspect">
            <Button>Inspect</Button>
          </Link>
          <Text>Look up a fellow dev’s Github info.</Text>
        </ButtonContainer>
        <ButtonContainer>
          <Link to="/duel">
            <Button>Duel</Button>
          </Link>

          <Text>Pick two devs to go head to head.</Text>
        </ButtonContainer>
      </ButtonAndTextContainer>
    </HomeContainer>
  )
}

export default Home
