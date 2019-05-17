import React , {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import MainPage from '../screens/MainPage/MainPage'
import ServicePage from '../screens/ServicePage/ServicePage'
import GuestNumber from '../screens/GuestNumber/GuestNumber'
import './App.scss';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route path="/" exact component={MainPage}/>
          <Route path="/servicepage"  exact component={ServicePage}/>
          <Route path="/guests"  exact component={GuestNumber}/>
        </BrowserRouter>
    );
  }
}

export default App;

