import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const tree = renderer
    .create(
      <Button
        text={"Click Me!"}
        onClick={() => {
          console.log("You clicked me!");
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
