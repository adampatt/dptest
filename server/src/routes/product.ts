import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import products from '../../data/products.json';

const getAllProductsSchema = {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            rating: { type: 'number' },
            price: { type: 'number' },
            imageUrl: { type: 'string' },
            color: { type: 'string' },
          },
          required: ['name', 'rating', 'price', 'imageUrl', 'color'],
        },
      },
    },
  };

export default async function productRoutes(fastify: FastifyInstance) {
    fastify.get('/products', {
        schema: getAllProductsSchema,
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send(products);
    });
  }