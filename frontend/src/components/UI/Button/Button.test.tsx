import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button, LinkButton } from './Button';
import { BrowserRouter } from 'react-router-dom';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });
  
  it('can be disabled', () => {
    render(<Button disabled>Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeDisabled();
  });
  
  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('uses the correct button type when specified', () => {
    render(<Button type="submit">Submit</Button>);
    
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toHaveAttribute('type', 'submit');
  });
  
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('has no accessibility violations when disabled', async () => {
    const { container } = render(<Button disabled>Click me</Button>);
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('LinkButton', () => {
  it('renders as a link correctly', () => {
    render(
      <BrowserRouter>
        <LinkButton to="/test">Visit page</LinkButton>
      </BrowserRouter>
    );
    
    const link = screen.getByRole('link', { name: 'Visit page' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
  
  it('renders as an external link when specified', () => {
    render(<LinkButton to="https://example.com" external>Visit external site</LinkButton>);
    
    // Use a more flexible query that doesn't depend on the exact accessible name
    const link = screen.getByText('Visit external site').closest('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  
  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <BrowserRouter>
        <LinkButton to="/test" onClick={handleClick}>Visit page</LinkButton>
      </BrowserRouter>
    );
    
    const link = screen.getByRole('link', { name: 'Visit page' });
    fireEvent.click(link);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('has no accessibility violations for internal links', async () => {
    const { container } = render(
      <BrowserRouter>
        <LinkButton to="/test">Visit page</LinkButton>
      </BrowserRouter>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('has no accessibility violations for external links', async () => {
    const { container } = render(
      <LinkButton to="https://example.com" external>Visit external site</LinkButton>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('has proper WAI-ARIA attributes for better screen reader support', () => {
    // External links should indicate they open in a new window
    render(<LinkButton to="https://example.com" external>Visit external site</LinkButton>);
    
    // Use a more flexible query that doesn't depend on the exact accessible name
    const link = screen.getByText('Visit external site').closest('a');
    expect(link).toHaveAttribute('aria-label', 'Visit external site (opens in a new tab)');
  });
});
