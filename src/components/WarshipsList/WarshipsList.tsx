import { useVehicles } from '../../hooks/useVehicles';
import { Loader } from '../Loader/Loader';
import { Warship } from '../Warship/Warship';
import styles from './WarshipsList.module.scss';

export function WarshipsList() {
  const { data, loading, error } = useVehicles();

  console.log(data);

  return (
    <main className={styles.main}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.warshipsContainer}>
          <div className={styles.warshipsList}>
            {data ? (
              <>
                {data.vehicles.map((vehicle, idx) => (
                  <Warship key={`${vehicle.title}${idx}`} vehicle={vehicle} />
                ))}
              </>
            ) : error ? (
              <p>{error.message}</p>
            ) : (
              <p>Error!</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
