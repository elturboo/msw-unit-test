import { render, screen, within } from "@testing-library/react";
import NewItem from "../components/NewItem";
import userEvent from "@testing-library/user-event";

const rednderComponent = () => {
  const mockLoad = jest.fn();
  render(<NewItem onLoad={mockLoad} />);
  return { mockLoad };
};

// custom matcher
// 1- create function for custom matchers
const toContaineCount = (container, role, count = 1) => {
  const ele = within(container).getAllByRole(role);
  if (ele.length === count) {
    return {
      pass: true,
    };
  } else {
    return {
      pass: false,
      message: () =>
        `expected ${container} to have ${count} ${role} but found ${ele.length}`,
    };
  }
};
// 2- put custom matcher into expect
// ({}) must be object if () ont works
expect.extend({ toContaineCount });

// 3- use custom matcher
test("check have one btn", async () => {
  rednderComponent();
  // container
  const btn3 = screen.getByTestId("threeBtns");
  // container(btn3) -- role("button") -- count(1)
  expect(btn3).toContaineCount("button", 1);
});

// ================================================================

test("renders new item component", async () => {
  const { mockLoad } = rednderComponent();
  const btnLoad = screen.getByTestId("btn-load");
  await userEvent.click(btnLoad);
  expect(mockLoad).toHaveBeenCalled();
});

test("check three btns", async () => {
  rednderComponent();
  const btnsDiv = screen.getByTestId("threeBtns");
  const btns = within(btnsDiv).getAllByRole("button");
  expect(btns).toHaveLength(1);
});
