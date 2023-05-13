'use client';

import useSWR from 'swr';
import fetcher from '@/libs/fetcher';
import useNearByBusStation, { IBusStation } from '@/app/hooks/useNearByBusStationStore';
import { MarkerF } from '@react-google-maps/api';
import { useCallback, useEffect } from 'react';

interface IMapMarkersProps {
  center: {
    lat: number;
    lng: number;
  };
}

const MapMarkers = ({ center }: IMapMarkersProps) => {
  const { busStations } = useNearByBusStation(center);

  return (
    <>
      {busStations?.map((busStation: IBusStation) => {
        return (
          <MarkerF
            key={busStation.stationId}
            position={{
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
