import axios from "axios";
import React, { Component } from "react";

//banner_image_url: null
//category: "Front End"
//column_names_merged_with_images: (9) ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image', 'banner_image', 'logo']
//description: "Front End Coding Language for Web Developing"
//id: 38021
//logo_url: "https://devcamp-space.s3.amazonaws.com/bKkHgHUvsZBWeAEe6bfiNRov?response-content-disposition=inline%3B%20filename%3D%22html-logo.png%22%3B%20filename%2A%3DUTF-8%27%27html-logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20221228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221228T180525Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d0c80ff96a38e53862a1187a1eb49e5d1dc6563dcc00aaf590c2619e0e33ced7"
//name: "HTML"
//position: 1
//thumb_image_url: "https://devcamp-space.s3.amazonaws.com/79t7GE8JVtnFtBBqNyedgisL?response-content-disposition=inline%3B%20filename%3D%22HTMLTHUMBIMAGE.jpg%22%3B%20filename%2A%3DUTF-8%27%27HTMLTHUMBIMAGE.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20221228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221228T180525Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1385001299b7a98ebcc9b11d8dd3a2a8dbc9c828cef0b59ab1fe3fa10a455e6a"
//url: null

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
        portfolioItem: {},
    }
  }

  componentWillMount(){
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios.get(
      `https://alily223.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
      { withCredentials: true }
    ).then(response => {
        this.setState({
            portfolioItem: response.data.portfolio_item
        })
    }).catch(error => {
        console.log("getPortfolioItem error", error)
    });
  }

  render() {
    const {
        category,
        description,
        logo_url,
        name,
        position,
        url
    } = this.state.portfolioItem;
    return (
      <div>
        <div className="Portfolio-Detail-Item-Wrapper">

            <div className="Top-Bar-Item-Wrapper">

                <div className="Title-Of-Item">
                    <h2>{name}</h2>
                </div>

                <div className="Category-Of-Item">
                    <h3>{category}</h3>
                </div>

            </div>
            
            <div className="Middle-Bar-Item-Wrapper">

                <div className="Logo-image-of-Item">
                    <img src={logo_url}/>
                </div>

                <div className="Url-Of-Item">
                    {this.props.url ? <p>{url}</p> : null}
                </div>

                <div className="Description-Of-Item">
                    <p>{description}</p>
                </div>

                <div className="position-Of-Item">
                    <p>Position : {position}</p>
                </div>

            </div>
            
        </div>
        
      </div>
    );
  }
}
