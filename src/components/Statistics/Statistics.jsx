import PropTypes from 'prop-types';
import styles from './Statistics';
import Notification from '../Notification/Notification';

 const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    {total ? (
      <ul className={styles.box}>
        <li className={styles.options}> Good:{good} </li>
        <li className={styles.options}> Neutral:{neutral} </li>
        <li className={styles.options}> Bad:{bad} </li>
        <li className={styles.options}> Total:{total} </li>
        <li className={styles.options}>
          Positive feedback: {positiveFeedbackPercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
export default Statistics;
