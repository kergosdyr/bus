import { create } from 'zustand';

interface BusStationModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    title: string;
    arsId: string;
}

const useBusStationModal = create<BusStationModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    title: "",
    arsId: "",
}));


export default useBusStationModal;
