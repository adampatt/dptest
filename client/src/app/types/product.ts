import { z } from 'zod';

// Define the Product schema
export const ProductSchema = z.object({
  name: z.string(),
  rating: z.number().min(0).max(5),
  price: z.number().positive(),
  imageUrl: z.string(),
  color: z.string(),
});

// Define a TypeScript type based on the schema
export type Product = z.infer<typeof ProductSchema>;