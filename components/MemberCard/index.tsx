/* eslint-disable import/no-unresolved */
import instagramLogo from '../../assets/images/icons/instagram_community.png';
import fbLogo from '../../assets/images/icons/fb_community.png';
import linkedinLogo from '../../assets/images/icons/linkedin_community.png';

import styles from './MemberCard.module.css';

interface Members {
  nome: string;
  idade: string;
  foto: string;
  resumo: string;
  instagram: string;
  linkedin: string;
  facebook: string;
}

function MemberCard({
  nome,
  idade,
  foto,
  resumo,
  instagram,
  linkedin,
  facebook,
}: Members) {
  return (
    <div className={styles.Card}>
      <img src={foto} alt={nome} />
      <div>
        <div className={styles.Title}>
          <h4>
            {nome}, {idade}
          </h4>
        </div>
        <div className={styles.Text}>
          <h5>{resumo}</h5>
        </div>
        <div className={styles.socials}>
          <a href={instagram} target="blank" className={styles.socialNetworks}>
            <img src={instagramLogo} alt="Linkedin" />
          </a>
          <a href={linkedin} target="blank" className={styles.socialNetworks}>
            <img src={linkedinLogo} alt="Linkedin" />
          </a>
          <a href={facebook} target="blank" className={styles.socialNetworks}>
            <img src={fbLogo} alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
