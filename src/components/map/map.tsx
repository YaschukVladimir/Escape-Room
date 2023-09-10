import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, ZOOM} from '../../const/const';
import { useRef, useEffect, memo } from 'react';
import useMap from '../../hooks/use-map';
import { BookingInfo } from '../../types';


type MapProps = {
  bookingInfo: BookingInfo[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [30, 40],
//   iconAnchor: [20, 40]
// });

function Map({bookingInfo}: MapProps): React.JSX.Element {

  const questFirstPointLocation = bookingInfo[0].location.coords;
  const mapRef = useRef(null);
  const map = useMap(mapRef, bookingInfo[0].location.coords);


  useEffect(() => {

    const markers = layerGroup();
    if (map && questFirstPointLocation) {
      map.setView([questFirstPointLocation[0], questFirstPointLocation[1]], ZOOM);
      bookingInfo.forEach((point) => {
        const markerOptions = {
          title: point.location.address,
          clickable: true,
          icon: defaultCustomIcon
        };
        new Marker({
          lat: point.location.coords[0],
          lng: point.location.coords[1],
        }, markerOptions).addEventListener('click',(evt) => console.log(evt.target,'wtf'))
          .addTo(markers);
      });
      markers.addTo(map);
    }
    return (() => {
      markers.clearLayers();
    });
  }, [bookingInfo, map, questFirstPointLocation]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

const MapMemo = memo(Map);

export default MapMemo;
