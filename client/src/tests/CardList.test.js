import React from "react";
import * as rtl from "@testing-library/react";
import { CardList } from "../components/CardList";

describe("players length", () => {
  const cont = rtl.render(<CardList />);
  const players = cont.state("players");
  expect(players).toHaveBeenCalled();
});
