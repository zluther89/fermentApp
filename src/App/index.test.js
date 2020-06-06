import React from "react";
import { shallow } from "enzyme";
import App from "./index.js";
import Modal from "./Modal/index.js";
import FermContainer from "./Ferments/index.js";

it("should not render if show if false", () => {
  const wrapper = shallow(<App />);
  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.contains(<Modal />)).toBe(false);
});

it("should render the ferm container", () => {
  const wrapper = shallow(<App />);
  // const modalWrapper = shallow(<Modal />);
  expect(wrapper.contains(<FermContainer />)).toBe(true);
});
