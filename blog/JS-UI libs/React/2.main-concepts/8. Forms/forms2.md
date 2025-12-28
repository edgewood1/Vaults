Forms

Highlights – 

1.	A form consists of label, input, and form tags
a.	Input attr– type, placeholder, value, onChange (updates state) 
b.	Form attr – onClick (submits state to API or DB then clears)

2.	onChange – goes on the input tags 
a.	param – event (grab the event object)
i.	event.target – Returns the element that triggered the event
ii.	name, value - 2 atributes we on the element (their value represents data)
3.	onClick – goes on button tag

Six Steps to creating a form

1.	Render a form: 

      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input          type="text"          placeholder="Username"        />
        <input          type="password"          placeholder="Password"        />
        <button>Submit</button>
      </form>

2.	To the input tag, add a ‘value’ and an ‘onChange’ handler: 


         value={this.state.password}
          onChange={this.handleInputChange}

3.	To the button tag, add an onClick handler (handles the whole form)

        <button onClick={this.handleFormSubmit}>Submit</button>

4.	Write the onClick handler, which disables the form submission and re-sets the state

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ username: "", password: "" });
  };

OR you can handle the api call -> 

    	this.searchGiphy(this.state.search);

5.	Write the inputChange handler.  Event.target will carry the name & value props.  The key will be the name of each input, and the value the crresponding value.  Since there are 2 different names, 2 key-value pairs will be inserted. 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

6.	What state looks like: 

state = {
    username: "",
    password: ""
  };


import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


export default Form;

