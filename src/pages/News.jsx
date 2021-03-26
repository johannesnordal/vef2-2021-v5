import { News } from './../components/news/News.jsx';

export function NewsPage() {
  const id = window.location.pathname;

  return  (
    <News 
      id={id}
      link={`/`}
      linkName={`Til baka`}
    />
  );
}
