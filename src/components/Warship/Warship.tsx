import { Vehicle } from '../../types/types';
import styles from './Warship.module.scss';

export function Warship(props: { vehicle: Vehicle }) {
  const { vehicle } = props;
  const { title, type, nation, level, description, icons } = vehicle;

  return (
    <div className={styles.warship}>
      <div className={styles.title}>{title}</div>
      <img
        className={styles.vehicleImg}
        src={icons.large}
        alt="vehicle icon"
      ></img>
      <div className={styles.type}>
        <img
          className={styles.typeImg}
          src={type.icons.default}
          alt="type icon"
        />
        <p className={styles.typeName}>{type.name}</p>
      </div>
      <div className={styles.nation}>
        <img
          className={styles.nationImg}
          src={nation.icons.small}
          alt="nation icon"
        />
        <p className={styles.nationName}>{nation.name}</p>
      </div>
      <div className={styles.level}>{level}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
