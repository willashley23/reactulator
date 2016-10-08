import React from 'react';

export default class Calculation extends React.Component {
  constructor(props) {
    super(props)
    // Permanently bind methods
    this.addNumberToCalculation = this.addNumberToCalculation.bind(this);
    this.insertOperator = this.insertOperator.bind(this);
    this.executeCalculation = this.executeCalculation.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.newresult;
    this.state = {
      expression: '0',
      user_id: this.props.currentUser.id,
    }
  }

  // return e => this.setState({[property]: e.target.value});

  addNumberToCalculation(num) {
    // debugger
    var newState = {};
    if (this.state.expression === "0") {
      // newState[expression] = num;
      this.setState({expression: num});   
    } else {
      this.newresult = this.state.expression + num;
      this.setState({expression: this.newresult});
    }
    console.log(this.state)
    console.log(this.state.expression)
  }

  insertOperator(operator) {
    var newState = {};
    debugger
    if (this.state.expression === "0"){
      alert("Enter an expression first!")
    } else if (this.state.expression.split('').includes(operator)) {
      alert("Only one operator per expression.")
    } else {
      this.newresult = this.state.expression + ` ${operator} `;
      this.setState({expression: this.newresult}); 
    }
  }

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
            <li onClick={() => this.insertOperator('-')}>*</li>
            <li onClick={() => this.addNumberToCalculation('4')}>4</li>
            <li onClick={() => this.addNumberToCalculation('5')}>5</li>
            <li onClick={() => this.addNumberToCalculation('6')}>6</li>
            <li onClick={() => this.insertOperator('-')}>–</li>
            <li onClick={() => this.addNumberToCalculation('7')}>1</li>
            <li onClick={() => this.addNumberToCalculation('8')}>2</li>
            <li onClick={() => this.addNumberToCalculation('9')}>3</li>
            <li onClick={() => this.insertOperator('-')}>+</li>
            <li id="equals" onClick={this.executeCalculation}>=</li>
            <li onClick={() => this.insertOperator('-')}>/</li>
            <li onClick={this.clearScreen}>c</li>
          </ul>
        </div>
      </div>
    )
  }
}