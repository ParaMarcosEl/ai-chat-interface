import { render, screen, fireEvent } from '@testing-library/react';
import ChatHistory from '../components/chatHistory';
import { vi } from 'vitest';

describe('ChatHistory', () => {
  const history = [
    { user: 'What is React?', ai: 'A library for building UIs.' },
    { user: 'What is JS?', ai: 'A programming language.' },
  ];

  it('renders chat history entries', () => {
    render(<ChatHistory history={history} onClear={() => {}} />);
    
    expect(screen.getByText(/Chat History/i)).toBeInTheDocument();
    expect(screen.getAllByText(/You:/i).length).toBe(2);
    expect(screen.getAllByText(/AI:/i).length).toBe(2);
    expect(screen.getByText(/A library for building UIs/i)).toBeInTheDocument();
  });

  it('calls onClear when the Clear button is clicked', () => {
    const onClear = vi.fn();
    render(<ChatHistory history={history} onClear={onClear} />);

    const clearButton = screen.getByRole('button', { name: /clear/i });
    fireEvent.click(clearButton);

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
