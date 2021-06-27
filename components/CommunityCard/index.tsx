import styles from './CommunityCard.module.css';

function CommunityCard() {
  return (
    <div className={styles.Card}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZfVBl4aTsF0MWeX0dTnjOyR9Y6N3eTjm4LzFOoiwi96ITkZNR-L3wwUDa8MJBh9a47A&usqp=CAU"
        alt="Empreendedorismo"
      />
      <div className={styles.Title}>
        <h4>Empreendedorismo</h4>
      </div>
      <div className={styles.Text}>
        <h5>
          A educação é uma ferramenta de liberdade se conecte com pessoas dessa
          área.
        </h5>
      </div>
      <a href="https://github.com/a-cs">
        <button type="button">Conhecer</button>
      </a>
    </div>
  );
}

export default CommunityCard;
