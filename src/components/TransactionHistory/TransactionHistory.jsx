import * as Styled from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Styled.Table>
      <Styled.TableTitle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Styled.TableTitle>

      <Styled.TableBody>
        {items.map(el => (
          <Styled.TableRow key={el.id}>
            <td>{el.type.charAt(0).toUpperCase() + el.type.slice(1)}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </Styled.TableRow>
        ))}
      </Styled.TableBody>
    </Styled.Table>
  );
};
