import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor(){
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [{title: "Texas Roadhouse", slug: 'teaxas-roadhouse'}, {title: "Buffalo Wild Wings", slug: 'buffalo-wild-wings'}]
        }
    }

    portfolioItems(){

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} slug={item.slug}/>
        })
    }

    render() {
        if (this.state.isLoading){
            return <div>is Loading..</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}