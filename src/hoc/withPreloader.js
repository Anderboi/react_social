import React, { Suspense } from "react";
import { Preloader } from "../components/common/Preloader";

const withPreloader = (WrappedComponent) => {
  return (props) => {
    return (
      <ErrorBoundary>
        <Suspense fallback={<Preloader />}>
          <WrappedComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
};

export default withPreloader;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something wrong ...</h1>;
    }
  }
}
