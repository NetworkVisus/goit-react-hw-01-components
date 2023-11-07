import * as Styled from './Statistics.styled';
import { getRandomColor } from 'helpers/RandomColorGeneration';

export const Statistics = ({ title, stats }) => {
  return (
    <Styled.Section>
      {title && <Styled.Title>Upload stats</Styled.Title>}

      <Styled.List>
        {stats.map(el => (
          <Styled.Item key={el.id} backgroundcolor={getRandomColor()}>
            <Styled.ItemSubTitle>{el.label}</Styled.ItemSubTitle>
            <Styled.Usage>{el.percentage}%</Styled.Usage>
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};
