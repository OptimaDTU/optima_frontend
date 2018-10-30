import React from "react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const renderWithRouter = (
  route: string,
  element: React.ReactElement<{}>
): React.ReactElement<{}> => {
  const history = createMemoryHistory({ initialEntries: ["/module/first"] });
  return <Router history={history}>{element}</Router>;
};

export { renderWithRouter };
