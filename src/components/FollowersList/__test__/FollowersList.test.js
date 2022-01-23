import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

// examples for testing async elements

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

// IF YOU WANNA PREVENT THE RESETS (or fix in the react scripts/utils/createjestconfig in node modules) 
// "jest": {
//     "collectCoverageFrom": [
//         "src/**/*.{js,jsx,ts,tsx}"
//       ],
//       "resetMocks": false
//  }


describe("FollowersList", () => {

    // mocking the axios module and getting the response defined (mimicking the api call basically)
    // beforeeach is necessary because jest resets the mock call and causes a fatal error
    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST")
        jest.mock("../../../__mocks__/axios")
    })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })

    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
        // wait fot the element to exist and then test it, because there is a time when it doesn't exist 
        // async await works with findBy
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
    
    // it('should fetch and render input element', async () => {
    //     render(
    //         <MockFollowersList />
    //     );
    
    //     const followerDivElement = await screen.findByTestId(`follower-item-0`)
    //     expect(followerDivElement).toBeInTheDocument();
    // });
})