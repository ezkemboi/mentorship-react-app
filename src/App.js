import React, { Component } from 'react';
import './App.css';
import BodyComponent from './bodycomponent';

class App extends Component {
  state = {
    ourText: '',
    submitText: ''
  }

  // Submits text we have inputed.
  handleSubmitText = (e) => {
    e.preventDefault();
    const { ourText } = this.state;
    this.setState(prevState => ({
      ...prevState,
      submitText: ourText
    }));
  }

  // Hahndling changes to set state for input
  handleTextChanges = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  // Render the items
  render() {
    const { ourText, submitText } = this.state;
    return (
      <div className="App">
        <header className="header">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </header>
        <section className="adding">
          <input
            name="ourText"
            value={ourText}
            type="text"
            placeholder="Add your text"
            onChange={(e) => this.handleTextChanges(e)}
          />
          <button
            onClick={(e) => this.handleSubmitText(e)}
          >
            Submit
          </button>
        </section>
        <BodyComponent submitText={submitText} />
      </div>
    )
  }
}

export default App;
