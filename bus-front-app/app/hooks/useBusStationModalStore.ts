import { create } from 'zustand';
import { IBusStation } from '@/app/hooks/useNearByBusStation';

interface BusStationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  title: string;
  busStation: IBusStation | null;
}

const useBusStationModalStore = create<BusStationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  title: '',
  busStation: null,
}));

export default useBusStationModalStore;
