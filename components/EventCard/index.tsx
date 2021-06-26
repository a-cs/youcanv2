import React from 'react';

import styles from './EventCard.module.css';

function EventCard() {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>
        <h3>OPEN INOVATION</h3>
      </div>
      <div className={styles.Text}>
        <h4>
          Quem mandar sua pergunta ou pedir ajuda para especialistas? Participe!
        </h4>
      </div>
      <button type="button">Inscreva-se</button>
    </div>
  );
}

export default EventCard;
