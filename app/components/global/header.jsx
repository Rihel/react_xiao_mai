import React from 'react';
import NavLink from './navlink';
export default class Header extends React.Component {
    render () {
        return (
            <div className="header">
            
                <NavLink to={`/${this.props.path?this.props.path:"index"}`}>
                    <i className="fa fa-angle-left"></i> 
                </NavLink>
            
            <h1>{this.props.title}</h1>
            <i></i>
            </div>
        )
    }
};
