
// TODO sækja Sass
import { Index } from './../../pages/Index.jsx';

export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div>
      <header>
        <h1>Rúv fréttir</h1>
        <main>
          {children}
        </main>
      </header>
      <footer>
        Fréttir frá <a href="https://www.ruv.is/">RÚV</a>
      </footer>
    </div>
  );
}
