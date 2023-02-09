import React, { Component } from "react";

class SignUp extends Component {
    state = {
        name: "",
        birthdate: "",
        email: "",
        cnumber: "",
        description: "",
        formValid: false,
    };

    handleChange = (e) => {
        if (e.target.id === "name") {
            this.validateName(e.target.value);
        } else if (e.target.id === "birthdate") {
            this.validateBirthdate(e.target.value);
        } else if (e.target.id === "email") {
            this.validateEmail(e.target.value);
        } else if (e.target.id === "cnumber") {
            this.validateCnumber(e.target.value);
        } else if (e.target.id === "description") {
            this.validateDescription(e.target.value);
        }
    };

    validateName = (name) => {
        let formValid = this.state.formValid;
        let pattern = /^[A-Za-z ]+$/;

        if (name.trim() !== "" && name.length > 3 && pattern.test(name)) {
            formValid = true;
        } else {
            formValid = false;
        }

        if (!formValid) {
            document.getElementById("name").classList.remove("valid");
            document.getElementById("name").classList.add("invalid");
        } else {
            document.getElementById("name").classList.remove("invalid");
            document.getElementById("name").classList.add("valid");
        }

        //spread operator (...)
        this.setState({
            name,
            formValid,
        });

        return formValid;
    };

    validateBirthdate = (birthdate) => {
        let formValid = this.state.formValid;

        if (birthdate) {
            formValid = true;
        } else {
            formValid = false;
        }

        if (!formValid) {
            document.getElementById("birthdate").classList.remove("valid");
            document.getElementById("birthdate").classList.add("invalid");
        } else {
            document.getElementById("birthdate").classList.remove("invalid");
            document.getElementById("birthdate").classList.add("valid");
        }

        //spread operator (...)
        this.setState({
            birthdate,
            formValid,
        });

        return formValid;
    };

    validateEmail = (email) => {
        let formValid = this.state.formValid;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.trim() !== "" && pattern.test(email)) {
            formValid = true;
        } else {
            formValid = false;
        }

        if (!formValid) {
            document.getElementById("email").classList.remove("valid");
            document.getElementById("email").classList.add("invalid");
        } else {
            document.getElementById("email").classList.remove("invalid");
            document.getElementById("email").classList.add("valid");
        }

        this.setState({
            email,
            formValid,
        });

        return formValid;
    };

    validateCnumber = (cnumber) => {
        let formValid = this.state.formValid;
        let pattern = /^[0-9]+$/;

        if (cnumber.trim() !== "" && cnumber.trim().length === 10 && pattern.test(cnumber)) {
            formValid = true;
        } else {
            formValid = false;
        }

        if (!formValid) {
            document.getElementById("cnumber").classList.remove("valid");
            document.getElementById("cnumber").classList.add("invalid");
        } else {
            document.getElementById("cnumber").classList.remove("invalid");
            document.getElementById("cnumber").classList.add("valid");
        }

        //spread operator (...)
        this.setState({
            cnumber,
            formValid,
        });

        return formValid;
    };

    validateDescription = (description) => {
        let formValid = this.state.formValid;

        if (description.trim() !== "") {
            formValid = true;
        } else {
            formValid = false;
        }

        if (!formValid) {
            document.getElementById("description").classList.remove("valid");
            document.getElementById("description").classList.add("invalid");
        } else {
            document.getElementById("description").classList.remove("invalid");
            document.getElementById("description").classList.add("valid");
        }

        //spread operator (...)
        this.setState({
            description,
            formValid,
        });

        return formValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            this.validateName(this.state.name) &&
            this.validateBirthdate(this.state.birthdate) &&
            this.validateEmail(this.state.email) &&
            this.validateCnumber(this.state.cnumber) &&
            this.validateDescription(this.state.description)
        ) {
            alert("Form is submitted");

            this.setState({
                name: "",
                birthdate: "",
                email: "",
                cnumber: "",
                description: "",
            });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2 className="center">Sign Up</h2>
                </div>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="name"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    className="validate"
                                />
                                <label htmlFor="name">Name</label>
                                <span className="helper-text" data-error="This is required"></span>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    id="birthdate"
                                    type="date"
                                    onChange={this.handleChange}
                                    value={this.state.birthdate}
                                    max={new Date().toISOString().split("T")[0]}
                                    className="validate"
                                />
                                <label htmlFor="birthdate">Date of Birth</label>
                                <span className="helper-text" data-error="This is required"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    className="validate"
                                />
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="This is required"></span>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    id="cnumber"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.cnumber}
                                    className="validate"
                                />
                                <label htmlFor="cnumber">Contact</label>
                                <span className="helper-text" data-error="This is required"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="description"
                                    className="materialize-textarea validate"
                                    data-length="225"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                                >
                                </textarea>
                                <label htmlFor="description">Tell me about yourself</label>
                                <span className="helper-text" data-error="This is required"></span>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
