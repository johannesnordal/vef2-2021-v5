import s from './NotFound.module.scss';

export function NotFound() {
  return (
    <div>
      <h1 className={s.notFound}>404: Síða fannst ekki</h1>
      <a className={s.link} href="/">Til baka</a>
    </div>
  );
}
