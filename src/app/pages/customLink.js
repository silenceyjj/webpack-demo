import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function CustomLinkExample() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home"
        />
        <OldSchoolMenuLink
          to="/about"
          label="About"
        />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About /></Route>
        </Switch>
      </div>
    </Router>
  )
}
function OldSchoolMenuLink({label, to, activeOnlyWhenExact}) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  console.log(to)
  return (
    <div className={match ? 'active' : ''}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  )
}
function Home() {
  return (
    <div>
      <h2>Home1</h2>
    </div>
  )
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}