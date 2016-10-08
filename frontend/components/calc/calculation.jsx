import React from 'react';

export default class Calculation extends React.Component {
  constructor(props) {
    super(props)
    // Permanently bind methods
    this.addNumberToCalculation = this.addNumberToCalculation.bind(this);
    this.insertOperator = this.insertOperator.bind(this);
    this.executeCalculation = this.executeCalculation.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.displayCalculations = this.displayCalculations.bind(this);
    this.newresult;
    this.state = {
      expression: '0',
      user_id: this.props.currentUser.id,
    }
  }

  addNumberToCalculation(num) {
    if (this.state.expression === "0") {
      this.setState({expression: num});   
    } else {
      this.newresult = this.state.expression + num;
      this.setState({expression: this.newresult});
    }
    console.log(this.state)
    console.log(this.state.expression)
  }

  insertOperator(operator) {
    if (this.state.expression === "0"){
      alert("Enter an expression first!")
    } else if (this.state.expression.split('').includes(operator)) {
      alert("Only one operator per expression.")
    } else {
      this.newresult = this.state.expression + ` ${operator} `;
      this.setState({expression: this.newresult}); 
    }
  }

  displayCalculations() {
    console.log(this.props.calculations)
    return (
      <ul className="calc-board">
        {
          Object.keys(this.props.calculations).map( (key) => {
            return <li>{this.props.calculations[key].expression}</li>
          })
        }
      </ul>
    )
  }

// Start here. Send expression to database. In model, parse answer and...add it? You might need to add an 
// answer column to the model, set it to 0 by default, and have no validations on it. Then fetch all calculations or something
// and render them below the calculator. 
  executeCalculation() {
    this.props.createCalculation( { calculation: { expression: this.state.expression, user_id: this.state.user_id } });  
  }

  clearScreen() {
    this.setState({expression: '0'})
  }

  render() {

    return (
      <div className="calculator-main">
        <div className="flex-wrapper">
          <ul className="numbers">
            <div className="results-bar">{this.state.expression}</div>
            <li onClick={() => this.addNumberToCalculation('7')}>7</li>
            <li onClick={() => this.addNumberToCalculation('8')}>8</li>
            <li onClick={() => this.addNumberToCalculation('9')}>9</li>
            <li onClick={() => this.insertOperator('*')}>*</li>
            <li onClick={() => this.addNumberToCalculation('4')}>4</li>
            <li onClick={() => this.addNumberToCalculation('5')}>5</li>
            <li onClick={() => this.addNumberToCalculation('6')}>6</li>
            <li onClick={() => this.insertOperator('-')}>–</li>
            <li onClick={() => this.addNumberToCalculation('1')}>1</li>
            <li onClick={() => this.addNumberToCalculation('2')}>2</li>
            <li onClick={() => this.addNumberToCalculation('3')}>3</li>
            <li onClick={() => this.insertOperator('+')}>+</li>
            <li id="equals" onClick={this.executeCalculation}>=</li>
            <li onClick={() => this.insertOperator('/')}>/</li>
            <li onClick={this.clearScreen}>c</li>
          </ul>
        </div>
        <h2>Recent Calculations</h2>
        {this.displayCalculations()}
      </div>
    )
  }
}