import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://alily223.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            }),
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="portfolio-wrapper-main">
        <div className="btn-wrapper">
          <button
            className="btn"
            onClick={() => this.handleFilter("Front End")}
          >
            Front End
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Front End Styling")}
          >
            Front End Styling
          </button>
          <button className="btn" onClick={() => this.handleFilter("Back End")}>
            Back End
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("FULL STACK")}
          >
            FULL STACK
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            ALL
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
