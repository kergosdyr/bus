import React from 'react'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import busstop from "@/pages/api/busstop";
import nearbybusstop from "@/pages/api/nearbybusstop";


const containerStyle = {
  width: '800px',
  height: '800px'
};


const google = React.memo(
function MyComponent() {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${googleApiKey}`
  })


  const initialCenter = {lat: 37.53790779023827, lng: 126.9993782043457};
  const [center, setCenter] = React.useState(initialCenter);
  const [map, setMap] = React.useState(null)
  const [xys, setXys] = React.useState([initialCenter]);
  const [mapClickMakers, setMapClickMakers] = React.useState([initialCenter]);

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
    nearbybusstop({lng: lng, lat: lat})
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


  const makerOnclick = () => {
    let promise = busstop({busStopName: '명동입구'});
    promise.then((busstopXy) => {
      console.log(busstopXy);
      const [realXy, realXy2, realXy3] = busstopXy.msgBody.itemList;
      setXys([{
        lat: parseFloat(realXy.tmY),
        lng: parseFloat(realXy.tmX)
      }, {
        lat: parseFloat(realXy2.tmY),
        lng: parseFloat(realXy2.tmX)
      }, {
        lat: parseFloat(realXy3.tmY),
        lng: parseFloat(realXy3.tmX)
      }]);
    });

  }




  return isLoaded ? (
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onClick}
      >
        <>

          {
            xys.map((xy, idx) => {
              console.log("xy -> ",idx,xy);
              return <MarkerF key={idx} position={xy} onClick={makerOnclick}/>
            })
          };
          {
            mapClickMakers.map((xy, idx) => {
              return <MarkerF key={idx} position={xy} onClick={makerOnclick}/>
            })
          };

        </>
      </GoogleMap>
  ) : <></>
}
);

export default google
