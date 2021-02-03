import React from 'react';
import './Table.css';
import { Icon } from '@iconify/react';
import externalLinkOutline from '@iconify-icons/eva/external-link-outline';

const Row = ({ location }) => {
  return (
    <tr className="tableListing">
      <td className="tableThumbnail">
        {location.thumbnail ? (
          <img src={location.thumbnail.source} alt="location thumbnail" />
        ) : (
          ''
        )}
      </td>
      <td>
        <details>
          <summary>{location.title}</summary>
          <section className="tableDetails">
            {location.description ? (
              <p className="tableDescription">{location.description}</p>
            ) : null}
            <p className="tableDistance">
              Distance from Center:{' '}
              {(location.coordinates[0].dist / 1000).toFixed(1)} kms
            </p>
            <p className="tableLink">
              {location.pageid ? (
                <a
                  href={`https://en.wikipedia.org/?curid=${location.pageid}`}
                  target="_blank"
                  external="true"
                  rel="noopener noreferrer"
                  className="externalLink"
                >
                  Learn More <Icon icon={externalLinkOutline} />
                </a>
              ) : (
                ''
              )}
            </p>
          </section>
        </details>
      </td>
    </tr>
  );
};

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        {data &&
          data.map((location) => {
            return <Row key={location.pageid} location={location} />;
          })}
      </tbody>
    </table>
  );
};

export default Table;
