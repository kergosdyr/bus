'use client';
import useBusRoutes, { BusRoute } from '@/app/hooks/useBusRoutes';
import BusRouteButton from '@/app/(site)/components/Buttons/BusRouteButton';

interface IBusRouteButtonProps {
  arsId: string;
}

const BusRouteButtonWrapper = (props: IBusRouteButtonProps) => {
  const { busRoutes } = useBusRoutes(props.arsId);

  return (
    <div className={'flex flex-col justify-between gap-3'}>
      {busRoutes?.map((route: BusRoute) => (
        <BusRouteButton
          key={route.busRouteId}
          busRouteId={route.busRouteId}
          busRouteNm={route.busRouteNm}
        ></BusRouteButton>
      ))}
    </div>
  );
};

export default BusRouteButtonWrapper;
