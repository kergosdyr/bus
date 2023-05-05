import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { useCallback } from 'react';

interface ICardProps {
  key: string;
  title?: string;
  description?: string;
  onClick: (title: string, description: string) => void;
}

const CardStyles = tw.div`
  bg-white
  rounded-lg
  border-2
  border-gray-400
  hover:border-dotted
  text-center
  overflow-hidden
  p-4
  md:p-6
  mb-4
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

const BusStationCard = ({ title, description, onClick }: ICardProps) => {
  const cardOnClick = useCallback(() => {
    onClick(title ?? "", description ?? "");
  }, [title, description, onClick]);

  return (
    <CardStyles onClick={cardOnClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardStyles>
  );
};

export default BusStationCard;
