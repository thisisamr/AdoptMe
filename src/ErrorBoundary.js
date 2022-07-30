import { Link, Navigate } from "react-router-dom";
import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 2000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h1>
          OH NO CLICK <Link to={"/"}>HERE</Link> TO RETURN TO HOME OR WAIT 5
          SECONDS AND WE WILL DO IT FOR YOU
        </h1>
      );
    }
    return this.props.children;
  }
}
