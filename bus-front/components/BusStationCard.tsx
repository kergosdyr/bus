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
    cursor-pointer
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

  const fetcher = (arsId: string) => {
    return fetch(`/api/rest/stationinfo/getRouteByStation/${encodeURIComponent(arsId || '')}`).then(
      (res) => res.json()
    );
  };

  const { data } = useSWR(busStationModal.arsId ?? '', fetcher);

  return (
    <CardStyles onClick={onCardClick}>
      <Title>{title}</Title>
      <Description>{arsId}</Description>
      <div className={'mt-2 flex flex-col gap-2 justify-center items-center'}>
        {data?.msgBody?.itemList?.map((route: any) => (
          <button
              key={route.busRouteId}
            className={'border-2 border-sky-500 bg-white text-sky-500 hover:bg-sky-500 hover:text-white font-bold py-2 px-4 rounded-full'}
          >
            {route.busRouteNm}
          </button>
        ))}
      </div>
    </CardStyles>
  );
};

export default BusStationCard;
