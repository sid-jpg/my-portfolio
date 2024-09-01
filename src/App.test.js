import { render, screen, act } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // Set default screen size
    window.innerWidth = 1024; // Desktop size
    window.dispatchEvent(new Event('resize'));
  });

  test('renders the application content on desktop', () => {
    render(<App />);

    // Check for elements visible on desktop
    const heroElement = screen.getByText(/Hi,/i);
    expect(heroElement).toBeInTheDocument();

    // Additional checks
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the application content on mobile', () => {
    act(() => {
      // Simulate mobile screen size
      window.innerWidth = 375; // Mobile size
      window.dispatchEvent(new Event('resize'));
    });

    render(<App />);

    // Check for elements visible on mobile
    const heroElement = screen.getByText(/Hi,/i);
    expect(heroElement).toBeInTheDocument();

    // Additional checks
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});
