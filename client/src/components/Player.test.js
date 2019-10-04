import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Player from './Player'

test('renders without crashing', () => {
    render(<Player {...{ name: "Alex Morgan", country: "United States", searches: 100 }} />)
})

test('renders player name', () => {
    const doc = render(<Player {...{ name: "Alex Morgan", country: "United States", searches: 100 }} />)
    doc.getByText(/alex morgan/i)
})

test('renders player country', () => {
    const doc = render(<Player {...{ name: "Alex Morgan", country: "United States", searches: 100 }} />)
    doc.getByText(/country: united states/i)
})

test('renders player search count', () => {
    const doc = render(<Player {...{ name: "Alex Morgan", country: "United States", searches: 100 }} />)
    doc.getByText(/searches: \d+/i)
})