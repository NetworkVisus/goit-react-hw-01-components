import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px -1px 22px 0px rgba(0, 0, 0, 0.432);
  margin: 0px auto;
  width: 550px;
`;
export const Title = styled.h2``;
export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  font-weight: 700;
  color: #fff;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundcolor || 'transparent'};
`;
export const ItemSubTitle = styled.span``;
export const Usage = styled.span`
  margin-top: 5px;
  font-size: 30px;
`;
