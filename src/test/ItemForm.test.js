import { ItemForm } from "../components/ItemForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ItemFormComponent", () => {
  test("render ItemForm", () => {
    render(<ItemForm />);
    const titleElement = screen.getByTestId("app-title");
    const inputElement = screen.getByTestId("task-name");
    const btnElement = screen.getByTestId("task-add-btn");
    expect(titleElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
  });

  test("input value change when user type", async () => {
    render(<ItemForm />);
    const inputElement = screen.getByTestId("task-name");
    await userEvent.type(inputElement, "change input value");
    expect(inputElement).toHaveValue("change input value");
  });

  test("error message show when input empty", async () => {
    const mock = jest.fn();
    render(<ItemForm onAddTask={mock}/>);
    const btnElement = screen.getByTestId("task-add-btn");
    await userEvent.click(btnElement);
    const errorMessage = screen.queryByText("Please enter a task name");
    expect(errorMessage).toBeInTheDocument();
  });

  test('hides error message when input is changed', async() => {
    const mock = jest.fn();
    render(<ItemForm onAddTask={mock}/>);
    const inputElement = screen.getByTestId("task-name");
    const btnElement = screen.getByTestId("task-add-btn");
    await userEvent.type(inputElement, 'task 1');
    await userEvent.click(btnElement);
    const errorMessage = screen.queryByText("Please enter a task name");
    expect(errorMessage).not.toBeInTheDocument();
  });

  test('add task to tasks list', async() => {
    const mock = jest.fn();
    render(<ItemForm onAddTask={mock}/>);
    const inputElement = screen.getByTestId("task-name");
    const btnElement = screen.getByTestId("task-add-btn");
    await userEvent.type(inputElement, 'task 1');
    await userEvent.click(btnElement);
    expect(mock).toHaveBeenCalled();
  });

  test('empty input after add', async() => {
    const mock = jest.fn();
    render(<ItemForm onAddTask={mock}/>);
    const inputElement = screen.getByTestId("task-name");
    const btnElement = screen.getByTestId("task-add-btn");
    await userEvent.type(inputElement, 'task 1');
    await userEvent.click(btnElement);
    expect(inputElement).toHaveValue("");

  });
});
