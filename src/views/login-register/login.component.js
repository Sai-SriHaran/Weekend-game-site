import React, { Component } from "react";
import axios from "axios";
import  {toast} from 'react-toastify'
import { Link } from "react-router-dom";
import { connect } from "react-redux";


export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      response: ''
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
      response: '',
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
      response: '',
    });
  }
  onSubmit(event){
    event.preventDefault()
    if(this.validateForm()){
      console.log('val');
        const logincred={
            email:this.state.email,
            password:this.state.password,
        }
        axios.post("https://employee-portal-login.herokuapp.com/app/login",logincred)
        .then(res=>{
            localStorage.setItem('auth',JSON.stringify(res.data));
            this.props.increment();
            this.props.history.push('/');
        })
        .catch(err=>{
          this.setState({
            response: err?.response?.data,
          });
            console.log(err.response);
            toast.info(err.response);
        })
    }


}
  validateForm() {
    const EMIL = this.state.email;
    const PASS = this.state.password;
    let frmvalid=true;
    let errors={};
    if (!EMIL) {
      errors["email"] = "Enter Your Email";
      frmvalid = false;
    }
    if (!PASS) {
      errors["password"] = "Enter Your Password";
      frmvalid = false;
    }
    this.setState({
      errors: errors,
    });
    return frmvalid;
  }
  render() {
    return (
      <div className="auth-wrapper ">
        <div className="auth-inner">
      <div className="swing-in-top-fwd  text-danger">
        <form onSubmit={this.onSubmit}>
          <h3 className='h3 font-weight-bold'>Login</h3>
          {
            this.state.response && <h3>{this.state.response}</h3>
          }
          <div className="form-group">
            <div className="form-group font-weight-bold">
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
          </div>
          <button className="btn btn-primary btn-block  shake-horizontal">Login</button>
          <div className='text-center'>
            <Link className='link text-warning' to='/register'>Don't have account?</Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  name: state,
})

const mapDispatchToProps=(dispatch)=>{
  return{
    increment: ()=> dispatch({ type: 'increment' })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
