import React, { Component } from 'react';
import loading from '../loading.gif'


export class NewsItem extends Component {

    constructor(props){
        super(props);
        this.setState={

        }
    }

    render() {

        // console.log(this.props)
        let {title,description} = this.props
        return (
            <>
                <div className="card mx-auto" style={{ width: "20rem" }}>
                    <img src={this.props.imgUrl?this.props.imgUrl:loading} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title fw-bold h5"  style={{fontFamily:"'Raleway', sans-serif"}}>{title}</p>
                        <p className="card-text" style={{fontFamily:"'Montserrat', sans-serif" , fontSize:"14px"}}>{description}</p>
                        <a href={this.props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
