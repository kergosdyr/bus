import React from 'react';
import styled from 'styled-components';
import {Card, CardContent, Typography} from '@mui/material';

const StyledCard = styled(Card)`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const StyledSubtitle = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const MyMuiCard = ({title, subtitle, children, cardOnClick}: {
  title: string,
  subtitle: string,
  children: string,
  cardOnClick: Function
}) => {

  const onClickEventHandler = () => {
    cardOnClick();
  }

  return (
      <>
        <StyledCard onClick={onClickEventHandler}>
          <StyledCardContent>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            {children}
          </StyledCardContent>
        </StyledCard>
      </>
  );
};

export default MyMuiCard;
