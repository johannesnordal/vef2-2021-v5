import React, { useEffect, useState } from 'react';

import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ id, link, linkName, limit = null }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      try {
        const result = await fetch(new URL(id, apiUrl));

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
  }, [id]);

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

  const news = (data && data.items) || [];

  return (
    <div className={s.news}>
      <h2>{data.title}</h2>
      <ul>
        {news
            .filter((item, index) => limit === null || index < limit)
            .map((item) => {
              return (
                <li>
                  <a className={`${s.links}`} href={item.link}>{item.title}</a>
                </li>
              )
            })}
      </ul>
      <a className={`${s.links} ${s.navlink}`} href={link}>{linkName}</a>
    </div>
  );
}
