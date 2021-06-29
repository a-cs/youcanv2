import styles from './EventCard.module.css';

interface Events {
  nome: string;
  descricao: string;
  link: string;
}

function EventCard({ nome, descricao, link }: Events) {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>
        <h4>{nome}</h4>
      </div>
      <div className={styles.Text}>
        <h5>{descricao}</h5>
      </div>

      <a href={link}>
        <button type="button">Inscreva-se</button>
      </a>
    </div>
  );
}

export default EventCard;
