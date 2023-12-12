import {Icon, LeafletMouseEvent, Marker, MarkerOptions, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT, ZOOM} from '../../const/const';
import { useRef, useEffect, memo } from 'react';
import useMap from '../../hooks/use-map';
import { BookingInfo } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { setFormPlaceId, setSelectedQuestPlace } from '../../store/data-process/data-process';
import { getSelectedQuestPlace } from '../../store/data-process/selector';

type CustomMarkerOptions = {
  title: string;
  clickable: boolean;
  icon: Icon;
  id: string;
}

type LeafletBaloonTarget = {
  options: MarkerOptions;
}


type MapProps = {
  bookingInfo: BookingInfo[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

function Map({bookingInfo}: MapProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  const selectedQuestPlace = useAppSelector(getSelectedQuestPlace);

  const questFirstPointLocation = selectedQuestPlace.location.coords;
  const mapRef = useRef(null);
  const map = useMap(mapRef, questFirstPointLocation);

  function handleBaloonClick(placeId: string) {
    const selectedPlace = bookingInfo.find((place) => place.id === placeId) || bookingInfo[0];
    dispatch(setSelectedQuestPlace(selectedPlace));
    dispatch(setFormPlaceId(placeId));
  }


  useEffect(() => {

    const markers = layerGroup();
    if (map && questFirstPointLocation) {
      map.setView([questFirstPointLocation[0], questFirstPointLocation[1]], ZOOM);
      bookingInfo.forEach((point) => {
        const markerOptions: CustomMarkerOptions = {
          title: point.location.address,
          clickable: true,
          icon: selectedQuestPlace.id === point.id ? currentCustomIcon : defaultCustomIcon,
          id: point.id
        };
        new Marker({
          lat: point.location.coords[0],
          lng: point.location.coords[1],
        }, markerOptions).addEventListener('click',(evt: LeafletMouseEvent) => {
          handleBaloonClick(((evt.target as LeafletBaloonTarget).options as CustomMarkerOptions).id);
        })
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
