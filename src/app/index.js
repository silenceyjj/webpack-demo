

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  // Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Example from "pages/example"
import CustonLink from "pages/customLink"
import NoMatch from "pages/noMatch"
import RecursivePath from "pages/recursivePath"
import Sidebar from "pages/sidebar"
import AnimatedTransition from "pages/animatedTransitions"
import RouteConfig from "pages/routeConfig"
import ModalGallery from "pages/modalGallery"
import ListItemLink from "pages/listItemLink"
import HomeButton from "pages/homeButton"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component {
  
  render() {
    return <h3>About</h3>
  }
}

class Inbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

ReactDOM.render(
  // <Router>
  //   <Route path="/" component={App}>
  //     <Route path="about" component={About} />
  //     <Route path="inbox" component={Inbox}>
  //       <Route path="messages/:id" component={Message} />
  //     </Route>
  //   </Route>
  // </Router>
  // <AnimatedTransition/>,
  // <RouteConfig/>,
  // <ModalGallery/>,
  // <ListItemLink/>,
  <HomeButton/>,
  document.getElementById('root')
)
// ReactDOM.render(
//   // <NextExample/>,
//   // <Example/>,
//   // <CustonLink/>,
//   // <NoMatch/>,
//   // <RecursivePath/>,
//   <Sidebar/>,
//   // <div>sss</div>,
//   document.getElementById('root')
// )