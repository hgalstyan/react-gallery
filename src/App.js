import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import Home from "./Components/Home";
import Navigation from './Components/Navigation';
import ImageWrapper from './Components/ImageWrapper';
import PathNotFound from './Components/PathNotFound';


class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search/:query' component={ImageWrapper} />
            <Route path='*' component={PathNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;