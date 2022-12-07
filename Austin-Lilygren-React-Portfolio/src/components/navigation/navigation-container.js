import React, { Component } from "react";
import { NavLink  } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <NavLink exact to ="/">Home</NavLink>
                <NavLink to ="/about-me">About</NavLink>
                <NavLink to ="/contact">contact</NavLink>
                <NavLink to ="/blog">blog</NavLink>
                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }
}