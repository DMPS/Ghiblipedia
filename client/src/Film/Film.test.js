import React from "react";
import Film from "./Film";
import renderer from "react-test-renderer";

describe("Film", () => {
  it("renders without crashing", () => {
    const tree = renderer
      .create(
        <Film director="blah" producer="blah" title="blah" description="blah" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows both director and producer ", () => {
    const tree = renderer
      .create(
        <Film
          director="The Director"
          producer="The Producer"
          title="Test Film"
          description="The Description"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("doesn't repeat the director/producer's name ", () => {
    const tree = renderer
      .create(
        <Film
          director="The Director"
          producer="The Director"
          title="Test Film"
          description="The Description"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
