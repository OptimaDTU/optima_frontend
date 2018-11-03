import React from "react";
import { render, Simulate, wait, getAllByTestId } from "react-testing-library";
// this adds custom expect matchers
// import 'react-testing-library/extend-expect'
// the mock lives in a __mocks__ directory

import MainRouter from "./MainRouter";
import { renderWithRouter, renderWithRoute } from "../general/test_helpers";
import fetch from "jest-fetch-mock";

global.fetch = fetch;

test("Displays home page then go to different link", async () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const resources = [];
  const element = renderWithRouter("/", <MainRouter />);
  fetch.mockResponse(
    JSON.stringify([
      {
        description:
          "This module covers the fundamentals of Python required for Data Science.",
        id: 1,
        slug: "getting-started",
        thumbnail:
          "https://www.dataiku.com/static/img/learn/guide/getting-started/getting-started-with-python/logo-stack-python.png",
        title: "Getting Started"
      }
    ])
  );
  const { getByLabelText, getByText, getByTestId, container } = render(element);
  expect(fetch.mock.calls.length).toEqual(1);
  expect(container.querySelectorAll(".ModuleCard").length).toBe(1);
});
