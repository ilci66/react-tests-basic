import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"

// Doing integration tests here (for components affecting other components)

// using a Link again so don't forget to use this format 
const MockTodo = () => {
    return (
        <BrowserRouter>
          <Todo/>
        </BrowserRouter>
    )
}

// this is mimicking the behaviour of adding a task basically
const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // grab the button by name
    const buttonElement = screen.getByRole("button", { name: /Add/i} );
    tasks.forEach((task) => {
        // well, changing the target value
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render(
        <MockTodo />
    );
    // just to keep it simple, checking for length
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

it('task should not have complete class when initally rendered', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});