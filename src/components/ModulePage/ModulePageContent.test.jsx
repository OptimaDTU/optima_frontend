import React from "react";
import { render, Simulate, wait, getAllByTestId } from "react-testing-library";
// this adds custom expect matchers
// import 'react-testing-library/extend-expect'
// the mock lives in a __mocks__ directory

import ModulePageContent from "./ModulePageContent";
import { renderWithRouter } from "../../general/test_helpers";

test("Displays Module Number, and description", async () => {
  // const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  const videos = [];
  const { getByLabelText, getByText, getByTestId, container } = render(
    <ModulePageContent
      description={"Test Module description"}
      modNumber={1}
      slug={"test-mod"}
      videos={videos}
    />
  );
  expect(
    container.querySelector("h1").textContent.toLowerCase()
  ).toBe("module 1");
  expect(getByText("Test Module description").tagName.toLowerCase()).toBe("p");
});
