'use client';

import useNearByBusStation, { IBusStation } from '@/app/hooks/useNearByBusStation';
import GoogleMarker from '@/app/(site)/components/Markers/GoogleMarker';
import { Coordinates } from '@/app/(site)/components/MyGoogleMap';

interface IMapMarkersProps {
  center: Coordinates;
}

const MapMarkers = (props: IMapMarkersProps) => {
  const { busStations } = useNearByBusStation(props.center);

  return (
    <>
      {busStations?.map((busStation: IBusStation) => {
        return (
          <GoogleMarker
            id={busStation.stationId}
            coordinates={{
              lat: Number.parseFloat(busStation.gpsY),
              lng: Number.parseFloat(busStation.gpsX),
            }}
          />
        );
      })}
    </>
  );
};

export default MapMarkers;
