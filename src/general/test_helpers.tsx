import React from "react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

const renderWithRouter = (
  route: string,
  element: React.ReactElement<{}>
): React.ReactElement<{}> => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return <Router history={history}>{element}</Router>;
};

const renderWithRoute = (
  route: string,
  Component: React.SFC | React.ComponentClass,
  props: any
): React.ReactElement<any> => {
  const toRender = (newProps: any) => <Component {...newProps} {...props} />;
  return (
    <Switch>
      <Route path={route} component={toRender} />
    </Switch>
  );
};

export { renderWithRouter, renderWithRoute };
