import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemUrl from "./ItemUrl";

test("should render the ItemUrl component", () => {
  render(
    <ItemUrl
      url={{ url: "https://www.google.com" }}
      status={{ status: 200 }}
      onRefreshUrl={() => {}}
      onDelete={() => {}}
    />
  );
  expect(screen.getByText("https://www.google.com")).toBeInTheDocument();
});

test("should render a h3 element with url and status", () => {
  render(
    <ItemUrl
      url={{ url: "https://www.google.com" }}
      status={{ status: 200 }}
      onRefreshUrl={() => {}}
      onDelete={() => {}}
    />
  );
  expect(screen.getByText("https://www.google.com")).toBeInTheDocument();
  expect(screen.getByText("200")).toBeInTheDocument();
});
