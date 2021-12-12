import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   //render method creates a virtual dom
//   render(<App />);
//   //screen object is used to access the virtual dom
//   const linkElement = screen.getByRole("heading", { name: /learn react/i });
//   //assetion causes the test to either succeed or fail
//   //
//   // expect starts the assetion && toBeInTheDocument is the matcher
//   expect(linkElement).toBeInTheDocument();
// });

test("button has correct initial color and text", () => {
  render(<App />);
  //expects to have text change to blue
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  //expects the background color to be red
  expect(colorButton).toHaveClass("red");

  //click button
  fireEvent.click(colorButton);

  //expects color to be blue
  expect(colorButton).toHaveClass("blue");

  //expects to have text change to red
  expect(colorButton).toHaveTextContent(/change to red/i);
});
