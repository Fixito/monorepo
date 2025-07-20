export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  vin: string;
  isAvailable: boolean;
};