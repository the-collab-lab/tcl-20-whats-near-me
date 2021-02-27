import React, { useContext } from 'react';
import './Table.css';
import getDistanceFromLatLonInKm from '../lib/haversineFunction';

import { Icon } from '@iconify/react';
import externalLinkOutline from '@iconify-icons/eva/external-link-outline';
import officeBuilding from '@iconify-icons/heroicons-outline/office-building';
import { LocationsContext } from '../context/LocationsContext';

const Row = ({ location }) => {
  const { coordinates } = useContext(LocationsContext);
  const reg = new RegExp('^[0-9]*$');
  let isValidPageid = reg.test(location.pageid);

  return (
    <tr className="tableListing">
      <td className="tableThumbnail">
        {location.thumbnail ? (
          <img src={location.thumbnail.source} alt="location thumbnail" />
        ) : (
          <Icon icon={officeBuilding} className="place-icon" />
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
              <strong>Distance from Center:</strong>{' '}
              {location.coordinates[0].dist
                ? (location.coordinates[0].dist / 1000).toFixed(1)
                : getDistanceFromLatLonInKm(
                    coordinates.lat,
                    coordinates.lng,
                    location.coordinates[0].lat,
                    location.coordinates[0].lon,
                  ).toFixed(1)}{' '}
              kms
            </p>
            <p className="tableLink">
              {isValidPageid ? (
                <a
                  href={`https://en.wikipedia.org/?curid=${location.pageid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="externalLink"
                  external="true"
                >
                  Learn More{' '}
                  <Icon icon={externalLinkOutline} className="link-icon" />
                </a>
              ) : null}
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
