import React from 'react';
import './Table.css';
import { Icon, InlineIcon } from '@iconify/react';
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
      <details>
        <summary>{location.title}</summary>
        <section className="tableDetails">
          {location.description ? (
            <td className="tableDescription">{location.description}</td>
          ) : null}
          <td className="tableLink">
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
          </td>
        </section>
      </details>
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
