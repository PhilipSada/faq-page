import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from './App';



const renderAppAndExpectAccordionItems = async (expectedCount:number) => {
  render(<App />);
  const accordionItems = await waitFor(() => screen.getAllByTestId(/^accordion-item-/));
  expect(accordionItems).toHaveLength(expectedCount);
};

test('renders App component with 10 entries initially', async () => {
  await renderAppAndExpectAccordionItems(10);
});

test('loads 10 more entries on Load More button click', async () => {
  await renderAppAndExpectAccordionItems(10);

  // Trigger the Load More button click
  await act(async () => {
    const loadMoreButton = screen.getByTestId('load-more-button');
    fireEvent.click(loadMoreButton);
  });

  // Wait for the new accordion items to appear
  await waitFor(() => {
    const newAccordionItems = screen.getAllByTestId(/^accordion-item-/);
    expect(newAccordionItems).toHaveLength(20);
  });
});
