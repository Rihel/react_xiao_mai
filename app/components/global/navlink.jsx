import React from 'react';
import {Link } from 'react-router';
export default class NavLink extends React.Component{
    constructor(...props) {
        super(...props)
    
    }
    render () {
        
        return (
           
                <Link to={this.props.to} activeClassName="active">{this.props.children}</Link>
           
        )
    }
}