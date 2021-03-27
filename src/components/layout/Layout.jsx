import s from './Layout.module.scss';

export function Layout({ children }) {
  return (
    <div>
      <header>
        <h1 className={s.header}>Rúv fréttir</h1>
        <main>
          {children}
        </main>
      </header>
      <footer className={s.footer}>
        <hr className={s.line}></hr>
        <p className={s.link}>Fréttir frá <a href="https://www.ruv.is/">RÚV</a></p>
      </footer>
    </div>
  );
}
