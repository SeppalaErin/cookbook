import React, { Component } from "react";
// import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import API from "../../utils/API";
import Header from "../../components/Header/header";
import "./signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      abilityLevel: "",
      id: "",
    };

    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeAbilityLevel = this.changeAbilityLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  changeAbilityLevel(event) {
    this.setState({
      abilityLevel: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      abilityLevel: this.state.abilityLevel,
    };

    API.SignUp(registered).then((response) => {
      console.log(response.data);
      if(response.data.name=="MongoError")
      {
        document.getElementById("errorItem").className="alert alert-warning";

      }
      else
      {
        this.props.setUserInfo({
          userid: response.data._id,
          email: response.data.email,
          username: response.data.username,
          password: response.data.password,
          abilityLevel: response.data.abilityLevel,
        });
      }
    
    });

    // window.location = "/profile"
  }

  render() {
    return (


    <div className="container-fluid hero bk-board d-flex" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL
                + "/assets/pexels-ray-piedra-1565982.jpg"})`
          }}  >
      <div className="container" id="signup">
      <div id="errorItem"  className="alert alert-warning d-none mb-3">
         Email already exists!
        </div>

        <Form onSubmit={this.onSubmit}>
        <Header title="Sign Up" />
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={this.changeUsername}
              vlaue={this.state.username}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.changeEmail}
              vlaue={this.state.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.changePassword}
              vlaue={this.state.password}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Ability Level</Form.Label>
            <Form.Control
              as="select"
              onChange={this.changeAbilityLevel}
              vlaue={this.state.abilityLevel}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Professional</option>
            </Form.Control>
          </Form.Group>

          <Button className="submit-btn" variant="warning" type="submit" value="submit">
            Signup
          </Button>
        </Form>
       
      </div>
    </div>
    );
  }
}

export default Signup;
