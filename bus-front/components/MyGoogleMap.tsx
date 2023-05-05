import React from 'react'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import nearbybusstop from "@/pages/api/nearbybusstop";


const containerStyle = {
  width: '100%',
  height: '100vh'
};

export interface IBusStop {
  gpsX: string;
  gpsY: string;
  stationNm : string;
  stationId : string;
  arsId : string;
}

interface IMyGoogleMapProps {
  setSeletedBusStopList: (busStopList: IBusStop[]) => void;
}

const MyGoogleMap = React.memo(
    (props: IMyGoogleMapProps) => {
      const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${googleApiKey}`
      })


      const initialCenter = {lat: 37.53790779023827, lng: 126.9993782043457};
      const [center, setCenter] = React.useState(initialCenter);
      const [map, setMap] = React.useState(null)
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

      const onClick = React.useCallback(function (map) {
        const busStopPos = {lat: map.latLng.lat(), lng: map.latLng.lng()};
        setCenter(busStopPos);
        nearbybusstop(busStopPos)
        .then((busStopApiResult) => {
          const busStopList = busStopApiResult.msgBody.itemList;
          if (!busStopList) return;
          props.setSeletedBusStopList(busStopList);
          setMapClickMakers(
              busStopList.filter((busStop : IBusStop) => busStop && busStop.gpsX && busStop.gpsY)
              .map((busStop : IBusStop) => {
                return {
                  lat: parseFloat(busStop.gpsY),
                  lng: parseFloat(busStop.gpsX)
                }
              }));
        });

      }, [])


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
                mapClickMakers.map((xy, idx) => {
                  return <MarkerF key={idx} position={xy}/>
                })
              };

            </>
          </GoogleMap>
      ) : <></>
    }
);

export default MyGoogleMap
