import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,

} from "react-router-dom"

export default function ListItemLinkExample() {
  return (
    <Router>
      <ul>
        <ListItemLink to="/somewhere" />
        <ListItemLink to="/somewhere-else" />
      </ul>
      
    </Router>
  )
}
function ListItemLink({to, ...rest}) {
  console.log(rest)
  return (
    // <Route
    //   path={to}
    //   children={({match}) => (
    //     <li className={match ? "active" : ""}>
    //       <Link to={to} {...rest} />
    //     </li>
    //   )}
    // />
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to} {...to} >{to}</Link>
        </li>
      )}
    />
  )
}