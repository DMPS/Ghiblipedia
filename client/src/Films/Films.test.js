import React from "react";
import Films from "./Films";
import query from "./query";
import renderer from "react-test-renderer";

it("Query has not changed", () => {
  expect(query).toMatchSnapshot();
});
