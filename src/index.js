import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleWateryPercent = this.handleWateryPercent.bind(this);
    this.otherWaith = 1;
    this.state = {
      'inputWeight'  : 100,
      'inputWateryPercent' : 99
    };
  }

  handleWeight(e) {
    const totalWaith = parseFloat(e.target.value);
    const otherPercent = (this.otherWaith / totalWaith) * 100;
    const inputWateryPercent = 100 - otherPercent;

    this.setState({'inputWateryPercent' : inputWateryPercent,
                    'inputWeight' : e.target.value });
  }

  handleWateryPercent(e) {
    const inputWateryPercent =  parseFloat(e.target.value);
    const otherPercent = 100 - inputWateryPercent;
    const waterWaigth = (this.otherWaith / otherPercent) * inputWateryPercent;
    const totalWaigth = waterWaigth + this.otherWaith;

    this.setState({'inputWeight' : totalWaigth,
                   'inputWateryPercent': e.target.value });
  }

  render() {
    const inputWeight = parseInt(this.state.inputWeight,10);
    const inputWateryPercent = parseInt(this.state.inputWateryPercent,10);

    const styleWateryPX = `${inputWateryPercent*2}px`;
    const styleWateryOffset = `${99-inputWateryPercent}px`;

    const border = `${((inputWateryPercent)/100)*(100-(inputWeight-6))}px solid #0c0`
    const styleWatery =  { 'width': styleWateryPX,
                           'height': styleWateryPX,
                           'bottom': styleWateryOffset,
                           'left': styleWateryOffset,
                           'border' : border
                         };

    return (
      <div>
        <div className="title">Waith : {inputWeight} kg </div>
        <div className="circles">
          <div className="range-slider-1">
            <input
              className="input-range"
              orient="vertical"
              type="range"
              step="0.1"
              name="inputWeight"
              value={inputWeight}
              onChange={this.handleWeight}
              min="1"
              max="100"
            ></input>
            <span className="range-value">
              {inputWeight}
            </span>
            <div className="circle circle1" style={styleWatery}>
            </div>

          </div>

          <div className="range-slider-2">
            <input
              className="input-range"
              orient="horizontal"
              type="range"
              step="1"
              name="inputWateryPercent"
              value={inputWateryPercent}
              onChange={this.handleWateryPercent}
              min="50"
              max="99"
            ></input>
            <span>Watery %</span>
            <span className="range-value">
              {inputWateryPercent}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
