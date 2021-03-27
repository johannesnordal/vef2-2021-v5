import s from './NotFound.module.scss';

export function NotFound() {
  return (
    <div>
      <h2 className={s.notFound}>404: Síða fannst ekki</h2>
    </div>
  );
}
