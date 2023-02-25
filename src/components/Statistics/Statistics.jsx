import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className={styles.statistics}>
      { title && <h2 className={styles.title}>{title}</h2> }

      <ul className={styles.statList}>
        {stats.map(({label, percentage, id}, i, array) => {
          return (
            <li className={styles.item}
                key={id}
                style={{
                  flexBasis: `calc(100% / ${array.length})`,
                  backgroundColor: `#${getRandomColor()}`,
                }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
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
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
};
