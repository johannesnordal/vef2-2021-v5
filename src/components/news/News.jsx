import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ id, link = '', linkName, limit = null }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const url = new URL(id, apiUrl);

  let json;

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(url);

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
  }, []);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn..</p>
    );
  }

  const news = (data && data.items) || [];

  return (
    <div>
      <h2>{data.title}</h2>
      <ul>
        {news
            .filter((item, index) => limit === null || index < limit)
            .map((item) => <li><a href={item.link}>{item.title}</a></li>)}
      </ul>
      <a href={link}>{linkName}</a>
    </div>
  );
}
