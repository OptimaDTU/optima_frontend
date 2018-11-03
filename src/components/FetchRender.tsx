import React, { Component } from "react";

interface IProps {
  loadingNode: () => React.ReactElement<any>,
  render: (data: {} | []) => React.ReactElement<any>,
  toComplete: Promise<any>
}
/**
 * A render props component that completes the provided promise
 * and then renders the main component providing the result
 */
class FetchRender extends Component<IProps, any> {

  public static defaultProps: Partial<IProps> = {
    loadingNode: () => <React.Fragment />,
    render: (data: {} | []) => <React.Fragment />,
    toComplete: Promise.resolve(null)
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      data: null,
      fetched: false
    };
  }

  public componentDidMount() {
    this.props.toComplete
      .then(data => {
        this.setState({ data, fetched: true });
      });
  }

  public render() {
    if (this.state.fetched) {
      return this.props.render(this.state.data);
    }

    return this.props.loadingNode();
  }
}

export default FetchRender;
