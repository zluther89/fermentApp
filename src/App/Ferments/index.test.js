import React from "react";
import { shallow, mount } from "enzyme";
import Ferment from "./ferment";
import FermContainer from "./index";

describe("Single Ferment Tests", () => {
  it("should render without warnings", () => {
    shallow(<Ferment />);
  });

  it("should render the button container", () => {
    const wrapper = shallow(<Ferment />);
    const buttonContainer = (
      <div className="button-container">
        <button type="submit">Edit Details</button>
        <button type="submit">Stash</button>
      </div>
    );
    expect(wrapper.contains(buttonContainer)).toEqual(true);
  });
});

describe("FermContainer tests", () => {
  it("should render without warnings", () => {
    shallow(<FermContainer />);
  });

  it("should find 4 ferments based on sample data", () => {
    const sampleObj = {
      name: "test-name",
      type: "test-type",
      status: "test-status",
      date: "01/01/2001",
    };

    const sampleFermSet = [sampleObj, sampleObj, sampleObj, sampleObj];
    const wrapper = mount(<FermContainer ferments={sampleFermSet} />);
    expect(wrapper.find(".ferment-item")).toHaveLength(4);
  });

  it("should find 0 ferments when data is empty", () => {
    const wrapper = mount(<FermContainer />);
    expect(wrapper.find(".ferment-item")).toHaveLength(0);
  });
});
