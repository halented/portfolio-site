// testing elements
import {
    render,
    fireEvent,
    screen,
    unmountComponentAtNode
} from '@testing-library/react'
import user from '@testing-library/user-event'
import { convertLegacyProps } from 'antd/lib/button/button';

// component
import App from './App'


test('menu opens successfully', async () => {
    render(<App />)

    const expandButton = screen.getByTestId('open-menu')
    fireEvent.click(expandButton)

    expect(await screen.findByText(/Resume/i).toBeInTheDocument())
})