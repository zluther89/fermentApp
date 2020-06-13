import React from "react";
import { shallow, mount } from "enzyme";
import App from "./index.js";
import Modal from "./Modal/index.js";
import FermContainer from "./Ferments/index.js";
import Nav from "./NavBar/index.js";

//not testing correctly
xit("a test test", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("div").length).toBe(3);
});

it("should not render Modal if show is false", () => {
  const wrapper = mount(<App />);

  // const modalWrapper = shallow(<Modal />);

  expect(wrapper.find(".modal-display-none").length).toBe(1);
  expect(wrapper.find(".modal-display-block").length).toBe(0);
});

it("should render the sidebar", () => {
  const wrapper = mount(<App />);
  // const navContainer = <div className="nav">
  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.find(".nav").length).toBe(1);
});

it("should render the ferm container", () => {
  const wrapper = shallow(<App />);
  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.contains(<FermContainer />)).toBe(true);
});
