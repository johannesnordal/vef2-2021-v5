import React, { useEffect, useState } from 'react';

import { News } from './../news/News.jsx';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  let json;

  useEffect(() => {
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
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn..</p>
    );
  }

  return (
    <section>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
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
