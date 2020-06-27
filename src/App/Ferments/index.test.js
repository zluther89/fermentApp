import React from "react";
import { shallow, mount } from "enzyme";
import FermentComp from "./ferment";
import FermContainer from "./index";

describe("Single Ferment Tests", () => {
  const sampleObj = {
    name: "test-name",
    type: "test-type",
    status: "test-status",
    date: "01/01/2001",
  };

  it("should render without warnings", () => {
    shallow(<FermentComp ferment={sampleObj} removeHandler={() => {}} />);
  });

  it("should render the button container", () => {
    const wrapper = shallow(
      <FermentComp ferment={sampleObj} removeHandler={() => {}} />
    );
    const buttonContainer = <button type="submit">Edit Details</button>;
    expect(wrapper.contains(buttonContainer)).toEqual(true);
  });
});

describe("FermContainer tests", () => {
  it("should render without warnings", () => {
    shallow(<FermContainer removeHandler={() => {}} />);
  });

  it("should find 4 ferments based on sample data", () => {
    const sampleObj = {
      name: "test-name",
      type: "test-type",
      status: "test-status",
      date: "01/01/2001",
    };

    const sampleFermSet = [sampleObj, sampleObj, sampleObj, sampleObj];
    const wrapper = mount(
      <FermContainer ferments={sampleFermSet} removeHandler={() => {}} />
    );
    expect(wrapper.find(".ferment-item")).toHaveLength(4);
  });

  it("should find 0 ferments when data is empty", () => {
    const wrapper = mount(<FermContainer removeHandler={() => {}} />);
    expect(wrapper.find(".ferment-item")).toHaveLength(0);
  });
});
