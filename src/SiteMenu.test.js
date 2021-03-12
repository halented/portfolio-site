// Integrations Test for Menu

// testing elements
import {
    render,
    fireEvent,
    screen
} from '@testing-library/react'

// component
import App from './App'

// cleanup is automatically called after each `test` or `it` by default when using Jest. if you import it from the testing library you *can* call it manually like so:
// afterEach(cleanup)

describe("Site Navigation Tests", () => {

    const openMenu = () => {
        const expandButton = screen.getByTestId('open-menu')
        fireEvent.click(expandButton)
    }

    test('Menu expands on click', async () => {
        render(<App />)

        openMenu()

        expect(await screen.findByText(/Resume/i)).toBeInTheDocument()
    })

    test('Links in menu change page appropriately', async () => {
        render(<App />)

        // check project link
        openMenu()
        const projectLinks = await screen.findAllByText(/Projects/i)
        fireEvent.click(projectLinks[0])
        expect(await screen.findByText(/Finally/i)).toBeInTheDocument()

        // check contact link
        openMenu()
        const contactLinks = await screen.findAllByText(/Contact/i)
        fireEvent.click(contactLinks[0])
        expect(await screen.findByText(/LinkedIn/i)).toBeInTheDocument()

        // check dog pics link
        openMenu()
        const dogLink = await screen.findByText(/Dog/i)
        fireEvent.click(dogLink)
        expect(screen.getByTestId('dog-card')).toBeInTheDocument()

        // not sure how to check the resume link as it opens a new tab
        // check resume link
        // openMenu()
        // const resumeLink = await screen.findByText(/Resume/i)
        // fireEvent.click(resumeLink)
        // expect(await screen.findByText(/portfolio/i)).toBeInTheDocument()
    })
})

// IMPORTANT NOTE: inside node_modules/react-tooltip/dist/index.js line 1189, there is an error handler that inserts a style node into the DOM tree IF the style node does not already exist. This insertion causes any tests that come across the ToolTip component to fail with the following error: 

// Error: Uncaught [HierarchyRequestError: Invalid insertion of STYLE node in #document node.]

// commenting out this error handler temporarily resolves the problem and allows the tests to run. pending a better fix. 