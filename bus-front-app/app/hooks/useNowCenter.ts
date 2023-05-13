import { create } from 'zustand';
import { Coordinates } from '@/app/(site)/components/MyGoogleMap';
import { IBusStation } from '@/app/hooks/useNearByBusStationStore';

interface NowCenterStore {
  nowCenter: Coordinates;
  setNowCenter: (nowCenter: Coordinates) => void;
  resetNowCenter: () => void;
}
export const useNowCenter = create<NowCenterStore>((set) => ({
  nowCenter: { lat: 0, lng: 0 },
  setNowCenter: (nowCenter: Coordinates) => set({ nowCenter }),
  resetNowCenter: () => set({ nowCenter: { lat: 0, lng: 0 } }),
}));
