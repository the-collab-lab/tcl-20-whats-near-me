import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';

const location = {
  lat: 45,
  lng: -123.456,
};

const zoomLevel = 8;

export default function Map({ locations }) {
  // const renderMarkers = (map, maps) => {
  //   let marker = new maps.Marker({
  //     position: (45, -123.456)
  //   })
  // }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, locations)}
        yesIWantToUseGoogleMapApiInternals
      >
        {locations &&
          locations.map((locationData) => {
            console.log(locationData.thumbnail);
            return (
              <LocationPin
                img={
                  locationData.thumbnail == undefined
                    ? null
                    : locationData.thumbnail.source
                }
                text={locationData.title}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
