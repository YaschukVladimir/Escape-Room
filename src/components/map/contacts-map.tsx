import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, ZOOM} from '../../const/const';
import { useRef, useEffect, memo } from 'react';
import useMap from '../../hooks/use-map';
// import { BookingInfo } from '../../types';
// import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
// import { setFormPlaceId, setSelectedQuestPlace } from '../../store/data-process/data-process';
// import { getSelectedQuestPlace } from '../../store/data-process/selector';

type CustomMarkerOptions = {
  title: string;
  clickable: boolean;
  icon: Icon;
  id: string;
}

// type LeafletBaloonTarget = {
//   options: MarkerOptions;
// }


// type MapProps = {
//   bookingInfo: BookingInfo[];
// };

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

function ContactsMap(): React.JSX.Element {

  const contactsPointLocation = [59.96848, 30.31655];
  const mapRef = useRef(null);
  const map = useMap(mapRef, contactsPointLocation);

  // function handleBaloonClick(placeId: string) {
  //   const selectedPlace = bookingInfo.find((place) => place.id === placeId) || bookingInfo[0];
  //   dispatch(setSelectedQuestPlace(selectedPlace));
  //   dispatch(setFormPlaceId(placeId));
  // }


  useEffect(() => {

    const markers = layerGroup();
    if (map && contactsPointLocation) {
      map.setView([contactsPointLocation[0], contactsPointLocation[1]], ZOOM);
      const markerOptions: CustomMarkerOptions = {
        title: 'набережная реки Карповки, 5, литера П, Санкт-Петербург.',
        clickable: true,
        icon: defaultCustomIcon,
        id: '111'};
      new Marker({
        lat: contactsPointLocation[0],
        lng: contactsPointLocation[1],
      }, markerOptions).addTo(markers);
      markers.addTo(map);
    }
    return (() => {
      markers.clearLayers();
    });
  }, [map]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

const ContactsMapMemo = memo(ContactsMap);

export default ContactsMapMemo;
