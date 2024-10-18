import css from './Description.module.css';

function Description() {
  return (
    <section>
      <h1 className={css.title}>Sip Happens Café</h1>
      <div className={css.description}>
        Please leave your feedback about our service by selecting one of the options below.
      </div>
    </section>
  );
}

export default Description;
