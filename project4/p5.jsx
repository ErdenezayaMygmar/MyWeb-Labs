import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/states/States'
import Example from './components/example/Example'
import { HashRouter, Route, Link } from "react-router-dom";

import Header from './components/header/Header'

class App extends React.Component {
    render() {
      return (
      <div>
        <Header/>
        <HashRouter>
        <div>
           <ul><Link to="/components/states">States</Link></ul>
        <ul><Link to="/components/example">Example</Link></ul>
        <Route path="/components/states" component={State}  />
        <Route path="/components/example" component={Example}  />
                </div>
           
                </HashRouter>
    
      </div>
      );
        
    }
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('reactapp5')
  );


