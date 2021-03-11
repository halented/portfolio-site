// testing elements
import {
    render,
    fireEvent,
    screen,
    unmountComponentAtNode
} from '@testing-library/react'
import user from '@testing-library/user-event'

// component
import App from './App'

// let container = null;
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// can make this async if there seems to be a timing issue
test('menu opens successfully', async () => {
    render(<App />)

    const expandButton = screen.getByRole('img');
    fireEvent.click(expandButton)

    let sought = await screen.findByText(/Resume/i)
    console.log(sought)

    // expect(await screen.findByText(/Resume/i).toBeInTheDocument()
})