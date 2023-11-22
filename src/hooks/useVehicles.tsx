import { useQuery } from '@apollo/client';
import { WARSHIPS_QUERY } from '../utils/constants';
import { VehiclesResponse } from '../types/types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../components/App/Context/AppContext';
import {
  getFilteredVehicles,
  getFilteredVehiclesSlice,
  getVehicleFilters,
} from '../utils/utils';

export const useVehicles = () => {
  const { data, loading, error } = useQuery<VehiclesResponse>(WARSHIPS_QUERY);

  const context = useContext(AppContext);
  const {
    currentPage,
    levelFilter,
    nationFilter,
    typeFilter,
    setNumberOfVehicles,
  } = context;

  const vehiclesData = data ? data.vehicles : [];

  const vehicleFilters = getVehicleFilters(vehiclesData);

  const filteredVehicles = getFilteredVehicles(
    vehiclesData,
    levelFilter,
    nationFilter,
    typeFilter
  );

  const filteredVehiclesSlice = getFilteredVehiclesSlice(
    filteredVehicles,
    currentPage
  );

  useEffect(() => {
    setNumberOfVehicles(filteredVehicles.length);
  }, [setNumberOfVehicles, filteredVehicles.length]);

  return {
    vehiclesData,
    filteredVehiclesSlice,
    vehicleFilters,
    loading,
    error,
  };
};
