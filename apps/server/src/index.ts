import cors from 'cors';
import express from 'express';

import type { Car } from '@monoscript/types';

import { cars } from './cars.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/', (_req, res) => {
  res.status(200).json({
    message: "Bienvenue sur l'API Voitures",
    endpoints: {
      cars: '/api/v1/cars',
    },
  });
});

app.get<object, Car[]>('/api/v1/cars', (_req, res) => {
  res.status(200).json(cars);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Server running on port http://localhost:${port}`)
);
