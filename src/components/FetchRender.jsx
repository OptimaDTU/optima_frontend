import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * A render props component that completes the provided promise
 * and then renders the main component providing the result
 */
class FetchRender extends Component {
  static propTypes = {
    loadingNode: PropTypes.func,
    render: PropTypes.func,
    toComplete: PropTypes.objectOf(Promise)
  };

  static defaultProps = {
    loadingNode: () => <React.Fragment />,
    render: data => <React.Fragment />,
    toComplete: Promise.resolve(null)
  };

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      fetched: false
    };
  }

  componentDidMount() {
    if (this.state.fetched) {
      return;
    }

    this.props.toComplete
      .then(data => {
        this.setState({ data: data, fetched: true });
      });
  }

  render() {
    if (this.state.fetched) {
      return this.props.render(this.state.data);
    }

    return this.props.loadingNode();
  }
}

export default FetchRender;
