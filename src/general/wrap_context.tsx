// Takes a context consumer, and a component and provides all context values to the component by object spread
import React from "react";

const wrapContext = <componentProps extends {}>(
  ContextConsumer: React.Consumer<{}>,
  Component: React.StatelessComponent<componentProps>
) => {
  return (props: componentProps) => (
    <ContextConsumer>{(value: {}) => <Component {...value} {...props} />}</ContextConsumer>
  );
};

export default wrapContext;
