import React, { useState } from "react"
import styled from "styled-components"

const InspectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

const Title = styled.h2`
  font-size: 2em;
`

const InputContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
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

const DataContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

const DataTitle = styled.h3`
  font-size: 1.2em;
  background: #ccc;
  border: 1px solid grey;
  border-radius: 5%;
  padding: 1px, 10px, 1px, 1px;
  width: 2em;
`

const DataItem = styled.p`
  font-size: 1em;
  padding: 1px, 10px, 1px, 1px;
`

const Inspect = (props) => {
  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const fetchUserName = () => {
    console.log("Inspect clicked! Username:", username)
    fetch(`http://localhost:3000/api/user/${username}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("User not found") / setUserData(null)
          setError("User not found")
        }
        return response.json()
      })
      .then((data) => {
        console.log("API response data:", data)
        setUserData(data)
        setError(null)
      })
      .catch((error) => {
        console.error("API request error:", error)
        setUserData(null)
        setError("Failed to fetch data. Please try again.")
      })
  }

  return (
    <InspectContainer>
      <Title>Look up a fellow dev’s Github info</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={changeUsername}
        />
        <Button onClick={fetchUserName}>Inspect</Button>
      </InputContainer>
      {error && (
        <DataContainer>
          <DataItem>
            <strong>No such username found!</strong>
          </DataItem>
        </DataContainer>
      )}
      {userData && (
        <DataContainer>
          <DataItem>
            <strong> Username </strong> {userData.username}
          </DataItem>
          <DataItem>
            <strong>Name </strong> {userData.name}
          </DataItem>
          <DataItem>
            <strong>Location</strong> {userData.location}
          </DataItem>
          <DataItem>
            <strong>Titles</strong> {userData.titles}
          </DataItem>
          <DataItem>
            <strong>Fav Language </strong> {userData["favorite-language"]}
          </DataItem>
          <DataItem>
            <strong>Total Stars</strong> {userData["total-stars"]}
          </DataItem>
          <DataItem>
            <strong>Highest Star Count</strong> {userData["highest-starred"]}
          </DataItem>
          <DataItem>
            <strong>Public Repos</strong> {userData["public-repos"]}
          </DataItem>
          <DataItem>
            <strong>Perfect Repos</strong> {userData["perfect-repos"]}
          </DataItem>
          <DataItem>
            <strong>Followers</strong> {userData.followers}
          </DataItem>
          <DataItem>
            <strong>Following</strong> {userData.following}
          </DataItem>
        </DataContainer>
      )}
    </InspectContainer>
  )
}

export default Inspect
