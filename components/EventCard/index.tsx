import styles from './EventCard.module.css';

function EventCard() {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>
        <h4>OPEN INOVATION</h4>
      </div>
      <div className={styles.Text}>
        <h5>
          Quem mandar sua pergunta ou pedir ajuda para especialistas? Participe!
        </h5>
      </div>
      <button type="button">Inscreva-se</button>
    </div>
  );
}

export default EventCard;
