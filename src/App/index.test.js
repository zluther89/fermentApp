import React from "react";
import { mount } from "enzyme";
import App from "./index";

it("should not render Modal if show is false", () => {
  const wrapper = mount(<App />);

  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.find(".modal-display-none").length).toBe(1);
  expect(wrapper.find(".modal-display-block").length).toBe(0);
});

it("should render the sidebar", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(".nav").length).toBe(1);
});

it("should render the ferm container", () => {
  const wrapper = mount(<App />);
  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.find(".ferment-container").length).toBe(1);
});
