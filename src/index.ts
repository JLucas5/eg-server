import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import namesRoutes from './routes/namesRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/names', namesRoutes);

// Start server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    console.log(`📝 Names endpoint available at http://localhost:${port}/api/names`);
});