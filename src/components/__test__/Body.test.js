import React, { act, useState } from "react";
import { monck_data } from "../Mock/Mock_data";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import UserContest from "../../utils/UserContext";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(monck_data);
    },
  });
});

describe("this is just beginning", () => {
  it("should be just this", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardLength = screen.getAllByTestId("res_card");

    expect(cardLength.length).toBe(49);
    const inputbutton = screen.getByTestId("res_inp");
    fireEvent.change(inputbutton, { target: { value: "veg" } });
    const searchbutton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchbutton);
    const cardlengthafterclick = screen.getAllByTestId("res_card");
    expect(cardlengthafterclick.length).toBe(3);
  });

  it("should check the redux inut", async () => {
    const Tescases = () => {
      const [loggedinuser, setUserName] = useState("");
      return (
        <Provider store={appStore}>
          <BrowserRouter>
            <UserContest.Provider
              value={{ loggedinuser: loggedinuser, setUserName }}
            >
              <Header />
              <Body />
            </UserContest.Provider>
          </BrowserRouter>
        </Provider>
      );
    };
    await act(() => render(<Tescases />));
    const inputSearch = screen.getByTestId("search_name");

    fireEvent.change(inputSearch, { target: { value: "Hello world" } });

    const getname = screen.getByTestId("name");
    expect(getname).toBeInTheDocument("Hello world");
  });
});
