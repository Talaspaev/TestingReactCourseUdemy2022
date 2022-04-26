import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  //render component
  render(<App />);

  // find element with role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background- is red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //Clik the button

  fireEvent.click(colorButton);

  //expect the background is blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // check element with text of 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
