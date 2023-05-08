import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  width: 400px;
  text-align: center;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 45px 15px;
`;

export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border: 1px solid #c1c1c1;
  border-radius: 50%;
  padding-top: 10px;
  margin-bottom: 10px;
  box-shadow: inset 1px 0px 16px 0px rgba(51, 51, 51, 0.23);
`;

export const Name = styled.h2`
  color: #333;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  color: #306cce;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f3f6f9;
  border-top: 1px solid #e3e3e3;
`;

export const Item = styled.li`
  padding: 15px 0;
  :not(:last-child) {
    border-right: 1px solid #e3e3e3;
  }
`;

export const Label = styled.span`
  color: #7b7b7b;
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
`;
