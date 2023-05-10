import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  width: 370px;
  text-align: center;
  align-items: center;
  overflow: hidden;
  padding: 10px 15px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: #f2f1f4;
  }
`;

export const Status = styled.li`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 26px;
  color: #333;
`;
