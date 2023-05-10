import { create } from 'zustand';
import { Coordinates } from '@/app/(site)/components/MyGoogleMap';
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

export interface INearByBusStationStore {
  busStations: IBusStation[];
  setNearByBusStations: (center: Coordinates) => void;
}

export interface IBusStation {
  stationNm: string;
  arsId: string;
  stationId: string;
  gpsX: string;
  gpsY: string;
}

const useNearByBusStation = create<INearByBusStationStore>((set) => ({
  busStations: [],
  setNearByBusStations: async (center) => {
    await fetcher(`/api/rest/busStop/getByPos/${encodeURIComponent(center.lng)}/${encodeURIComponent(center.lat)}`).then(
      (data) => {
        console.log(data);
        const fetchedBusStations = data?.msgBody?.itemList.map((item: any) => {
          return {
            stationId: item.stationId,
            stationNm: item.stationNm,
            arsId: item.arsId,
            gpsX: item.gpsX,
            gpsY: item.gpsY,
          };
        });
        set({ busStations: [...fetchedBusStations] });
      },
    );
  },
}));

    

export default useNearByBusStation;
