import React, { Component } from 'react';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';


const options = ['good', 'bad', 'neutral']

export default class App extends Component {

  static propTypes = {}

    state = {
      good:0,
      neutral:0,
      bad:0,
    };
  
  countTotalFeedback = () => {
      console.log("Inside cout feedback")
    console.log(this.state)
      const { good, neutral, bad } = this.state;
      return good + bad + neutral;
    };
  
    countPositiveFeedbackPercentage = () => {
      let totalFeedback = this.countTotalFeedback();
      const { good } = this.state;
      return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    };
  
  handleFeedback = ({ target }) => {
    console.log(target)
    console.log(target.dataset)

    if (target.dataset.feedback === 'bad') {
      this.state.bad += 1
    } else if (target.dataset.feedback === 'good') {
      this.state.good += 1
    } else {
      this.state.neutral += 1
    }
    const { Feedback } = this.state;
    this.setState(prevState => {
      return { [Feedback]: prevState[Feedback] + 1 };
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
  };
    
  };
 
 