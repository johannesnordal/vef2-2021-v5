import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NotFound } from './../../pages/not-found/NotFound';
import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

News.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  limit: PropTypes.number,
}

News.defaultProps = {
  limit: undefined,
}

export function News(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      try {
        const result = await fetch(new URL(props.id, apiUrl));

        if (result.status === 404) {
          setNotFound(true);
          return;
        }

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
  }, [props.id]);

  if (notFound) {
    return <NotFound />;
  }

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
            .filter((item, index) => props.limit === undefined || index < props.limit)
            .map((item) => {
              return (
                <li>
                  <a className={`${s.links}`} href={item.link}>{item.title}</a>
                </li>
              )
            })}
      </ul>
      <a className={`${s.links} ${s.navlink}`} href={props.link}>{props.linkName}</a>
    </div>
  );
}
