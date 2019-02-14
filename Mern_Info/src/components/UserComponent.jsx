import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <HeaderComponent/>

                <div className="main-content">
                    
                </div>
                <FooterComponent/>
            </div>
         );
    }
}
 
export default UserComponent;