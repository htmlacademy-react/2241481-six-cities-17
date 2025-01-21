import { Icon, layerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { PIN_MARKER_URL, PIN_MARKER_ACTIVE_URL } from '../../data/leaflet-data';
import { OfferPreviewType } from '../../types/offer-type';
import CityType from '../../types/city-type';

type MapProps = {
  city: CityType;
  offers: OfferPreviewType[];
  activeOfferId: string | null;
  className: string;
}

function Map({city, offers, activeOfferId, className}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = new Icon({
    iconUrl: PIN_MARKER_URL,
    iconSize: [28, 40],
    anchor: [14, 40],
  });

  const iconActive = new Icon({
    iconUrl: PIN_MARKER_ACTIVE_URL,
    iconSize: [28, 40],
    anchor: [14, 40],
  });

  useEffect(()=>{
    if (map){
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lng: offer.location.longitude,
          lat: offer.location.latitude,
        });

        marker
          .setIcon(offer.id === activeOfferId ? iconActive : icon)
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }

  }, [map, city, offers, activeOfferId]);

  return (
    <section className={className} ref={mapRef}/>
  );
}

export default Map;
