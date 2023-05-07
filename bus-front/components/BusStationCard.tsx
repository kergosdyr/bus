import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { useCallback, useEffect } from 'react';
import useBusStationModal from '@/hooks/useBusStationModal';
import useSWR from 'swr';

interface ICardProps {
  key: string;
  title?: string;
  arsId?: string;
}

const CardStyles = tw.div`
  bg-white
  rounded-lg
  drop-shadow-lg
  hover:drop-shadow-xl
  text-center
  overflow-hidden
  p-4
  md:p-6
  mb-4
  mx-2
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const BusStationCard = ({ title, arsId }: ICardProps) => {
  const busStationModal = useBusStationModal();

  const onCardClick = useCallback(() => {
    busStationModal.title = title || '';
    busStationModal.arsId = arsId || '';
    busStationModal.onOpen();
  }, [busStationModal.isOpen, title, arsId]);

  return (
    <CardStyles onClick={onCardClick}>
      <Title>{title}</Title>
      <Description>{arsId}</Description>
    </CardStyles>
  );
};

export default BusStationCard;
