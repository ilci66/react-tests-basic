import { getByTestId, render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

// THESE ARE GOOD ASSERTION EXAMPLES
// getByTestId("somevalue") grabs the element with data-testid="somevalue"

// as Link is used in the actual component for the followers I need to wrap my component with brwoserrouter
// browserrouter is already used in index.js,
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
          <TodoFooter 
            numberOfIncompleteTasks={numberOfIncompleteTasks}
          />
        </BrowserRouter>
    )
}
// use the wrapped component you just created


// using describe because all of these tests have to do with the same component/part I want to test
describe("TodoFooter", () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(
        <MockTodoFooter 
          numberOfIncompleteTasks={5}
        />
    );
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(
        <MockTodoFooter 
          numberOfIncompleteTasks={1}
        />
    );
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });
})

// it('p element should be truthy when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeTruthy();
// });

// it('"task" should be visible when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeVisible();
// });

// it('should contain p tag with correct text', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toContainHTML('p');
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toHaveTextContent("1 task left");
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).not.toBeFalsy();
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement.textContent).toBe("1 task left");
// });