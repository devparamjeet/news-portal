
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      type:"/",
    }
    // console.log(this.state.type)
  }

  setType=  async (a)=>{
    const setTitle = a.target.innerText
    this.setState({
      type:setTitle
    })

  }


  render() {
    return (
      <>
        <Navbar type={this.state.type} setType={this.setType}/>
        <Router>
          <Routes>
            <Route path="/" element={ <News type=""/>}/>
            <Route path='/Sports' element={ <News type="Sports"/>}/>
            <Route path='/Entertainment' element={ <News type="Entertainment"/>}/>
            <Route path='/Lifestyle' element={ <News type="Lifestyle"/>}/>
            <Route path='/Business' element={ <News type="Business"/>}/>
            <Route path='/International' element={ <News type="International"/>}/>
            <Route path='/Crime' element={ <News type="Crime"/>}/>
            <Route path='/Politics' element={ <News type="Politics"/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}
