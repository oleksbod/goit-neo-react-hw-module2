import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Description from './Description/Description';
import Notification from './Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem('feedbackValues');
    return savedValues ? JSON.parse(savedValues) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = (feedbackType) => {
    if (feedbackType) {
      setValues((prevValues) => {
        const updatedValues = {
          ...prevValues,
          [feedbackType]: prevValues[feedbackType] + 1
        };

        save(updatedValues);

        return updatedValues;
      });
    } else {
      const resetValues = { good: 0, neutral: 0, bad: 0 };
      save(resetValues);
      setValues(resetValues);
    }
  };

  const save = (updatedValues) => {
    localStorage.setItem('feedbackValues', JSON.stringify(updatedValues));
  };

  return (
    <main className="main">
      <Description />
      <Options updateFeedback={updateFeedback} isResetBtn={totalFeedback !== 0} />
      {totalFeedback > 0 ? (
        <Feedback data={values} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </main>
  );
}

export default App;
