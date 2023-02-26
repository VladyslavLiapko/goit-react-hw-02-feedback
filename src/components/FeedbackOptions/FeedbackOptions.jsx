import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.scss'

 const FeedbackOptions = ({options,onLeaveFeedback}) => (
    <div className={styles.options}>
    {options.map(option => (
      <button
        className={styles.button}
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>);


FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
