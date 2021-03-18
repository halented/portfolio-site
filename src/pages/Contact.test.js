import { screen, render, fireEvent } from '@testing-library/react'

import Contact from './Contact'


describe('Contact details tests', () => {

    test('Twitter link opens new tab', async () => {
        render(<Contact />)
        const twitterlink = screen.getByText('Twitter')
        fireEvent.click(twitterlink)
        // now what
        // expect(jest.fn()).toBeCalled()
    })
})

// produces error: 
// expect(received).toBeCalled()
// Matcher error: received value must be a mock or spy function

// `expect` does *not* accept a reference to a function. it wants a mock or spy.