import { useEffect, useState } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Description from './Description/Description';
import Notification from './Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem('feedbackValues');
    return savedValues ? JSON.parse(savedValues) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    if (feedbackType) {
      setValues((prevValues) => ({
        ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1
      }));
    } else {
      const resetValues = { good: 0, neutral: 0, bad: 0 };
      setValues(resetValues);
    }
  };

  return (
    <main className="main">
      <Description />
      <Options updateFeedback={updateFeedback} isResetBtn={totalFeedback !== 0} />
      {totalFeedback > 0 ? (
        <Feedback data={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </main>
  );
}

export default App;
