'use client';

import { memo, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapMarkers from '@/app/(site)/components/MapMarkers';
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';
import useNearByBusStation from '@/app/hooks/useNearByBusStationStore';
import { useNowCenter } from '@/app/hooks/useNowCenter';

export interface Coordinates {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const MyGoogleMap = memo(() => {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${googleApiKey}`,
  });

  const initialCenter: Coordinates = { lat: 37.53790779023827, lng: 126.9993782043457 };
  const [center, setCenter] = useState(initialCenter);
  const [map, setMap] = useState(null);
  const { setNowCenter } = useNowCenter();

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const onClick = useCallback(function (map: any) {
    const center: Coordinates = { lat: map.latLng.lat(), lng: map.latLng.lng() };
    setCenter(center);
    setNowCenter(center);
  }, []);

  // @ts-ignore
  return isLoaded ? (
    <div className="flex h-full w-full flex-col">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
      >
        <MapMarkers center={center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
});

export default MyGoogleMap;
