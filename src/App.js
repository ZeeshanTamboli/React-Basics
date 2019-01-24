import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../src/components/Persons/Persons';
import Cockpit from '../src/components/Cockpit/Cockpit';
import withClass from './hoc/withClass';
import Auxiliary from './hoc/Auxiliary';

class App extends PureComponent {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClickedCounter: 0
  };

  // Lifecycle methods
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] in shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClickedCounter: prevState.toggleClickedCounter + 1
      };
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Auxiliary>
        <button onClick={() => this.setState({ showPersons: true })}>
          Show Persons
        </button>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Auxiliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, styles.App);
