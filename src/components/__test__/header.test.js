import "@testing-library/jest-dom";
import Header from "../Header";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import React from "react";
describe("header component", () => {
  it("should the login component is printes", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const result = screen.getByRole("button", { name: "login" });
    expect(result).toBeInTheDocument();
  });

  it("should the login button be pointless", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const loginbutton = screen.getByRole("button", { name: "login" });

    fireEvent.click(loginbutton);
    const loginbutdton = screen.getByRole("button", { name: "logout" });
    expect(loginbutdton).toBeInTheDocument();
  });
});
