import styled from '@emotion/styled';
import getRandomHexColor from '../../utils/getRandomHex';

export const WrapperStats = styled.section`
  border-radius: 10px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  width: 400px;
  text-align: center;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  padding: 20px;
  color: #333;
  border-bottom: 1px solid #c1c1c1;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.li`
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  padding: 10px 0;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 600;
  font-size: 30px;
`;
