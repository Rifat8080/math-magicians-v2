import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export function Display({ result }) {
  return (
    <div>
      <h1>{result}</h1>
      <ButtonBar />
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export function ButtonBar() {
  return (
    <div>
      <div className="button">
        <div className="row">
          <div className="number">AC</div>
          <div className="number">+/-</div>
          <div className="number">%</div>
          <div className="orange">&#247;</div>
        </div>
        <div className="row">
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
          <div className="orange">&#215;</div>
        </div>
        <div className="row">
          <div className="number">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
          <div className="orange">-</div>
        </div>
        <div className="row">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
          <div className="orange">+</div>
        </div>
        <div className="row">
          <div className="zero">0</div>
          <div className="decimal">.</div>
          <div className="orange">=</div>
        </div>
      </div>
    </div>
  );
}

export function Button({ buttonName }) {
  return (
    <div>
      <h1>{buttonName}</h1>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
