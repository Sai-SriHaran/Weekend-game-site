import React, { Component } from "react";
import axios from "axios";
import  {toast} from 'react-toastify'
import { Link } from "react-router-dom";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      designation:"",
      password: "",
      confirmpassword: "",
      errors:{},
      response: ''
    };
    this.changeFullName=this.changeFullName.bind(this);
    this.changeUserName=this.changeUserName.bind(this);
    this.changeEmail=this.changeEmail.bind(this);
    this.changePassword=this.changePassword.bind(this);
    this.changeConfirmpassword=this.changeConfirmpassword.bind(this);
    this.changeDesignation=this.changeDesignation.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUserName(event){
    this.setState({
        username:event.target.value
    });
}
changeEmail(event){
    this.setState({
        email:event.target.value
    });
}
changePassword(event){
    this.setState({
        password:event.target.value
    });
}
changeConfirmpassword(event){
    this.setState({
        confirmpassword:event.target.value
    });
}
changeDesignation(event){
  this.setState({
      designation:event.target.value
  });
}
onSubmit(event){
    event.preventDefault()
    if(this.validateForm()){
        const registered={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            designation:this.state.designation,
            password:this.state.password,
            confirmpassword:this.state.confirmpassword
        }
        axios.post("https://employee-portal-login.herokuapp.com/app/register",registered)
        .then(res=>{
            toast.success("Registered Successfully")
            setTimeout(this.props.history.push('/login'),10000);
        })
        .catch(err=>{
          this.setState({
            response: err?.response?.data,
          });
            // toast.info(err.response.data);
        })
    }


}
validateForm(){
    const FULLNAM=this.state.fullName;
    const USRNAM=this.state.username;
    const EMIL=this.state.email;
    const PASS=this.state.password;
    const CONFRM_PASS=this.state.confirmpassword;
    const DESIG=this.state.designation;
    let frmvalid=true;
    let errors={}
    if(!DESIG){
      errors["designation"]="choose your designation";
      frmvalid=false;
    }
    if(!FULLNAM){
        errors["fullname"]="Enter your FullName";
        frmvalid=false;
    }
    if(!USRNAM){
        errors["username"]=" Enter your Username";
        frmvalid=false;
    }
    if(!EMIL){
        errors["email"]="Enter Your Email";
        frmvalid=false;
    }
    if(!PASS){
        errors["password"]="Enter Your Password";
        frmvalid=false;
    }
    if(!CONFRM_PASS){
        errors["confirmpassword"]="Enter Your Confirm Password";
        frmvalid=false;
    }
    if (PASS !== CONFRM_PASS) {
        frmvalid = false;
        errors["match"] = "Passwords don't match.";
      }
    this.setState({
        errors:errors
    })
    return frmvalid;
}

  render() {
    return (
      <div className="auth-wrapper  text-danger">
        <div className="auth-inner">
      <div >
        <form onSubmit={this.onSubmit} className="slide-in-fwd-bottom ">
          <h3>Register</h3>
          {
            this.state.response && <h3>{this.state.response}</h3>
          }
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              onChange={this.changeFullName}
              value={this.state.fullName}
            />
             <div className="errorMsg">{this.state.errors.fullname}</div>
          </div>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              onChange={this.changeUserName}
              value={this.state.username}
            />
             <div className="errorMsg">{this.state.errors.username}</div>
          </div>
          <div className="form-group">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this.changeEmail}
              value={this.state.email}
            />
             <div className="errorMsg">{this.state.errors.email}</div>
          </div>
          <div className="form-group">
            <label>Desigination</label><br/>
            <select name="designation" className="form-control" onChange={this.changeDesignation} value={this.state.designation}>
              <option selected value="Choose One">Choose One</option>
              <option value="Intern">Intern</option>
              <option value="HR">HR</option>
              <option value="Product Engineer">Product Engineer</option>
              <option value="Business Analyst">Business Analyst</option>
            </select>
            <div className="errorMsg">{this.state.errors.designation}</div>
          </div>
          <div className="form-group">
            <label>Password </label>
            <input
              type="password"
              className="form-control"
              placeholder=" Password"
              onChange={this.changePassword}
              value={this.state.password}
            />
             <div className="errorMsg">{this.state.errors.password}</div>
          </div>
          <div className="form-group">
            <label> Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              onChange={this.changeConfirmpassword}
              value={this.state.confirmpassword}
            />
             <div className="errorMsg">{this.state.errors.confirmpassword}</div>
             
          </div>
          <div className="errorMsg">{this.state.errors.match}</div>
          <button className="btn btn-primary btn-block shake-horizontal">Register</button>

          <div className='text-center'>
            <Link className='link text-warning' to='/register'>Already Have a Account?</Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Register;
