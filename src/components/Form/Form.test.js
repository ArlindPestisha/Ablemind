import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

//write a test for the form component with description:
//- it should render the form component
//- it should render a input field
//- it should render a button with text "Add URL"
//- it should call onAdd callback when the form is submitted
//- it should set the input value to empty string when submitted

test("should render the form component", () => {
  render(<Form onAdd={() => {}} />);
  expect(screen.getByPlaceholderText("Add Url")).toBeInTheDocument();
  expect(screen.getByText("Add URL")).toBeInTheDocument();
});

test("should render a input field", () => {
  render(<Form onAdd={() => {}} />);
  expect(screen.getByPlaceholderText("Add Url")).toBeInTheDocument();
});

test("should render a button with text Add URL", () => {
  render(<Form onAdd={() => {}} />);
  expect(screen.getByText("Add URL")).toBeInTheDocument();
});

test("should call onAdd callback when the form is submitted", () => {
  const callback = jest.fn();
  render(<Form onAdd={callback} />);
  const input = screen.getByPlaceholderText("Add Url");
  fireEvent.change(input, { target: { value: "https://www.google.com" } });
  fireEvent.submit(screen.getByText("Add URL"));
  expect(callback).toHaveBeenCalledTimes(1);
});

test("should set the input value to empty string when submitted", () => {
  const callback = jest.fn();
  render(<Form onAdd={callback} />);
  const input = screen.getByPlaceholderText("Add Url");
  fireEvent.change(input, { target: { value: "https://www.google.com" } });
  fireEvent.submit(screen.getByText("Add URL"));
  expect(input.value).toBe("");
});


