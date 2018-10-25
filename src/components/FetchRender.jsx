import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * A render props component that completes the provided promise
 * and then renders the main component providing the result
 */
class FetchRender extends Component {
  static propTypes = {
    toComplete: PropTypes.objectOf(Promise),
    loadingNode: PropTypes.func,
    render: PropTypes.func
  };

  static defaultProps = {
    toComplete: Promise.resolve(null),
    loadingNode: () => <React.Fragment />,
    render: data => <React.Fragment />
  };

  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      data: null
    };
  }

  componentDidMount() {
    if (this.state.fetched) return;

    this.props.toComplete
      .then(data => {
        this.setState({ data: data, fetched: true });
      })
      .catch(console.log);
  }

  render() {
    if (this.state.fetched) {
      return this.props.render(this.state.data);
    }

    return this.props.loadingNode();
  }
}

export default FetchRender;
