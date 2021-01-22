import React from "react";
import CharComponent from "./Components/CharComponent";
import ValidateComponent from "./Components/ValidateComponent";
import "./App.css";

class App extends React.Component {
  state = {
    charText: [],
    charLength: 0,
  };

  textInputHandle = async (string) => {
    await this.setState({
      charText: string.split(""),
    });
    await this.setState({
      charLength: this.state.charText.length,
    });
  };

  clickDeleteHandle = async(index) => {
    const charText = [...this.state.charText];
    charText.splice(index, 1);

    await this.setState({ charText: charText });
    await this.setState({
      charLength: this.state.charText.length,
    });
  };
  render() {
    let charMap = null;
    charMap = (
      <div>
        {this.state.charText.map((string, index) => {
          return (
            <CharComponent
              key={index}
              letter={string}
              click={() => this.clickDeleteHandle(index)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>Assingment 2</h1>
        <input
          type="text"
          onChange={(event) => this.textInputHandle(event.target.value)}
          value={this.state.charText.join("")}
        />
        <p>{this.state.charLength}</p>
        <ValidateComponent textLength={this.state.charLength} />
        {charMap}
      </div>
    );
  }
}

export default App;
