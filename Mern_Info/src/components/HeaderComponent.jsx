import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li ><a href="/home">Home</a></li>
                        <li><a href="/role">Roles</a></li>
                        <li><a href="/users">Users</a></li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default HeaderComponent;