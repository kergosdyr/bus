import { create } from 'zustand';


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

const useNearByBusStation = create<INearByBusStationStore>((set) => ({
    busStations: []
}));

export default useNearByBusStation;