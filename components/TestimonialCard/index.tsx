import styles from './TestimonialCard.module.css';

function TestimonialCard() {
  return (
    <div className={styles.Card}>
      <img
        src="https://avatars.githubusercontent.com/u/63657280?v=4"
        alt="Anderson"
      />
      <div className={styles.Title}>
        <h4>
          Anderson Carneiro Sousa, 28 - <br /> Estudante
        </h4>
      </div>
      <div className={styles.Text}>
        <h5>
          Tive minha vida tranformada com os encontros, vocês não vão se
          arrepender de participar das reuniôes.
        </h5>
      </div>
    </div>
  );
}

export default TestimonialCard;
