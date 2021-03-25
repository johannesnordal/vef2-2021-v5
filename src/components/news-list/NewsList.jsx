import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

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
  });

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
                title={item.title}
                id={item.id}
                allNewsUrl={`\${item.id}`}
                limit={5}
              />
            </div>
          );
        })};
      </div>
    </section>
  );
}
