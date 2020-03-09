import React, {Component} from "react";
import {Container} from 'reactstrap';
import Button from "reactstrap/es/Button";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';


export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.verifyCallback = this.verifyCallback.bind(this);
        // this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.contentChange = this.contentChange.bind(this);

        this.state = {
            classname: null,
            userName: null,
            emailName: null,
            contentName: null,
            errorMessage: "",
            emailClassName: null,
            recaptchaVerified: false,
            validName: null,
            validEmail: null,
            validContent: null,
            status: "",
            contentClassName: null,
        };
    }


    render() { //TODO: Break this up into smaller components
        return (
            <form className="contactForm" onSubmit={this.submitForm} style={{marginBottom: this.props.marBot}}>
                <Container className="contactForm-Group-item">
                    <label className="contactForm-Group-label" style={{color: this.props.textColor}} htmlFor="contact-name"></label>
                    <input id="contact-name"
                              name="name"
                              type="text"
                              spellCheck="false"
                              placeholder="Your name"
                              className={this.state.classname ? this.state.classname : "contactForm-Group-formInput"}
                              onChange={this.nameChange}
                              style={{
                                  borderBottom: "1px solid " +this.props.textColor,
                                  caretColor: this.props.textColor,
                                  color: this.props.textColor
                              }}/>
                    {this.state.userName ? this.state.userName.length === 0 && <p style={{fontSize: "2rem", color: "red"}}>Please fill out your name.</p> : null}
                </Container>
                <Container className="contactForm-Group-item">
                    <label className="contactForm-Group-label" style={{color: this.props.textColor}}></label>
                    <input    placeholder="Your e-mail"
                              spellCheck="false"
                              type="email"
                              name="email"
                              className={this.state.emailClassName ? this.state.emailClassName : "contactForm-Group-formInput"}
                              onChange={this.emailChange}
                              style={{
                                  borderBottom: "1px solid " +this.props.textColor,
                                  caretColor: this.props.textColor,
                                  color: this.props.textColor
                              }}/>
                    {this.state.emailName ?this.state.emailName.length === 0 && <p style={{fontSize: "2rem", color: "red"}}>Please fill out your email.</p> : null}
                </Container>
                <Container className="contactForm-Group-item content-item">
                    <label className="contactForm-label" style={{color: this.props.textColor}}>
                        <textarea name="message"
                                  rows="5" cols="20"
                                  id="ContactForm-textArea"
                                  className={this.state.contentClassName ? this.state.contentClassName : "contactForm-formInput"}
                                  placeholder="Message"
                                  onChange={this.contentChange}
                                  style={{
                                      borderBottom: "1px solid " +this.props.textColor,
                                      caretColor: this.props.textColor,
                                      color: this.props.textColor
                                  }}/>
                        {this.state.contentName ? this.state.contentName.length === 0 && <p style={{fontSize: "2rem", color: "red"}}>Please fill out the message box.</p> : null}
                    </label>
                    {/*<div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2rem"}}>*/}
                    {/*    <ReCAPTCHA sitekey="6LdW6NEUAAAAAPp3asVXpShRmMTWTctcXnkW7TM1" onChange={this.verifyCallback}/>*/}
                    {/*</div>*/}
                    {this.state.status === "ERROR" && <p style={{fontSize: "2rem", color: "red"}}>{this.state.errorMesssage}</p>}
                        <button className="button button--animated button--white contactForm-submit"
                                type="submit" >Submit</button>
                    {this.state.status === "SUCCESS" && <p id="my-form-status" style={{fontSize: "2rem", paddingTop: "3rem"}}>Thank you! I will get back with you as soon as possible</p>}
                </Container>
            </form>
        );
    }

    lengthError() {

    }

    submitForm(ev) {
        if (this.state.validEmail
            && this.state.validName
            && this.state.validContent) {
            ev.preventDefault();
            const form = ev.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://formspree.io/meqgdjrd");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    this.setState({status: "SUCCESS", validEmail: null, validName: null, validContent: null});
                } else {
                    this.setState({status: "ERROR", validEmail: null, validName: null, validContent: null});
                }
            };
            xhr.send(data);
        }
        else {
            let errorMesssage = "Please fill out";
            ev.preventDefault();
            this.setState({status: "ERROR", validEmail: null, validName: null, validContent: null});
            if (this.state.userName === null
                || this.state.userName.length === 0 ) {
                    errorMesssage += " your name";
            }
            else if (this.state.emailName === null
                || this.state.emailName.length === 0) {
                errorMesssage += " your email";
            }
            else if (this.state.contentName === null
                || this.state.contentName.length === 0){
                errorMesssage += " your message";
            }
            else {
                errorMesssage = "Oops something went wrong";
            }
            this.setState({errorMesssage: errorMesssage});


        }
    }

    nameChange(event) { // event.target.value to get the value
        let letters = /^[A-Za-z\s]+$/;
        let className = "contactForm-Group-formInput";
        if (event.target.value.match(letters)) {
            this.setState({
                userName: event.target.value,
                classname: className,
                validName: true
            });

        }
        else { // if value isn't just letters
            let errorClass = className + " formError__name";
            this.setState({
                userName: null,
                classname: errorClass,
                validName: false
            });
        }

    }

    emailChange(event) {
        let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;
        let className = "contactForm-Group-formInput";
        if (event.target.value.match(emailRegex)) {
            this.setState({
                emailName: event.target.value,
                emailClassName: className,
                validEmail: true
            });
        }
        else {
            let errorClass = className + " formError__name";
            this.setState({
                emailName: null,
                emailClassName: errorClass,
                validEmail: false
            });
        }
    }

    contentChange(event) {
        let tt = document.getElementById("ContactForm-textArea");
        // let w = tt.value.length;
        tt.style.height = tt.scrollHeight;
        // tt.style.width = document.body.clientWidth;
        let letters = /^[\sA-Za-z0-9\.\?\",]+$/;
        let className = "contactForm-formInput";
        if (event.target.value.match(letters)) {
            this.setState({
                contentName: event.target.value,
                contentClassName: className,
                validContent: true
            });

        }
        else { // if value isn't just letters
            let errorClass = className + " formError__name";
            this.setState({
                contentName: null,
                contentClassName: errorClass,
                validContent: false
            });
        }
    }

    // async handleButtonSubmit(e) {
    //     e.preventDefault();
    //     //TODO: re-enable the uncommented section below and other parts in this method
    //     // if (this.state.recaptchaVerified
    //     //     && this.state.validEmail
    //     //     && this.state.validName
    //     //     && this.state.validContent) {
    //             // alert("Success");
    //             const name = this.state.userName;
    //             const email = this.state.emailName;
    //             const content = this.state.contentName;
    //
    //             // axios.defaults.
    //             axios.defaults.proxy = true;
    //             await axios({
    //                 method: "POST",
    //                 url: "http://localhost:3001/api/form",
    //                 data: {
    //                     name,
    //                     email,
    //                     content
    //                 }
    //             }).then((response)=>{
    //                 console.log("got here");
    //                 if (response.data.msg === 'success'){
    //                     alert("Email sent, awesome!");
    //                     // this.resetForm()
    //                 }else if(response.data.msg === 'fail'){
    //                     alert("Oops, something went wrong. Try again")
    //                 }
    //             });
    //     // }
    //     // else {
    //     //     alert("Please correct or fill out all the fields");
    //     // }
    // }

    handleSubmit(event) {
        event.preventDefault();

    }

    verifyCallback(response) {
        if (response ) {
            this.setState({
                recaptchaVerified: true
            });
        }
    }
}