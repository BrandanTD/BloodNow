import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RequestList from "./Requests.js";
import ApplicationList from "./Applications";
import './App.css';

class App extends React.Component {

  componentDidMount() {

    document.getElementById("css3-spinner-svg-pulse-wrapper").style.opacity = 1;

     setTimeout(() => {

        var elem = document.getElementById("loader-container");
        var opacity = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (opacity <= 0) {
            clearInterval(id);
            document.getElementById("loader-container").style.display = "none";
          } else {
            opacity-=.01; 
            elem.style.opacity = opacity;
          }
        }
     }, 2500);
  }

  render() {
    return (
      <Router>
          <Route path="/" exact component={RequestList} />
          <Route path="/Applications" component={ApplicationList} />
      </Router>
    );
  }
}

export default App;
