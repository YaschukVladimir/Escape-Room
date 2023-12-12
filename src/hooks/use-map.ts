import {useEffect, useState, useRef, MutableRefObject} from 'react';
import leaflet, { Map } from 'leaflet';
import { ZOOM } from '../const/const';


function useMap(mapRef: MutableRefObject<HTMLDivElement | null>, coords: number[]): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && coords) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: coords[0],
          lng: coords[1],
        },
        zoom: ZOOM,
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
  }, [coords, mapRef]);

  return map;
}

export default useMap;
