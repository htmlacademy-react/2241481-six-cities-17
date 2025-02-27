import 'leaflet/dist/leaflet.css';
import { useState, useRef, useEffect } from 'react';
import { MutableRefObject } from 'react';
import { Map } from 'leaflet';
import leaflet from 'leaflet';
import CityType from '../types/city-type';

type mapRefType = MutableRefObject<HTMLElement | null>

function useMap(mapRef: mapRefType, city: CityType) : Map|null{
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(()=>{
    if(mapRef.current !== null && !isRenderedRef.current){
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
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
  }, [mapRef, city, setMap]);

  useEffect(() => {
    if (map) {
      const centerOfMap = map.getCenter();
      if (centerOfMap.lat !== city.location.latitude || centerOfMap.lng !== city.location.longitude) {
        map.flyTo({
          lat: city.location.latitude,
          lng: city.location.longitude
        }, city.location.zoom, {
          duration: 2.0
        });
      }
    }
  }, [city, map]);

  return map;
}

export default useMap;
