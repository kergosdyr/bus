import React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px'
};


const google = React.memo(
function MyComponent() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "apikey"
    })

  const [map, setMap] = React.useState(null)

  const [xys, setXys] = React.useState([{lat: 37.53790779023827, lng: 126.9993782043457}]);
  const [mapClickMakers, setMapClickMakers] = React.useState([{lat: 37.53790779023827, lng: 126.9993782043457}]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onClick = React.useCallback(function callback(map) {
    const lat = map.latLng.lat();
    const lng = map.latLng.lng();
    setCenter({lat: lat ,lng: lng});
    console.log("lat, lng -> {},{}", lat, lng);
    nearbybusstop({tmX: lng, tmY: lat})
    .then((busstopXy) => {
      console.log(busstopXy);
      const itemList = busstopXy.msgBody.itemList;
      if(!itemList) return;
      setMapClickMakers(itemList
      .filter((item) => item && item.gpsX && item.gpsY)
      .map((item) => {
        return {
          lat: parseFloat(item.gpsY),
          lng: parseFloat(item.gpsX)
        }
      }));
    });

  }, [])


  return isLoaded ? (
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onClick}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
