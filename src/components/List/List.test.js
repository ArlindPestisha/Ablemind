import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

describe("List", () => {
  it("should render all the items", () => {
    const itemUrls = [
      { id: 1, url: "https://www.google.com", status: "success" },
      { id: 2, url: "https://www.facebook.com", status: "error" },
    ];

    render(<List itemUrls={itemUrls} />);

    expect(screen.getByText("https://www.google.com")).toBeInTheDocument();
    expect(screen.getByText("https://www.facebook.com")).toBeInTheDocument();
  });

  it("should render all the buttons", () => {
    const itemUrls = [
      { id: 1, url: "https://www.google.com", status: "success" },
      { id: 2, url: "https://www.facebook.com", status: "error" },
    ];

    render(<List itemUrls={itemUrls} />);

    expect(screen.getByText("Remove All")).toBeInTheDocument();
    expect(screen.getByText("Reaload All")).toBeInTheDocument();
  });
});