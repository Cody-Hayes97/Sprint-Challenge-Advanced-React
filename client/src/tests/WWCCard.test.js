import React from "react";
import { WWCCard } from "../components/WWCCard";
import * as rtl from "@testing-library/react";

it("text shows", () => {
  const wrapper = rtl.render(<WWCCard />);
  const nameText = wrapper.queryByText(/Name/i);
  expect(nameText).toBeTruthy();
});
