export type Vehicle = {
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: string;
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
  nation: {
    name: string;
    title: string;
    color: string;
    icons: {
      small: string;
      medium: string;
      large: string;
    };
  };
};

export type Vehicles = Vehicle[];

export type VehiclesResponse = {
  vehicles: Vehicles;
};

export type vehicleFilters = {
  level: string[];
  nation: string[];
  type: string[];
  typeIcons: Record<string, string>;
  nationIcons: Record<string, string>;
};

export type AppContextProps = {
  levelFilter: string[];
  nationFilter: string[];
  typeFilter: string[];
  currentPage: number;
  numberOfVehicles: number;
  setLevelFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setNationFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setTypeFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setNumberOfVehicles: React.Dispatch<React.SetStateAction<number>>;
  addLevelFilter: (levelItem: string) => void;
  removeLevelFilter: (levelItem: string) => void;
  addNationFilter: (nationItem: string) => void;
  removeNationFilter: (nationItem: string) => void;
  addTypeFilter: (typeItem: string) => void;
  removeTypeFilter: (typeItem: string) => void;
};
