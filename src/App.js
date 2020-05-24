import React, { Component } from 'react';
import {BrowserRouter as Router, Link,NavLink,Prompt,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

class App extends Component {
  render(){
      return (
          <Router>

            <div className="App">
              <ul>
                <li><Link to="/about/" >about</Link></li>
                <li><NavLink to="/" exact activeStyle= {{color: 'red'}}>Home</NavLink></li>
                <li><NavLink to="/user/Mohit" exact activeStyle= {{color: 'red'}}>Mohit</NavLink></li>
                <li><NavLink to="/user/NotMohit" exact activeStyle= {{color: 'red'}}>NotMohit</NavLink></li>

              </ul>
              
            <Route path="/" exact strict render= {
              () => {
                return (<p>Home</p>);
              }
            }/> 
            <Route path="/about/" exact strict render= {
              () => {
                return (<p>About</p>);
              }
            }/> 
              <Route path="/user/:username" exact strict render= {
                ({match}) => {
                  if (match.params.username == 'Mohit')
                    return (<h1>Mohit's Page</h1>);
                  return (<Redirect to = "/about/" /> );
                }
            }/> 
                          
            <Prompt when  message="true" />
            <Prompt when  message = {
              (location) => { console.log(location); 
              return location.pathname == "/user/Mohit" ? "Sure? " : true }
              }/>
            </div>

          </Router>

      );
  }
}

export default App;
