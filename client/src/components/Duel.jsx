import React, { useState } from "react"
import styled from "styled-components"

const Title = styled.h2`
  font-size: 2em;
`

const GitHubInfoContainer = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
  width: 300px;
`

const GitHubInfoTitle = styled.h3`
  margin: 0;
`

const GitHubInfoText = styled.p`
  margin: 0;
`

const DuelContainer = styled.div`
  margin-top: 10%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`

const InputLabel = styled.h2`
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  background: #ccc;
  border: 1px solid grey;
  border-radius: 5%;
  padding: 1px, 10px, 1px, 1px;
`

const Button = styled.button`
  margin-top: 1em;
  padding: 10px;
  font-size: 1em;
  background-color: #e38b06;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`

const ErrorMessage = styled.p`
  color: red;
`

const WinnerContainer = styled.div`
  margin-top: 20px;
`

const WinnerTitle = styled.h2`
  color: #4caf50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Duel = () => {
  const [username1, setUsername1] = useState("")
  const [username2, setUsername2] = useState("")
  const [user1Info, setUser1Info] = useState(null)
  const [user2Info, setUser2Info] = useState(null)
  const [error, setError] = useState("")

  const fetchGitHubInfo = async (username) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${username}`)
      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        throw new Error("User not found")
      }
    } catch (error) {
      console.error(error)
      throw new Error("Failed to fetch data")
    }
  }

  const handleButtonClick = async () => {
    setError("")
    try {
      const user1Data = await fetchGitHubInfo(username1)
      setUser1Info(user1Data)
    } catch (error) {
      console.error(error)
      setError("Failed to fetch data for User 1")
      setUser1Info(null)
    }

    try {
      const user2Data = await fetchGitHubInfo(username2)
      setUser2Info(user2Data)
    } catch (error) {
      console.error(error)
      setError("Failed to fetch data for User 2")
      setUser2Info(null)
    }
  }

  return (
    <DuelContainer>
      <h1>GitHub Duel</h1>
      <InputContainer>
        <InputWrapper>
          <InputLabel>User 1</InputLabel>
          <Input
            type="text"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>User 2</InputLabel>
          <Input
            type="text"
            value={username2}
            onChange={(e) => setUsername2(e.target.value)}
          />
        </InputWrapper>
      </InputContainer>
      <Button onClick={handleButtonClick}>Duel</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div style={{ display: "flex" }}>
        {user1Info && (
          <GitHubInfoContainer>
            <GitHubInfoText>Username: {user1Info.username}</GitHubInfoText>
            <GitHubInfoText>Name: {user1Info.name}</GitHubInfoText>
            <GitHubInfoText>Location: {user1Info.location}</GitHubInfoText>
            <GitHubInfoText>Titles: {user1Info.titles}</GitHubInfoText>
            <GitHubInfoText>
              Bio: {user1Info["favorite-language"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Total Stars: {user1Info["total-stars"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Highest Stars: {user1Info["highest-starred"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Public Repos: {user1Info["public-repos"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Public Repos: {user1Info["perfect-repos"]}
            </GitHubInfoText>
            <GitHubInfoText>Followers {user1Info.followers}</GitHubInfoText>
            <GitHubInfoText>Following {user1Info.following}</GitHubInfoText>
          </GitHubInfoContainer>
        )}
        {user2Info && (
          <GitHubInfoContainer>
            <GitHubInfoText>Username: {user2Info.username}</GitHubInfoText>
            <GitHubInfoText>Name: {user2Info.name}</GitHubInfoText>
            <GitHubInfoText>Location: {user2Info.location}</GitHubInfoText>
            <GitHubInfoText>Titles: {user2Info.titles}</GitHubInfoText>
            <GitHubInfoText>
              Bio: {user2Info["favorite-language"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Total Stars: {user2Info["total-stars"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Highest Stars: {user2Info["highest-starred"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Public Repos: {user2Info["public-repos"]}
            </GitHubInfoText>
            <GitHubInfoText>
              Public Repos: {user2Info["perfect-repos"]}
            </GitHubInfoText>
            <GitHubInfoText>Followers {user2Info.followers}</GitHubInfoText>
            <GitHubInfoText>Following {user2Info.following}</GitHubInfoText>
          </GitHubInfoContainer>
        )}
      </div>
      {user1Info && user2Info && (
        <WinnerContainer>
          <WinnerTitle>
            Winner:{" "}
            {user1Info.followers > user2Info.followers
              ? user1Info.username
              : user1Info.followers < user2Info.followers
              ? user2Info.username
              : "Tie"}
          </WinnerTitle>
        </WinnerContainer>
      )}
    </DuelContainer>
  )
}

export default Duel
