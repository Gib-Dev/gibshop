import { PrismaClient } from "@prisma/client";

// Create a single instance of PrismaClient to be used throughout the application
export const prisma = new PrismaClient();
