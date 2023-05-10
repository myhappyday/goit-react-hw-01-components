import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  border-spacing: 0;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

export const Thead = styled.thead`
  color: #fff;
  background-color: #715be4;
  text-transform: uppercase;
`;

export const Th = styled.th`
  border: 1px solid #e3e3e3;
  padding: 10px;
`;

export const Tr = styled.tr`
  :nth-child(2n) {
    background-color: #f2f1f4;
  }
  :hover,
  :focus {
    background-color: #625df599;
  }
`;

export const Td = styled.td`
  text-transform: capitalize;
  color: #7b7b7b;
  border: 1px solid #e3e3e3;
  padding: 10px;
`;
