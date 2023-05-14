'use client';
import Button from '@/app/(site)/components/Buttons/Button';
import { useBusRouteStore } from '@/app/hooks/useBusRouteStore';

interface IBusRouteButtonProps {
  busRouteId: string;
  busRouteNm: string;
}

const BusRouteButton = (props: IBusRouteButtonProps) => {
  const { setBusRoute } = useBusRouteStore();
  const onClick = () => {
    console.log('BusRouteButton onClick');
    setBusRoute({
      busRouteId: props.busRouteId,
      busRouteNm: props.busRouteNm,
    });
  };
  return (
    <Button key={props.busRouteId} label={props.busRouteNm} small={true} onClick={onClick}></Button>
  );
};

export default BusRouteButton;
