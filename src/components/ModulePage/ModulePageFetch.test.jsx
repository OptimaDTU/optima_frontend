import React from "react";
import { render, Simulate, wait, getAllByTestId } from "react-testing-library";
// this adds custom expect matchers
// import 'react-testing-library/extend-expect'
// the mock lives in a __mocks__ directory

import ModulePageFetch from "./ModulePageFetch";
import { renderWithRouter, renderWithRoute } from "../../general/test_helpers";
import fetch from "jest-fetch-mock";

global.fetch = fetch;

test("Displays image wrapped in link", async () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const resources = [];
  const element = renderWithRouter(
    "/module/first",
    renderWithRoute("/module/:slug", ModulePageFetch, {})
  );
  fetch.mockResponse(
    JSON.stringify({
      description: "Test module is supplied",
      id: 1,
      slug: "test-module",
      videos: []
    })
  );
  const { getByLabelText, getByText, getByTestId, container } = render(element);
  expect(fetch.mock.calls.length).toEqual(1);
});
