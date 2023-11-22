import { useContext, useState } from 'react';
import { useVehicles } from '../../../hooks/useVehicles';
import styles from './WarshipsFilter.module.scss';
import { AppContext } from '../../App/Context/AppContext';

export function WarshipsFilter() {
  const { vehicleFilters } = useVehicles();
  const context = useContext(AppContext);
  const {
    levelFilter,
    nationFilter,
    typeFilter,
    addLevelFilter,
    removeLevelFilter,
    addNationFilter,
    removeNationFilter,
    addTypeFilter,
    removeTypeFilter,
  } = context;

  const [showFilters, setShowFilters] = useState(false);

  const toggleLevelFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = event.target.name;
    event.target.checked
      ? addLevelFilter(filterName)
      : removeLevelFilter(filterName);
  };

  const toggleNationFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = event.target.name;
    event.target.checked
      ? addNationFilter(filterName)
      : removeNationFilter(filterName);
  };

  const toggleTypeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = event.target.name;
    event.target.checked
      ? addTypeFilter(filterName)
      : removeTypeFilter(filterName);
  };

  const toggleFiltersDisplay = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles.filtersWrapper}>
      <button
        type="button"
        className={styles.filtersBtn}
        onClick={toggleFiltersDisplay}
      >
        {showFilters ? 'Close filters' : 'Show filters'}
      </button>
      {showFilters ? (
        <div className={styles.filters}>
          <div className={styles.levelBlock}>
            <p className={styles.filterTitle}>Level</p>
            <ul className={styles.levelFilter}>
              {vehicleFilters.level.map((levelItem) => (
                <li key={levelItem} className={styles.levelItem}>
                  <input
                    className={styles.filterCheckbox}
                    type="checkbox"
                    name={levelItem}
                    value={levelItem}
                    checked={levelFilter.includes(levelItem)}
                    onChange={toggleLevelFilter}
                  />
                  <label className={styles.checkboxLabel} htmlFor={levelItem}>
                    {levelItem}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.nationBlock}>
            <p className={styles.filterTitle}>Nation</p>
            <ul className={styles.nationFilter}>
              {vehicleFilters.nation.map((nationItem) => (
                <li key={nationItem} className={styles.nationItem}>
                  <input
                    className={styles.filterCheckbox}
                    type="checkbox"
                    name={nationItem}
                    value={nationItem}
                    checked={nationFilter.includes(nationItem)}
                    onChange={toggleNationFilter}
                  />
                  <img
                    className={styles.nationImg}
                    src={vehicleFilters.nationIcons[nationItem]}
                    alt="nation icon"
                  />
                  <label className={styles.checkboxLabel} htmlFor={nationItem}>
                    {nationItem}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.typeBlock}>
            <p className={styles.filterTitle}>Type</p>
            <ul className={styles.typeFilter}>
              {vehicleFilters.type.map((typeItem) => (
                <li key={typeItem} className={styles.typeItem}>
                  <input
                    className={styles.filterCheckbox}
                    type="checkbox"
                    name={typeItem}
                    value={typeItem}
                    checked={typeFilter.includes(typeItem)}
                    onChange={toggleTypeFilter}
                  />
                  <img
                    className={styles.typeImg}
                    src={vehicleFilters.typeIcons[typeItem]}
                    alt="type icon"
                  />
                  <label className={styles.checkboxLabel} htmlFor={typeItem}>
                    {typeItem}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
