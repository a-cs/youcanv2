import Link from 'next/link';

import styles from './CommunityCard.module.css';

interface Communities {
  nome: string;
  icone: string;
  resumo: string;
}

function CommunityCard({ nome, icone, resumo }: Communities) {
  return (
    <div className={styles.Card}>
      <img src={icone} alt={nome} />
      <div className={styles.Title}>
        <h4>{nome}</h4>
      </div>
      <div className={styles.Text}>
        <h5>{resumo}</h5>
      </div>
      <Link href={`/community/${nome}`}>
        <button type="button">Conhecer</button>
      </Link>
    </div>
  );
}

export default CommunityCard;
