import { mount } from "enzyme";
import React from "react";
import NavBar from "./index";

it("renders without crashing", () => {
  mount(<NavBar>{[]}</NavBar>);
});
