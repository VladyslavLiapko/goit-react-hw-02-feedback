import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

const options = ['good', 'bad', 'neutral'];


export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
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
      const { feedback } = target.dataset;
      this.setState(prevState => {
        return { [feedback]: prevState[feedback] + 1 };
      });
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
    }
    
  }
 
 