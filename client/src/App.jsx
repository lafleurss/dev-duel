import GlobalStyles from "./GlobalStyles"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import { Navbar } from "./components"
import { inspectUser, duelUsers } from "./services/userService"
import { useEffect } from "react"

import Home from './components/Home'
import Inspect from "./components/Inspect"
import Duel from "./components/Duel"

function App() {
  // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser()
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Route exact path="/" render={() => <Home /> } />
      <Route path="/inspect" render={() => <Inspect/>  } />
      <Route path="/duel" render={() => <Duel/> } />
    </Router>
  )
}

export default App
