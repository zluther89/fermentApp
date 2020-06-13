import Modal from "./index.js";
import React from "react";
import { shallow, mount } from "enzyme";

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

it("should not render Modal if show is false", () => {
  const wrapper = mount(<Modal />);

  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.find(".modal-display-none").length).toBe(1);
  expect(wrapper.find(".modal-display-block").length).toBe(0);
});

it("should render Modal if show is true", () => {
  const wrapper = mount(<Modal show={true} />);

  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.find(".modal-display-none").length).toBe(0);
  expect(wrapper.find(".modal-display-block").length).toBe(1);
});
