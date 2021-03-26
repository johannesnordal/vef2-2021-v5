import React, { useEffect, useState } from 'react';

import { News } from './../news/News.jsx';
import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);


  useEffect(() => {
    
    let json;

    async function fetchData() {
      try {
        const result = await fetch(apiUrl);

        if (!result.ok) {
          throw new Error('Result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki náð í gögn');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  },[]);

  if (error) {
    return (
      <div className={s.error}>
        <p>Villa kom upp: {error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={s.loading}>
        <p>Sæki gögn..</p>
      </div>
    );
  }

  return (
    <section>
      <div className={s.news}>
        {data.map((item, index) => {
          return (
            <div key={index} className={s.card}>
              <News
                id={item.id}
                limit={5}
                link={item.id}
                linkName={`Allar fréttir`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
