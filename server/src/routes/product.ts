import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import products from '../../data/products.json';

export default async function productRoutes(fastify: FastifyInstance) {
    fastify.get('/products',
    async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send(products);
    });
  }