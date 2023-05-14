import { create } from 'zustand';

export interface BusRoute {
  busRouteId: string;
  busRouteNm: string;
}
interface BusRouteStore {
  busRoute: BusRoute;
  setBusRoute: (busRoute: BusRoute) => void;
}

export const useBusRouteStore = create<BusRouteStore>((set) => ({
  busRoute: {
    busRouteId: '',
    busRouteNm: '',
  },
  setBusRoute: (busRoute: BusRoute) => set({ busRoute }),
}));
