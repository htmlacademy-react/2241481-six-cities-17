import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import { DEFAULT_CITY } from '../../mocks/default-city';

function Map(): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_CITY);

  return (
    <section className="cities__map map" ref={mapRef}/>
  );
}

export default Map;
