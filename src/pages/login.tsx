import React, {Component} from 'react';
import {login} from '../utils';

class Login extends Component <any,any>{
    constructor(props: {} | Readonly<{}>){
        super(props);
        this.state ={
            username: "",
            password: "",
            fields: {},
            errors: {}
        }
        this.handleValidation = this.handleValidation.bind(this);
    }
    handleValidation(e: { preventDefault: () => void; }){
    e.preventDefault()
      let errors = {};
      let formIsValid = true;
      let exp = new RegExp( "^[a-zA-Z0-9_]*$")

      if(this.state.username===""){
         formIsValid = false;
         errors = "Cannot be empty";
      }
      if(this.state.username!=="undefined"){
          const exp = new RegExp("^[a-zA-Z_]*$");
          if(!exp.test(this.state.username)){
              formIsValid = false;
              errors = "invalid username(only alphabate allowed)"
          }
      }
      if(this.state.password===""){
          formIsValid = false;
          errors = "Cannot be empty";
       }
       if(this.state.password!=="undefined"){
           if(this.state.password.length < 8){
               formIsValid = false;
               errors = "lenght of password is 8 characters" 
           }
           else if(!exp.test(this.state.password)){
               console.log("inside exp",this.state.password)
                formIsValid = false;
                errors = "invalid password(no space/special character allow in password)"
           }
       }

     this.setState({errors: errors})
     if(formIsValid){
         login();
         this.props.history.push('/dashboard');
     }

  }
    render(){
        return(
            
            <div className="container">
                <h3 className="text-center pt-5">Login Form</h3>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" onSubmit={this.handleValidation} method="post">
                            <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <h4>UserName</h4>
                                    <input type="text" name="username" placeholder="username" className="form-control" onChange={(e)=>{this.setState({username:e.target.value})}}/>
                                    <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <h4>Password</h4>
                                    <input type="password" name="password" placeholder="password" className="form-control" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }      
}

export default Login;