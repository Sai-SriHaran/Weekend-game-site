import React, { Component } from "react";
import mg from "../../assets/images/mg-logo.jpg";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import{ init } from 'emailjs-com';
init("user_vrjTMkAFp9SyfGvKg6pP7");

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {},
      loading: false,
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.onSubmitMail = this.onSubmitMail.bind(this);
  }
  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changeMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }
  onSubmitMail(event) {
    event.preventDefault();
    event.target.reset();
    if (this.validateForm()) {
      this.setState({loading: true,})
      const templateParams = {
        from_name: this.state.name,
        from_email: this.state.email,
        message: this.state.message,
      };
      emailjs
        .send(
          "service_uy2qr1j",
          "template_h02v13s",
          templateParams,
          "user_vrjTMkAFp9SyfGvKg6pP7"
        )
        .then((result) => {
          this.setState({
            name: "",
            email: "",
            message: "",
            errors: {},
            loading: false,
          })
          toast.info("Email Sent Successfully")
        })
        .catch((error) => {
          this.setState({loading: false,})
          toast.error("Email Not Sent");
        });
        event.target.reset();
    }
  }
  validateForm() {
    const NAME = this.state.name;
    const EMAIL = this.state.email;
    const MESSAGE = this.state.message;
    let frmvalid = true;
    let errors = {};
    if (!NAME) {
      errors["Name"] = "Enter Your Name";
      frmvalid = false;
    }
    if (!EMAIL) {
      errors["Email"] = "Enter Your Email";
      frmvalid = false;
    }
    if (!MESSAGE) {
      errors["Message"] = "Enter Your Message";
      frmvalid = false;
    }
    this.setState({
      errors: errors,
    });
    return frmvalid;
  }
  render() {
    return (
      <div>
            <div className="container  contact-form">
              <div className='contact-image'>
                <img src={mg} alt="mg_logo" />
              </div>
              <form onSubmit={this.onSubmitMail}>
                <h3 className='font-weight-bold text-secondary farkonium'>Contact Us</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        value={this.state.name}
                        onChange={this.changeName}
                      />
                           <div className="errorMsg">{this.state.errors.Name}</div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        value={this.state.email}
                        onChange={this.changeEmail}
                      />
                           <div className="errorMsg">{this.state.errors.Email}</div>
                    </div>
                  <div className="w-100">
                    <div className="form-group">
                      <textarea
                        name="txtMsg"
                        className="form-control"
                        placeholder="Your Message *"
                        style={{ width: "100% ", height: "150px" }}
                        value={this.state.message}
                        onChange={this.changeMessage}
                      ></textarea>
                           <div className="errorMsg">{this.state.errors.Message}</div>
                    </div>
                    <div className="form-group ">
                      <input 
                        disabled={this.state.loading} 
                        type="submit" 
                        value={this.state.loading?"Loading":"SUBMIT"} 
                        className="btnContact m-auto"
                      />
                    </div>
                  </div>
              </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
