import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import RoleService from './../services/RoleService.jsx';

class RoleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            roleid:"0",
            rolename:"",
            errorMsg:""
        }

        this.serv = new RoleService();
        this.token =sessionStorage.getItem("token");
        //console.log(this.token)
    }

    OnPropertyChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    RoleSubmit(){
        if(this.state.roleid===""){
            this.setState({errormsg: "Please Enter Product Id"});
        }
        else if(this.state.rolename===""){
            this.setState({errormsg: "Please Enter Product Name"});
        }
        else{
            var role = {
                roleId:this.state.roleid,
                roleName:this.state.rolename
            }
    
            this.serv.postRole(role, this.token).then(res=>res.json())
                                                        .then(res=>{
                                                        if(res.status===200){
                                                            console.log(res.message)
                                                            this.onClickClear();
                                                        }
                                                        else{
                                                            this.setState({errormsg: res.message});
                                                        } 
    
                                                    });

        }

    }

    onClickClear(e){
        this.setState({roleid: 0});
        this.setState({rolename: ""});
        this.setState({errorMsg: ""});   
    }

    render() { 
        return ( 
            <div className="container">
                <HeaderComponent/>

                <div className="main-content row">
                    <div className="col-md-3">
                    </div>

                    <div className="col-md-5">
                        <div className="error">{this.state.errormsg}</div>
                        <form>
                                <div className="form-group"> 
                                    <label htmlFor="roleId"> Role Id</label>
                                    <input type="text" className="form-control" name="roleid" onChange={this.OnPropertyChange.bind(this)}/>
                                </div>  

                                <div className="form-group"> 
                                    <label htmlFor="rolename"> Role Name </label>
                                    <input type="text" className="form-control" name="rolename" onChange={this.OnPropertyChange.bind(this)}/>
                                </div> 

                                <input type="button" value="Submit" className="btn btn-success" onClick={this.RoleSubmit.bind(this)}/>
                        </form>
                    </div>
                </div>
                <FooterComponent/>

            </div>
         );
    }
}
 
export default RoleComponent;