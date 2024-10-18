import css from './Feedback.module.css';

function Feedback({ data: { good, neutral, bad }, totalFeedback }) {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <section className={css.container}>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positiveFeedback}%</div>
    </section>
  );
}

export default Feedback;
