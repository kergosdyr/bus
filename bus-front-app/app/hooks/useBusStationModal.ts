import { create } from 'zustand';
import {IBusStation} from "@/app/hooks/useNearByBusStationStore";

interface BusStationModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    title: string;
    busStation: IBusStation | null;
}

const useBusStationModal = create<BusStationModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    title: "",
    busStation: null,
}));


export default useBusStationModal;
