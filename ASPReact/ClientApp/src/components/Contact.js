import React, { Component } from 'react';
import './Contact.css'
export class Contact extends Component {
    static displayName = Contact.name;

    constructor(props) {
        super(props);
        this.state = {
            name: 'Your Name Here',
            subject: 'Something cool!',
            email: 'example@example.com',
            message: 'Hello world!',
            submissionStatus: ''
        }

        this.onMessageChange = this.onMessageChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.successMessage = this.successMessage.bind(this);
    }

    successMessage() {
        if (this.state.submissionStatus == 'success') {
            return (
                <div className=" alert alert-success">
                    <strong>Success!</strong> Your message has been sent.
                </div>
            )
        } else if (this.state.submissionStatus == 'fail') {
            return (
                <div className="alert alert-danger">
                    <strong>Danger!</strong> Message failed to send.
                </div>
            )
        }
    }

    render() {
        return (
            <div className="Contact offset-md-2">
                <div className="row">
                    <div className="col-md-7 mrgnbtm">
                        <h2>Contact Us</h2>
                        
                        <form onSubmit={this.handleSubmit} method="POST">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control" name="name" id="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" value={this.state.subject} onChange={this.onSubjectChange} className="form-control" name="subject" id="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" value={this.state.email} onChange={this.onEmailChange} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange} placeholder="Message" />
                                </div>
                            </div>
                            <div>
                                {this.successMessage()}
                            </div>
                            <button type="submit" className="btn btn-danger">Submit</button>
                            

                        </form>
                    </div>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    resetForm() {
        this.setState({
            name: 'Your Name Here',
            subject: 'Something cool!',
            email: 'example@example.com',
            message: 'Hello world!',
            /*name: '', email: '', subject: '', message:''*/
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state);
        const response = await fetch("contactus",
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    
                    this.setState({ submissionStatus: 'success'})
                    this.resetForm()
                    //alert("Message Sent.");
                } else{
                    this.setState({ submissionStatus: 'fail' })
                    this.resetForm()
                    //alert("Message failed to send.")
                }
            })
        //const data = await response.json();
        //console.log(data);
        
        //const response = await fetch('weatherforecast');
        //const data = await response.json();
        //this.setState({ forecasts: data, loading: false });
    }
}

