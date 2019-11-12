import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Nav } from "./navBar";
import { renderIntoDocument, cleanup } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";

afterEach(cleanup);

test("navBar onClick", () => {
  const handleClick = jest.fn();
  renderIntoDocument(<Nav onClick={handleClick} />);
});
