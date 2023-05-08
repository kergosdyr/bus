'use client';

import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapMarkers from '@/app/(site)/components/MapMarkers';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const MyGoogleMap = () => {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${googleApiKey}`,
  });

  const initialCenter = { lat: 37.53790779023827, lng: 126.9993782043457 };
  const [center, setCenter] = useState(initialCenter);
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const onClick = useCallback(function (map: any) {
    const busStopPos = { lat: map.latLng.lat(), lng: map.latLng.lng() };
    setCenter(busStopPos);
  }, []);

  // @ts-ignore
  return isLoaded ? (
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
  ) : (
    <></>
  );
};

export default MyGoogleMap;
