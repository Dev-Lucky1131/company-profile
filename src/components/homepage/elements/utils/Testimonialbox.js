import styles from "./css/Box.module.css";
import Image from "next/image";
import Avatar from '../addons/testimonials/3.png';
import bird from '../addons/testimonials/Background Image.png';

function Testimonialbox({ name, position, context }) {
  return (
    <div className={styles.Container}>
      <div className={styles.NameContainer}>
        <div className={styles.img}>
          <Image src={Avatar}></Image>
        </div>
        <div className={styles.NameText}>
          <div className={styles.Name}>{name}</div>
          <div className={styles.Position}>{position}</div>
        </div>
        <div className={styles.Rating}>
          <div>
            <Image src={bird}></Image>
          </div>
        </div>
      </div>
      <div className={styles.Context}>{context}</div>
    </div>
  );
}

export default Testimonialbox;
