import dotenv from 'dotenv';

dotenv.config();

export const { PORT, NODE_ENV, DB_URI, JWT_SECRET } = process.env;
