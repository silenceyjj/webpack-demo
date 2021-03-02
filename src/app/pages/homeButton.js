import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom"

export default function HomeButton() {
  console.log(useHistory())
  
  return (
    <Router>
      <div>
        {/* <button onClick={handleClick}>go home</button> */}
        {/* <Link to="/">home</Link> */}
        <Switch>
          <Route exact path="/">
            <Redirect to="home" />
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route path="/button">
            <Button/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
function Home() {
  let history = useHistory()
  function handleClick() {
    history.push('/button')
  }
  return (
    <div>
      <h3>Home</h3>
      <button onClick={handleClick}>go button</button>
    </div>
  )
}
function Button() {
  let history = useHistory()
  function handleClick() {
    history.push('/home')
  }
  return (
    <div>
      <h3>Button</h3>
      <button onClick={handleClick}>go home</button>
    </div>
  )
  // let history = useHistory()
  // function handleClick() {
  //   history.push('/button')
  // }
  // return <button onClick={handleClick}>go button</button>
}