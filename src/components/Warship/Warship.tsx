import { Vehicle } from '../../types/types';
import styles from './Warship.module.scss';

export function Warship(props: { vehicle: Vehicle }) {
  const { vehicle } = props;
  const { title, type, nation, level, description } = vehicle;

  return (
    <div className={styles.warship}>
      <div className={styles.title}>{title}</div>
      <div className={styles.type}>{type.name}</div>
      <div className={styles.nation}>{nation.name}</div>
      <div className={styles.level}>{level}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
