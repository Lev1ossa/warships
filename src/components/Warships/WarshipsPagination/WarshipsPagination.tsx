import { useContext } from 'react';
import styles from './WarshipsPagination.module.scss';
import { AppContext } from '../../App/Context/AppContext';
import { DEFAULT_MIN_PAGE } from '../../../utils/constants';
import { getMaxPage } from '../../../utils/utils';

export function WarshipsPagination() {
  const context = useContext(AppContext);
  const { currentPage, setCurrentPage, numberOfVehicles } = context;

  const firstPageHandler = () => {
    if (currentPage !== DEFAULT_MIN_PAGE) {
      let newPage = DEFAULT_MIN_PAGE;
      newPage = newPage < DEFAULT_MIN_PAGE ? DEFAULT_MIN_PAGE : newPage;
      setCurrentPage(newPage);
    }
  };

  const prevPageHandler = () => {
    if (currentPage !== DEFAULT_MIN_PAGE) {
      let newPage = currentPage - 1;
      newPage = newPage < DEFAULT_MIN_PAGE ? DEFAULT_MIN_PAGE : newPage;
      setCurrentPage(newPage);
    }
  };

  const nextPageHandler = () => {
    const maxPage = getMaxPage(numberOfVehicles);
    if (currentPage !== maxPage) {
      let newPage = currentPage + 1;
      newPage = newPage > maxPage ? maxPage : newPage;
      setCurrentPage(newPage);
    }
  };

  const lastPageHandler = () => {
    const maxPage = getMaxPage(numberOfVehicles);
    if (currentPage !== maxPage) {
      let newPage = maxPage;
      newPage = newPage > maxPage ? maxPage : newPage;
      setCurrentPage(newPage);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <div className={styles.paginationButton} onClick={firstPageHandler}>
          ⇇
        </div>
        <div className={styles.paginationButton} onClick={prevPageHandler}>
          ←
        </div>
        <div className={styles.paginationButton}>{currentPage}</div>
        <div className={styles.paginationButton} onClick={nextPageHandler}>
          →
        </div>
        <div className={styles.paginationButton} onClick={lastPageHandler}>
          ⇉
        </div>
      </div>
    </div>
  );
}
