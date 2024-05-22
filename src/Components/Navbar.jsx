import React, { Component } from 'react'
import aajTak from '../Aaj_tak_logo.png'

export class Navbar extends Component {

  constructor(props){
    super(props);
    this.state={
      
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container-fluid">
                <z className="navbar-brand p-0" href="/">
                  <img src={aajTak} className="img-fluid" style={{width:"60px"}} alt="Aaj Tak" />
                </z>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link text-dark fw-bold" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-dark fw-bold" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                      </a>
                      <ul className="dropdown-menu">  
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>Sports</a></li>
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>Business</a></li>
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>Crime</a></li>
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>Lifestyle</a></li>
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>Entertainment</a></li>
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>International</a></li>
                        <li><a className="dropdown-item" href={this.props.type} onClick={(event)=>{this.props.setType(event)}}>Politics</a></li>
                      </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
      </>
    )
  }
}

export default Navbar
