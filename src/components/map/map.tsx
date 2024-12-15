import { Icon, layerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import cityType from '../../types/city-type';
import { PIN_MARKER_URL, PIN_MARKER_ACTIVE_URL } from '../../data/leaflet-data';
import OfferType from '../../types/offer-type';

type MapProps = {
  city: cityType;
  offers: OfferType[];
  activeOfferId: string | null;
}

function Map({city, offers, activeOfferId}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = new Icon({
    iconUrl: PIN_MARKER_URL,
    iconSize: [40, 40],
    anchor: [20, 40],
  });

  const iconActive = new Icon({
    iconUrl: PIN_MARKER_ACTIVE_URL,
    iconSize: [40, 40],
    anchor: [20, 40],
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

        return ():void => {
          map.removeLayer(markerLayer);
        };
      });
    }

  }, [map, offers, activeOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}/>
  );
}

export default Map;
