import { createContext, useState } from 'react';
import { AppContextProps } from '../../../types/types';
// import { useVehicles } from '../../../hooks/useVehicles';

export const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  // const { vehicleFilters, loading } = useVehicles();
  const [levelFilter, setLevelFilter] = useState<string[]>([]);
  const [nationFilter, setNationFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  // useEffect(() => {
  //   if (!loading) {
  //     setLevelFilter([...vehicleFilters.level]);
  //     setNationFilter([...vehicleFilters.nation]);
  //     setTypeFilter([...vehicleFilters.type]);
  //   }
  // }, []);

  const addLevelFilter = (levelItem: string) => {
    const newLevelFilter = [...levelFilter];
    newLevelFilter.push(levelItem);
    setLevelFilter(newLevelFilter);
  };

  const removeLevelFilter = (levelItem: string) => {
    const newLevelFilter = [...levelFilter].filter(
      (item) => item !== levelItem
    );
    setLevelFilter(newLevelFilter);
  };

  const addNationFilter = (nationItem: string) => {
    const newNationFilter = [...nationFilter];
    newNationFilter.push(nationItem);
    setNationFilter(newNationFilter);
  };

  const removeNationFilter = (nationItem: string) => {
    const newNationFilter = [...nationFilter].filter(
      (item) => item !== nationItem
    );
    setNationFilter(newNationFilter);
  };

  const addTypeFilter = (typeItem: string) => {
    const newTypeFilter = [...typeFilter];
    newTypeFilter.push(typeItem);
    setTypeFilter(newTypeFilter);
  };

  const removeTypeFilter = (typeItem: string) => {
    const newTypeFilter = [...typeFilter].filter((item) => item !== typeItem);
    setTypeFilter(newTypeFilter);
  };

  return (
    <AppContext.Provider
      value={{
        levelFilter,
        nationFilter,
        typeFilter,
        setLevelFilter,
        setNationFilter,
        setTypeFilter,
        addLevelFilter,
        removeLevelFilter,
        addNationFilter,
        removeNationFilter,
        addTypeFilter,
        removeTypeFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
