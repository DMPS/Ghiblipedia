import React from "react";
import Fallback from "./Fallback";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const tree = renderer.create(<Fallback />).toJSON();
  expect(tree).toMatchSnapshot();
});
