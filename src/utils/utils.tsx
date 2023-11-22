import { DEFAULT_MIN_PAGE, DEFAULT_VEHICLES_PER_PAGE } from './constants';

export const getMaxPage = (numberOfVehicles: number) => {
  const maxPage = Math.ceil(numberOfVehicles / DEFAULT_VEHICLES_PER_PAGE);

  return maxPage || DEFAULT_MIN_PAGE;
};
