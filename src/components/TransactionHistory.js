import propTypes from 'prop-types';
export default function TransactionHistory({items}){
return <table className="transaction-history">
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
    {items.map(item => (<tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td></tr>))}
</tbody>
</table>
}
TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.oneOfType([
          propTypes.string,
          propTypes.number,
        ]).isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
      })
    ).isRequired,
  };