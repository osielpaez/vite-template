import { render, screen } from '@test-utils';
import { UserNav } from './user-nav';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<UserNav />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
