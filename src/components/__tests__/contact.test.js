import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Test if Contact page render", () => {
  render(<Contact />);
  const contactElement = screen.getByTestId("contact-form");
  expect(contactElement).toBeInTheDocument();
});

test("Test if page contain label", () => {
  render(<Contact />);
  const contactElement = screen.getByTestId("contact-form");
  expect(contactElement).toHaveTextContent("Email");
  expect(contactElement).toHaveTextContent("Password");
  expect(contactElement).toHaveTextContent("Colour");
  expect(contactElement).toHaveTextContent("Animal");
});
