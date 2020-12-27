import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      input: "",
      items: [],
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
    console.log(this.state.isClicked);
    console.log(this.state.input);
  };
  inputUpdate = (event) => {
    this.setState({ input: event.target.value });
  };
  formSubmit = (event) => {
    event.preventDefault();
    console.log("THIS IS STATE", this.state.items);
    this.setState({
      items: [...this.state.items, this.state.input],
      input: "",
    });
  };
  // handleChange = (event.target.value) => {
  //   this.setState({ text: !this.state.isClicked });
  // };
  render() {
    return (
      <div className="App">
        <h1>This is my first ToDo App!</h1>
        <p>Add an item to the list</p>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.inputUpdate}
          ></input>
          <button>Add to List</button>
        </form>
      </div>
    );
  }
}
export default App;
// Yank out all the unnecessary code and begin building a todo app
// Create state for your app.js with isClicked: false in it
// Create a button and add an onClick handler that changes the value of isClicked
// Create an input field and then a function that changes the state of text: '' to the e.target.value onChange of the input field
// Change your onClickHandler function to push the value of text into todos: []
// Now clear text in the same function
// Once you have state being changed properly create an element for each of the items in todos: []
// Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in .map() an index and provide that to each of the elements as index={index}
// Create a button on each of the elements that uses this and when clicked removes/deletes the item from todos: []
