import React from "react";
import FermentDetails from "./index";
import { mount } from "enzyme";

//needs to be adjusted as it now recieves props from location instead of being passed
xit("should render without errors", () => {
  mount(<FermentDetails />);
});
