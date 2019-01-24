import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

import styles from './Person.css';

class Person extends Component {
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    return (
      <Auxiliary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, styles.Person);
