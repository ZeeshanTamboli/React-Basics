import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch(err, info) {
    this.setState({ hasError: true, errorMessage: err });
  }

  render() {
    const { hasError, errorMessage } = this.state;
    if (hasError) {
      return <h1>{errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
