import { useParams } from 'react-router-dom';

import { News } from './../components/news/News.jsx';

export function NewsPage() {
  const { id } = useParams();

  return  (
    <News 
      id={id}
      link={`../`}
      linkName={`Til baka`}
    />
  );
}
