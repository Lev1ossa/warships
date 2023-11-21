import { useVehicles } from '../../hooks/useVehicles';
import { Warship } from '../Warship/Warship';
import styles from './WarshipsList.module.scss';

export function WarshipsList() {
  const { data, loading, error } = useVehicles();

  console.log(data);

  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;

  return (
    <main className={styles.main}>
      <div className={styles.warshipsContainer}>
        <div className={styles.warshipsList}>
          {data ? (
            <>
              {data.vehicles.map((vehicle, idx) => (
                <Warship key={`${vehicle.title}${idx}`} vehicle={vehicle} />
              ))}
            </>
          ) : (
            <p>Error</p>
          )}
        </div>
      </div>
    </main>
  );
}
