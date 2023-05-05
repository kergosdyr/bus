import { create } from 'zustand';

interface BusStationModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    title: string;
    description: string;
}

const useBusStationModal = create<BusStationModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    title: "",
    description: "",
}));


export default useBusStationModal;
