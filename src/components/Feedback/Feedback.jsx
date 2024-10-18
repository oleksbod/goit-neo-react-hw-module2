function Feedback({ data: { good, neutral, bad }, totalFeedback, positiveFeedback }) {
  return (
    <section>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positiveFeedback}%</div>
    </section>
  );
}

export default Feedback;
