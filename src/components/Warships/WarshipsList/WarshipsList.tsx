import { useVehicles } from '../../../hooks/useVehicles';
import { Warship } from '../Warship/Warship';
import styles from './WarshipsList.module.scss';

export function WarshipsList() {
  const { filteredVehicles } = useVehicles();

  return (
    <div className={styles.warshipsContainer}>
      <div className={styles.warshipsList}>
        {filteredVehicles ? (
          <>
            {filteredVehicles.map((vehicle, idx) => (
              <Warship key={`${vehicle.title}${idx}`} vehicle={vehicle} />
            ))}
          </>
        ) : (
          <p>Error!</p>
        )}
      </div>
    </div>
  );
}
