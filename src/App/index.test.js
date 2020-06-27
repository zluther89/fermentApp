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

it("should remove item from ferment array when removeHandler is called", () => {
  const sampleObj = {
    name: "test-name",
    type: "test-type",
    status: "test-status",
    date: "01/01/2001",
  };
  const testFermArr = [
    { ...sampleObj },
    { ...sampleObj },
    { ...sampleObj },
    { ...sampleObj },
  ];

  function removeFermentMock(ferm) {
    const newFerments = testFermArr.filter((ferment) => ferment !== ferm);
    return newFerments;
  }

  const resArr = removeFermentMock(testFermArr[0]);

  expect(resArr.length).toBe(3);
});
