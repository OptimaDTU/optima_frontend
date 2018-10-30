import React from "react";
import { render, Simulate, wait, getAllByTestId } from "react-testing-library";
// this adds custom expect matchers
// import 'react-testing-library/extend-expect'
// the mock lives in a __mocks__ directory

import ModulePageVideoItem from "./ModulePageVideo";
import { renderWithRouter } from "../../general/test_helpers";

test("Displays image wrapped in link", async () => {
  // const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  const resources = [];
  const element = renderWithRouter(
    "/module/first",
    <ModulePageVideoItem
      modSlug={"first"}
      index={1}
      data={{
        resources: resources,
        slug: "first-vid"
      }}
    />
  );
  const { getByLabelText, getByText, getByTestId, container } = render(element);
  expect(container.querySelector("img").parentElement.getAttribute("href")).toBe("/module/first/video/first-vid")
  expect(getByText("2.").tagName.toLowerCase()).toBe("div");
  expect(container.querySelectorAll(".resource-link").length).toBe(resources.length);
});
