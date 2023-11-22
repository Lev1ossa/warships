import { useContext } from 'react';
import { useVehicles } from '../../../hooks/useVehicles';
import { Warship } from '../Warship/Warship';
import styles from './WarshipsList.module.scss';
import { AppContext } from '../../App/Context/AppContext';
import { WarshipsPagination } from '../WarshipsPagination/WarshipsPagination';

export function WarshipsList() {
  const { filteredVehiclesSlice } = useVehicles();
  const context = useContext(AppContext);
  const { numberOfVehicles } = context;

  return (
    <div className={styles.warshipsContainer}>
      <WarshipsPagination />
      <div className={styles.warshipsList}>
        {numberOfVehicles ? (
          <>
            {filteredVehiclesSlice.map((vehicle, idx) => (
              <Warship key={`${vehicle.title}${idx}`} vehicle={vehicle} />
            ))}
          </>
        ) : (
          <p>No warships found, try another filters!</p>
        )}
      </div>
    </div>
  );
}
