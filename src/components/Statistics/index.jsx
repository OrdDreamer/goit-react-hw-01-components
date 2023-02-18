import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title = 'Upload stats', className }) => {
  const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className={`${styles.statistics} ${className || ''}`}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map((item, i, array) => {
          return (
            <li className={styles.item}
                key={item.key}
                style={{
                  flexBasis: `calc(100% / ${array.length})`,
                  backgroundColor: `#${getRandomColor()}`,
                }}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};
