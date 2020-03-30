import React from "react";

class Lotto extends React.Component {
  constructor(props) {
    super(props);
    // this.message = faker.lorem.words();
    // Set initial state
    this.randomGenerator = num => {
      return parseInt(Math.random() * num);
    };

    this.state = {
      numbers: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState({
      numbers: [
        this.randomGenerator(49),
        this.randomGenerator(49),
        this.randomGenerator(49),
        this.randomGenerator(49),
        this.randomGenerator(49),
        this.randomGenerator(49),
        this.randomGenerator(10)
      ]
    });
  }

  reset() {
    this.setState({
      numbers: []
    });
  }

  render() {
    return (
      <div className="lotto-container">
        <h1>LOTTO 6/49</h1>
        <p>Generating lucky numbers</p>
        <ul className="number-container">
          {this.state.numbers.map((num, i) => {
            return (
              <li key={i}>
                <p>{this.state.numbers[i]}</p>
              </li>
            );
          })}
        </ul>
        <div className="button-container">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
          <button className="generate" onClick={this.handleClick}>
            Show me lucky numbers
          </button>
        </div>
      </div>
    );
  }
}

export default Lotto;
