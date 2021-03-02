import { fromPairs } from "lodash"
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from "react-router-dom"

export default function PreventingTransition() {
  return (
    <Router>
      <ul>
        <li><Link to="/">From</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
      </ul>
      <Switch>
        <Route path="/" children={<BlockingForm/>} />
        <Route path="/one" children={<h3>One</h3>} />
        <Route path="/" children={<h3>Two</h3>} />

      </Switch>
    </Router>
  )
}

function BlockingForm() {
  let [isBlocking, setBlocking] = useState(false)

  return (
    <form 
      onSubmit={event => {
        event.preventDefault()
        event.target.reset()
        setBlocking(false)
      }}
    >
      <Prompt
        when={isBlocking}
        message={location => {
          `Are you sure you want to go to ${location.pathname}`
        }}
      />
    </form>
  )
}