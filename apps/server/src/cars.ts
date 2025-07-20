import type { Car } from "@monoscript/packages";

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Bleu',
    price: 25000,
    mileage: 15000,
    fuelType: 'gasoline',
    transmission: 'automatic',
    vin: 'JTDKARFU0N0123456',
    isAvailable: true
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    color: 'Blanc',
    price: 35000,
    mileage: 5000,
    fuelType: 'electric',
    transmission: 'automatic',
    vin: '5YJ3E1EA0LF123456',
    isAvailable: true
  },
  {
    id: '3',
    make: 'BMW',
    model: 'X5',
    year: 2021,
    color: 'Noir',
    price: 45000,
    mileage: 25000,
    fuelType: 'diesel',
    transmission: 'automatic',
    vin: '5UXCR6C05L0123456',
    isAvailable: false
  }
];