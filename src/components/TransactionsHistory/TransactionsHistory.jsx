import styles from './transactionsHistory.module.css';
import PropTypes from 'prop-types';

const TransactionsHistory = ({ items = [] }) => {

  return (
    <div className={styles.transactionHistoryContainer}>
      <table className={styles.transactionHistory}>
        <thead>
        <tr>
          <th className={styles.alignStart}>Type</th>
          <th className={styles.alignCenter}>Amount</th>
          <th className={styles.alignEnd}>Currency</th>
        </tr>
        </thead>
        <tbody>
        {
          items.map(({type, amount, currency, id}) => {
            return (
              <tr key={id}>
                <td className={styles.alignStart}>{type}</td>
                <td className={styles.alignCenter}>{amount}</td>
                <td className={styles.alignEnd}>{currency}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsHistory;

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
