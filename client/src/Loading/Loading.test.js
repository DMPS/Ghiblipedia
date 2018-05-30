import React from "react";
import Loading from "./Loading";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
