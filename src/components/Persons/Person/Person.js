import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

import styles from './Person.css';

class Person extends Component {
  render() {
    return (
      <Auxiliary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

export default withClass(Person, styles.Person);
