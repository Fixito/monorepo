import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { Car } from '@monoscript/packages';

const fetchCars = async () => {
  try {
    const { data } = await axios.get<Car[]>('/api/v1/cars');
    return data;
  } catch (error) {
    console.error('Failed to fetch cars:', error);
    throw error;
  }
};

export default function App() {
  const {
    data: cars,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    return <div>{errorMessage}</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8 md:px-12'>
      <h1 className='text-3xl font-bold mb-6'>Available Cars</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        {cars?.map((car) => (
          <Card key={car.id} className='shadow-lg'>
            <CardHeader>
              <CardTitle className='text-xl'>
                {car.year} {car.make} {car.model}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <p>
                  <span className='font-semibold'>Color:</span> {car.color}
                </p>
                <p>
                  <span className='font-semibold'>Price:</span> $
                  {car.price.toLocaleString()}
                </p>
                <p>
                  <span className='font-semibold'>Mileage:</span>{' '}
                  {car.mileage.toLocaleString()} miles
                </p>
                <p>
                  <span className='font-semibold'>Fuel Type:</span>{' '}
                  {car.fuelType}
                </p>
                <p>
                  <span className='font-semibold'>Transmission:</span>{' '}
                  {car.transmission}
                </p>
                <p>
                  <span className='font-semibold'>VIN:</span> {car.vin}
                </p>
                <p>
                  <span className='font-semibold'>Availability:</span>{' '}
                  {car.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
