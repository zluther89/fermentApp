import Modal from "./index.js";
import React from "react";
import { shallow } from "enzyme";
import App from "../index.js";

it("should run a test", () => {
  expect(true);
});

it("should render without crashing", () => {
  shallow(<Modal />);
});

it("should test the wrapper correctly", () => {
  const wrapper = shallow(
    <div>
      <div>extra shit</div>
      <div>
        <div data-foo="foo" data-bar="bar">
          Hello
        </div>
      </div>
    </div>
  );

  expect(
    wrapper.contains(
      <div data-foo="foo" data-bar="bar">
        Hello
      </div>
    )
  ).toBe(true);
});

it("should render a start date label", () => {
  let wrapper = shallow(<Modal show={true} />);
  let startLabel = <label>Start Date:</label>;
  expect(wrapper.contains(startLabel)).toBe(true);
});

xit("should not render if show if false", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(Modal));
});
