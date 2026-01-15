import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    console.log(error, info); // Log the error details
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
