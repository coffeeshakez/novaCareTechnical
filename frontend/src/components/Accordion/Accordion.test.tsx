import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Accordion } from './Accordion';

expect.extend(toHaveNoViolations);

const mockItems = [
  {
    id: '1',
    question: 'question 1',
    answer: 'answer 1'
  },
  {
    id: '2',
    question: 'question 2',
    answer: 'answer 2'
  }
];

describe('Accordion', () => {
  it('renders accordion items correctly', () => {
    render(<Accordion items={mockItems} />);
    
    expect(screen.getByText('question 1')).toBeInTheDocument();
    expect(screen.getByText('question 2')).toBeInTheDocument();
  });

  it('toggles content visibility when clicked', () => {
    render(<Accordion items={mockItems} />);
    
    const firstSummary = screen.getByText('question 1').closest('summary');
    const secondSummary = screen.getByText('question 2').closest('summary');
    
    const firstDetails = firstSummary?.closest('details');
    const secondDetails = secondSummary?.closest('details');
    expect(firstDetails).not.toHaveAttribute('open');
    expect(secondDetails).not.toHaveAttribute('open');
    
    fireEvent.click(firstSummary!);
    
    expect(firstDetails).toHaveAttribute('open');
    expect(secondDetails).not.toHaveAttribute('open');
    
    
    const firstItemContent = screen.getByText(/answer 1/);
    expect(firstItemContent).toBeVisible();
    
    fireEvent.click(firstSummary!);
    expect(firstDetails).not.toHaveAttribute('open');
  });

  it('renders null when no items are provided', () => {
    const { container } = render(<Accordion items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Accordion items={mockItems} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('uses semantic HTML5 elements', () => {
    render(<Accordion items={mockItems} />);
    
    const details = document.querySelectorAll('details');
    const summaries = document.querySelectorAll('summary');
    
    expect(details.length).toBe(2);
    expect(summaries.length).toBe(2);
    
    Array.from(details).forEach(detail => {
      expect(detail).toHaveAttribute('id');
    });
  });

  it('can be controlled with keyboard', () => {
    render(<Accordion items={mockItems} />);
    
    const firstSummary = screen.getByText('question 1').closest('summary');
    const firstDetails = firstSummary?.closest('details');
    
    firstSummary?.focus();
    expect(document.activeElement).toBe(firstSummary);
    
    // Enter key
    fireEvent.keyDown(firstSummary!, { key: 'Enter' });
    fireEvent.click(firstSummary!);
    expect(firstDetails).toHaveAttribute('open');

    // Close
    fireEvent.keyDown(firstSummary!, { key: 'Enter' });
    fireEvent.click(firstSummary!);
    expect(firstDetails).not.toHaveAttribute('open');
    
    // Space key
    fireEvent.keyDown(firstSummary!, { key: ' ' });
    fireEvent.click(firstSummary!);
    expect(firstDetails).toHaveAttribute('open');
  });
});
