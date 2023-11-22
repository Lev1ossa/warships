import { useQuery } from '@apollo/client';
import { DEFAULT_VEHICLES_PER_PAGE, WARSHIPS_QUERY } from '../utils/constants';
import { Vehicle, VehiclesResponse, vehicleFilters } from '../types/types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../components/App/Context/AppContext';

export const useVehicles = () => {
  const { data, loading, error } = useQuery<VehiclesResponse>(WARSHIPS_QUERY);

  const vehiclesData = data ? data.vehicles : [];

  const levels: string[] = [];
  const nations: string[] = [];
  const types: string[] = [];
  const typeIcons = new Map<string, string>();
  const nationIcons = new Map<string, string>();

  const context = useContext(AppContext);
  const {
    currentPage,
    levelFilter,
    nationFilter,
    typeFilter,
    setNumberOfVehicles,
  } = context;

  vehiclesData.forEach((vehicle) => {
    levels.push(`${vehicle.level}`);
    nations.push(vehicle.nation.title);
    types.push(vehicle.type.title);
    typeIcons.set(vehicle.type.title, vehicle.type.icons.default);
    nationIcons.set(vehicle.nation.title, vehicle.nation.icons.small);
  });

  levels.sort((a, b) => +a - +b);
  nations.sort();
  types.sort();

  const vehicleFilters: vehicleFilters = {
    level: [...new Set(levels)],
    nation: [...new Set(nations)],
    type: [...new Set(types)],
    typeIcons: Object.fromEntries(typeIcons),
    nationIcons: Object.fromEntries(nationIcons),
  };

  let filteredVehiclesAll: Vehicle[];
  if (
    levelFilter.length === 0 &&
    nationFilter.length === 0 &&
    typeFilter.length === 0
  ) {
    filteredVehiclesAll = vehiclesData;
  } else {
    filteredVehiclesAll = vehiclesData.filter((vehicle) => {
      return (
        (levelFilter.length === 0
          ? true
          : levelFilter.includes(`${vehicle.level}`)) &&
        (nationFilter.length === 0
          ? true
          : nationFilter.includes(vehicle.nation.title)) &&
        (typeFilter.length === 0
          ? true
          : typeFilter.includes(vehicle.type.title))
      );
    });
  }

  const filteredVehicles = filteredVehiclesAll.slice(
    (currentPage - 1) * DEFAULT_VEHICLES_PER_PAGE,
    currentPage * DEFAULT_VEHICLES_PER_PAGE
  );

  useEffect(() => {
    setNumberOfVehicles(filteredVehiclesAll.length);
  }, [setNumberOfVehicles, filteredVehiclesAll.length]);

  return { vehiclesData, filteredVehicles, vehicleFilters, loading, error };
};
