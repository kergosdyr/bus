'use client';
import Button from '@/app/(site)/components/Buttons/Button';
import { useBusRouteStore } from '@/app/hooks/useBusRouteStore';
import React from "react";
import { toast } from 'react-hot-toast';

interface IBusRouteButtonProps {
  busRouteId: string;
  busRouteNm: string;
}

const BusRouteButton = (props: IBusRouteButtonProps) => {
  const { setBusRoute } = useBusRouteStore();
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    toast.success(`버스 노선 ${props.busRouteNm}을 선택하였습니다.`);
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
