import React, { Component } from "react";

class Form extends Component {
    state = {
        name: "",
        birthdate: "",
        email: "",
        cnumber: "",
        description: "",
        error: {
            nameError: "",
            birthdateError: "",
            emailError: "",
            cnumberError: "",
            descriptionError: "",
        },
        formValid: false,
    };

    handleChange = (e) => {
        //event object
        console.log(e);
        console.log(e.target.id);
        console.log(e.target.value);

        // this is referring to AddInfo
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
        // this.setState({
        //   [e.target.id]: e.target.value,
        // });
    };

    validateName = (name) => {
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;
        let pattern = /^[A-Za-z ]+$/;

        if (name.trim() === "") {
            nameError = "This is required";
            formValid = false;
        } else if (name.trim().length < 3 || !pattern.test(name)) {
            nameError = "This is invalid name";
            formValid = false;
        } else {
            nameError = "";
            formValid = true;
        }

        //spread operator (...)
        this.setState({
            name,
            formValid,
            error: { ...this.state.error, nameError },
        });

        return formValid;
    };

    validateBirthdate = (birthdate) => {
        let birthdateError = this.state.error.birthdateError;
        let formValid = this.state.formValid;

        if (!birthdate) {
            birthdateError = "This is required";
            formValid = false;
        } else {
            birthdateError = "";
            formValid = true;
        }

        //spread operator (...)
        this.setState({
            birthdate,
            formValid,
            error: { ...this.state.error, birthdateError },
        });

        return formValid;
    };

    validateEmail = (email) => {
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //regex
        if (!pattern.test(email)) {
            emailError = "Please enter valid email";
            formValid = false;
        } else {
            emailError = "";
            formValid = true;
        }

        this.setState({
            email,
            formValid,
            error: { ...this.state.error, emailError },
        });

        return formValid;
    };

    validateCnumber = (cnumber) => {
        let cnumberError = this.state.error.cnumberError;
        let formValid = this.state.formValid;
        let pattern = /^[0-9]+$/;

        if (cnumber.trim() === "") {
            cnumberError = "This is required";
            formValid = false;
        } else if (cnumber.trim().length != 10 || !pattern.test(cnumber)) {
            cnumberError = "This is invalid contact number";
            formValid = false;
        } else {
            cnumberError = "";
            formValid = true;
        }

        //spread operator (...)
        this.setState({
            cnumber,
            formValid,
            error: { ...this.state.error, cnumberError },
        });

        return formValid;
    };

    validateDescription = (description) => {
        let descriptionError = this.state.error.descriptionError;
        let formValid = this.state.formValid;

        if (description.trim() === "") {
            descriptionError = "This is required";
            formValid = false;
        } else {
            descriptionError = "";
            formValid = true;
        }

        //spread operator (...)
        this.setState({
            description,
            formValid,
            error: { ...this.state.error, descriptionError },
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

            this.props.getFormData(this.state);

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
            <div style={{ width: "30%", padding: "25px" }}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Please enter name"
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <p className="error-message">
                        {this.state.error.nameError}
                    </p>

                    <label htmlFor="birthdate">Date of Birth:</label>
                    <input
                        type="date"
                        placeholder="Please enter date of birth"
                        id="birthdate"
                        onChange={this.handleChange}
                        value={this.state.birthdate}
                        max={new Date().toISOString().split("T")[0]}
                    />
                    <p className="error-message">
                        {this.state.error.ageError}
                    </p>

                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        placeholder="Please enter email"
                        id="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <p id="error-message">
                        {this.state.error.emailError}
                    </p>

                    <label htmlFor="cnumber">Contact Number:</label>
                    <input
                        type="tel"
                        placeholder="Please enter contact number"
                        id="cnumber"
                        onChange={this.handleChange}
                        value={this.state.cnumber}
                    />
                    <p id="error-message">
                        {this.state.error.cnumberError}
                    </p>

                    <label htmlFor="description">Tell me about yourself:</label>
                    <textarea
                        placeholder="Please enter contact number"
                        id="description"
                        cols="20"
                        rows="5"
                        maxLength="255"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                    <p id="error-message">
                        {this.state.error.descriptionError}
                    </p>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
