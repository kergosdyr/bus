'use client';
import { MarkerF } from '@react-google-maps/api';
import { Coordinates } from '@/app/(site)/components/MyGoogleMap';

interface IMarkersProps {
  id: string;
  coordinates: Coordinates;
  iconUrl?: string;
}

const GoogleMarker = (markerProps: IMarkersProps) => {
  return (
    <MarkerF
      key={markerProps.id}
      position={{ lat: markerProps.coordinates.lat, lng: markerProps.coordinates.lng }}
      icon={markerProps.iconUrl ? { url: markerProps.iconUrl } : undefined}
    />
  );
};

export default GoogleMarker;
