import { Welcome } from '../components/welcome/welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
