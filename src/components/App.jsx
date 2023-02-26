import React, { Component } from 'react';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';



const options = ['good', 'bad', 'neutral']

export default class App extends Component {

  static propTypes = {}

    state = {
      good:0,
      neutral:0,
      bad:0,
    };
  
  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + bad + neutral;
    };
  
    countPositiveFeedbackPercentage = () => {
      let totalFeedback = this.countTotalFeedback();
      const { good } = this.state;
      return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    };
  
  handleFeedback = ({ target }) => {
    const feedback = target.dataset.feedback
    this.setState({[feedback]: this.state[feedback] + 1})
  };
  
    render() {
      const { good, neutral, bad } = this.state;
      const totalFeedbackCount = this.countTotalFeedback();
      const positiveFeedback = this.countPositiveFeedbackPercentage();
  
      return (
        <>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackCount}
              positiveFeedbackPercentage={positiveFeedback}
            />
          </Section>
        </>
      )
  };
    
  };
 
 