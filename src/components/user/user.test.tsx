import { render, screen } from '@test-utils';
import { User } from './user';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<User />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
