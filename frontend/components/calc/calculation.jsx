import React from 'react';

export default class  extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="calculator-main">
        <div className="flex-wrapper">
          <ul className="numbers">
            <div className="results-bar">0</div>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>*</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>–</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>+</li>
            <li id="equals">=</li>
            <li>/</li>
            <li>c</li>
          </ul>
        </div>
      </div>
    )

  }
}