import React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react'
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('renders dark/light mode button', () => {
  const doc = render(<App />)
  doc.getByText(/(dark|light) mode/i)
});

test('renders player data', async () => {
  const doc = render(<App />)
  const players = await waitForElement(() => doc.getAllByTestId('name'))
  expect(players.length).toBeGreaterThan(10)
})