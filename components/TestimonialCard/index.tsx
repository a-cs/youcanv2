import styles from './TestimonialCard.module.css';

interface Testimonials {
  nome: string;
  idade: string;
  foto: string;
  profissão: string;
  depoimento: string;
}

function TestimonialCard({
  nome,
  idade,
  foto,
  profissão,
  depoimento,
}: Testimonials) {
  return (
    <div className={styles.Card}>
      <img src={foto} alt={nome} />
      <div className={styles.Title}>
        <h4>
          {nome}, {idade} - <br /> {profissão}
        </h4>
      </div>
      <div className={styles.Text}>
        <h5>{depoimento}</h5>
      </div>
    </div>
  );
}

export default TestimonialCard;
