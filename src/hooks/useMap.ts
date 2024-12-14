import 'leaflet/dist/leaflet.css';
import { useState, useRef, useEffect } from 'react';
import { MutableRefObject } from 'react';
import { Map } from 'leaflet';
import leaflet from 'leaflet';
import cityType from '../types/city-type';

type mapRefType = MutableRefObject<HTMLElement | null>

function useMap(mapRef: mapRefType, city: cityType) : Map|null{
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(()=>{
    if(mapRef.current !== null && !isRenderedRef.current){
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
