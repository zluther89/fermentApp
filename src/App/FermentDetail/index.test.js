import React from "react";
import FermentDetails from "./index";
import { mount } from "enzyme";

it("should render without errors", () => {
  const sampleFerment = {
    name: "test-name",
    type: "test-type",
    status: "test-status",
    date: "01/01/2001",
    description: "sample descriptions",
  };
  mount(<FermentDetails ferment={sampleFerment} />);
});
