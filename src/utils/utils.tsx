import { Vehicles, vehicleFilters } from '../types/types';
import { DEFAULT_MIN_PAGE, DEFAULT_VEHICLES_PER_PAGE } from './constants';

export const getMaxPage = (numberOfVehicles: number) => {
  const maxPage = Math.ceil(numberOfVehicles / DEFAULT_VEHICLES_PER_PAGE);

  return maxPage || DEFAULT_MIN_PAGE;
};

export const getVehicleFilters = (vehiclesData: Vehicles) => {
  const levels: string[] = [];
  const nations: string[] = [];
  const types: string[] = [];
  const typeIcons = new Map<string, string>();
  const nationIcons = new Map<string, string>();

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

  return vehicleFilters;
};

export const getFilteredVehicles = (
  vehiclesData: Vehicles,
  levelFilter: string[],
  nationFilter: string[],
  typeFilter: string[]
) => {
  if (
    levelFilter.length === 0 &&
    nationFilter.length === 0 &&
    typeFilter.length === 0
  ) {
    return vehiclesData;
  }
  return vehiclesData.filter((vehicle) => {
    return (
      (levelFilter.length === 0
        ? true
        : levelFilter.includes(`${vehicle.level}`)) &&
      (nationFilter.length === 0
        ? true
        : nationFilter.includes(vehicle.nation.title)) &&
      (typeFilter.length === 0 ? true : typeFilter.includes(vehicle.type.title))
    );
  });
};

export const getFilteredVehiclesSlice = (
  filteredVehicles: Vehicles,
  currentPage: number
) => {
  return filteredVehicles.slice(
    (currentPage - 1) * DEFAULT_VEHICLES_PER_PAGE,
    currentPage * DEFAULT_VEHICLES_PER_PAGE
  );
};
