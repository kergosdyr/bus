import useBusStationModal from '@/hooks/useBusStationModal';
import Modal from '@/components/Modals/Modal';

interface BusStationSpecModalProps {
  title: string;
  description: string;
}

export const BusStationSpecModal = () => {
  const busStationModal = useBusStationModal();

  return (
    <Modal
      isOpen={busStationModal.isOpen}
      actionLabel={'OK'}
      onSubmit={busStationModal.onClose}
      onClose={busStationModal.onClose}
      title={busStationModal.title}
      body={
        <div className="flex flex-col gap-4">
          <p>{busStationModal.description}</p>
        </div>
      }
    />
  );
};
