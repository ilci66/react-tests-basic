import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

// using mock because actual functionality is not important, I won't be testing that
const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it('should render input element', () => {
        render(
            <AddInput 
                todos={[]}
                // setTodos={() => {}} // this is completely valid as well, but not the best practice
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        // second element in the pranthesis is what we are going to change by
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        // just expecting the call, not the change, that's why the mock will do for this one
        expect(mockedSetTodo).toBeCalled()
    });
    
    it('should have empty input when add button is cliked', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})