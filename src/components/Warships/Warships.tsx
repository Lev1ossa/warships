import { useVehicles } from '../../hooks/useVehicles';
import { Loader } from '../Loader/Loader';
import { WarshipsList } from './WarshipsList/WarshipsList';
import styles from './Warships.module.scss';
import { WarshipsFilter } from './WarshipsFilter/WarshipsFilter';

export function Warships() {
  // const context = useContext(AppContext);
  // const { levelFilter, nationFilter, typeFilter } = context;
  const { loading, error } = useVehicles();
  return (
    <main className={styles.warships}>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          <WarshipsFilter />
          <WarshipsList />
        </>
      )}
    </main>
  );
}
