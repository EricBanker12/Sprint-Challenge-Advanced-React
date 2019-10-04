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

// test('renders player data', () => {
//   const doc = render(<App />)
//   const [...players] = await waitForElement(() => {
//     return [...doc.getAllByTestId('name')]
//   }, {container: doc})
// })