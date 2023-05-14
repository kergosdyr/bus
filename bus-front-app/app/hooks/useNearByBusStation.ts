import { Coordinates } from '@/app/(site)/components/MyGoogleMap';
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

export interface INearByBusStationStore {
  busStations: IBusStation[];
}

export interface IBusStation {
  stationNm: string;
  arsId: string;
  stationId: string;
  gpsX: string;
  gpsY: string;
}

const useNearByBusStation = (center: Coordinates) => {
  const { data, error } = useSWR(
    center && center.lat && center.lng
      ? `/api/rest/busStop/getByPos/${encodeURIComponent(center.lng)}/${encodeURIComponent(
          center.lat
        )}`
      : null,
    fetcher
  );
  const fetchedBusStations: IBusStation[] = data?.msgBody?.itemList?.map((item: any) => {
    return {
      stationId: item.stationId,
      stationNm: item.stationNm,
      arsId: item.arsId,
      gpsX: item.gpsX,
      gpsY: item.gpsY,
    };
  });
  return {
    busStations: fetchedBusStations,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNearByBusStation;
