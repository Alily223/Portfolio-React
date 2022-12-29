import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";


import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/Blog-detail";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/Portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this);
    this.handleUnSuccesfulLogin = this.handleUnSuccesfulLogin.bind(this);
    this.handleSuccesfulLogOut = this.handleSuccesfulLogOut.bind(this);
  }

  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  handleUnSuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  handleSuccesfulLogOut() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route
        key="portfolio"
        path="/portfolio-manager"
        component={PortfolioManager}
      />
    ];
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationComponent
              loggedInStatus={this.state.loggedInStatus}
              handleSuccesfulLogOut={this.handleSuccesfulLogOut}
            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccesfulLogin={this.handleSuccesfulLogin}
                    handleUnSuccesfulLogin={this.handleUnSuccesfulLogin}
                  />
                )}
              />

              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />

              <Route
                path="/blog"
                render={props => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              <Route 
                path="/b/:slug" 
                render={props => (
                  <BlogDetail {...props} loggedInStatus={this.state.loggedInStatus}/>
                )}
              />
              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
                : null}
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
