import styled from 'styled-components';
import tw from 'tailwind-styled-components';

interface ICardProps {
    key: string;
    title?: string;
    description?: string;
    onClick?: () => void;
}

const CardStyles = tw.div`
  bg-white
  shadow-lg
  rounded-lg
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

const BusStationCard = ({ title, description, onClick}: ICardProps ) => {
    return (
        <div>
            <CardStyles>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </CardStyles>
        </div>
    );
}

export default BusStationCard;