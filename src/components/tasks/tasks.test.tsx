import { render, screen } from '@test-utils';
import { TasksNav } from './tasks';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<TasksNav />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
