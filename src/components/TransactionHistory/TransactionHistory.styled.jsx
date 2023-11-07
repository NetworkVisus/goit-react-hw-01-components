import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;
  font-size: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: -1px -1px 22px 0px rgba(0, 0, 0, 0.432);
  font-weight: 700;
`;
export const TableTitle = styled.thead`
  background-color: #34a1e9;
  color: #fff;
  height: 50px;
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  text-align: center;
  &:nth-of-type(even) {
    background-color: #0000007e;
    color: #fff;
  }
`;
