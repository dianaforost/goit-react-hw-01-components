import propTypes from 'prop-types';
import css from './TransactionHistory.module.css'
export default function TransactionHistory({items}){
return <div className={css.container}>
<table className={css.transactionHistory}>
<thead className={css.titles}>
  <tr className={css.tableHeader}>
    <th className={css.label}>Type</th>
    <th className={css.label}>Amount</th>
    <th className={css.label}>Currency</th>
  </tr>
</thead>

<tbody>
    {items.map((item, index) => (<tr className={index % 2 === 0 ? css.normal : css.marked} key={item.id}>
        <td className={css.type}>{item.type}</td>
        <td className={css.amount}>{item.amount}</td>
        <td className={css.currency}>{item.currency}</td></tr>))}
</tbody>
</table>
</div> 
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
      }).isRequired,
    ).isRequired,
  };