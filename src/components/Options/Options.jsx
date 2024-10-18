import css from './Options.module.css';

function Options({ updateFeedback, isResetBtn, reset }) {
  return (
    <section className={css.container}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {isResetBtn && <button onClick={() => updateFeedback()}>Reset</button>}
    </section>
  );
}

export default Options;
