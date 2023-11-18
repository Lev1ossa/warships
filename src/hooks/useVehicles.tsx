import { useQuery } from '@apollo/client';
import { WARSHIPS_QUERY } from '../utils/constants';
import { VehiclesResponse } from '../types/types';

export const useVehicles = () => {
  const { data, loading, error } = useQuery<VehiclesResponse>(WARSHIPS_QUERY);

  return { data, loading, error };
};
