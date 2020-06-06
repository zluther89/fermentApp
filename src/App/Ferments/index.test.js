import Ferment from "./ferment.js";
import FermContainer from "./index.js";
import React from "react";
import { shallow } from "enzyme";

describe("Single Ferment Tests", () => {
  it("should render without warnings", () => {
    shallow(<Ferment />);
  });

  it("should render the button container", () => {
    const wrapper = shallow(<Ferment />);
    const buttonContainer = (
      <div className="button-container">
        <button>Edit Details</button>
        <button>Stash</button>
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
    let wrapper = shallow(<FermContainer />);
    expect(wrapper.find(Ferment)).toHaveLength(4);
  });
});
