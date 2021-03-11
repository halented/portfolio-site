// testing elements
import {
    render,
    fireEvent,
    screen
} from '@testing-library/react'
import user from '@testing-library/user-event'

// component
import App from './App'

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