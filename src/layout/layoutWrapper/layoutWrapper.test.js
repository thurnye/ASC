import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LayoutWrapper from './LayoutWrapper';

describe('<LayoutWrapper />', () => {
  test('it should mount', () => {
    render(<LayoutWrapper />);
    
    const layoutWrapper = screen.getByTestId('LayoutWrapper');

    expect(layoutWrapper).toBeInTheDocument();
  });
});