import React, { Component } from 'react'
import NewsItem from './NewsItem'
import config from '../config.json'
import loading from '../loading.gif'

export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: "",
    }
  }

  async componentDidMount() {
    let promise = fetch(config[(this.props.type)] + "&page=1")
    promise.then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      // console.log(data);
      this.setState({ 
        articles: data.articles, 
        totalResults: data.totalResults 
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  handlePrevPage = () => {
    console.log(this.state.page)
    if (this.state.page < 2) {

    }
    else {
      fetch(`${config[(this.props.type)]}&page=${this.state.page - 1}`).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        // console.log(data);
        this.setState({
          articles: data.articles,
          page: this.state.page - 1,

        })
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  
  handleNextPage = () => {
    console.log(this.state.page)

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      fetch(`${config[(this.props.type)]}&page=${this.state.page + 1}`).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        // console.log(data);
        this.setState({
          articles: data.articles,
          page: this.state.page + 1,

        })
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <p className='h1 text-center my-3 '><u>{this.props.type===""?"Latest News":this.props.type} - Top Headlines</u></p>
        <div className="container d-flex justify-content-around my-5">
          <button className='btn fs-4 fw-bold' onClick={this.handlePrevPage}> &larr; Previous Page</button>
        <p className=' h3 border border-2 rounded border-success p-2 text-center'>Total Results found ...{this.state.totalResults}</p>
          <button className='btn fs-4 fw-bold' onClick={this.handleNextPage}> &rarr; Next Page</button>
        </div>
        <hr />
        <div className="row gy-5 my-4">
          {this.state.articles.map((items, index) => {
            return <div className="col-md-4" key={index}>
              <NewsItem title={items.title} description={items.description} imgUrl={items.urlToImage} newsUrl={items.url} />
            </div>
          })}
          <div className="col-md-4 card mx-auto" style={{ width: "20rem" }}>
              <img src={loading} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a href="/" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"><span></span></a>
            </div>

          </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-around my-5">
          <button className='btn btn-dark' onClick={this.handlePrevPage}> &larr; Previous</button>
          <button className='btn btn-dark' onClick={this.handleNextPage}> &rarr; Next</button>
        </div>
      </div>
    )
  }
}

export default News
