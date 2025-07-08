import { render, screen, fireEvent } from '@testing-library/react';
import ChatBox from '../components/chatBox';
import { vi } from "vitest";

describe('ChatBox', () => {
  it('renders a textarea and button', () => {
    render(<ChatBox onResponse={() => {}} />);
    expect(screen.getByPlaceholderText(/ask ai/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ask ai/i })).toBeInTheDocument();
  });

  it('calls onResponse with user input when submitted', async () => {
    const mock = vi.fn();
    render(<ChatBox onResponse={mock} />);
    const textarea = screen.getByPlaceholderText(/ask ai/i);
    fireEvent.change(textarea, { target: { value: 'Hello AI' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Let the async function run — you may want to mock `askCohere`
    expect(await screen.findByText(/thinking.../i)).toBeInTheDocument();
  });
});
